// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_PASSWORD,
  },
  secure: true,
})

export default function handler(req, res) {
  let body = JSON.parse(req.body)
  const { name, email, message } = body

  if (req.method === 'POST' && body) {
    try {
      const mailData = {
        from: email,
        to: process.env.NEXT_PUBLIC_EMAIL,
        subject: `A message from ${name} via whitneykelley.com`,
        text: `From ${name}(${email}): ${message}`,
      }
      transporter.sendMail(mailData, (error, info) => {
        if (error) {
          console.error('email error', error)
          res.status(500).json({ status: 500, error })
        }
        if (info) {
          res.status(200).json({ status: 200 })
        }
      })
    } catch (error) {
      res.status(400).json({ status: 400, error })
    }
  }

  if (req.method !== 'POST' || !body)
    res.status(405).json({
      success: false,
      status: 405,
      error:
        'Please provide a POST request with a body in { name, email, message } format',
    })
}
