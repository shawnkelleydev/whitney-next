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
  const body = JSON.parse(req.body)
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
        if (error) return res.status(500).json({ success: false, error, info })
      })
      res.status(200).json({ success: true, status: 200, body })
    } catch (error) {
      res.status(400).json({ success: false, status: 400, error })
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
