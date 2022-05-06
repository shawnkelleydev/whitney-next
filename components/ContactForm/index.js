import { useState } from 'react'

import Button from 'components/Button'
import Input from './Input'

import styles from './styles.module.css'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (submitted)
    return (
      <div className={styles.submitted}>
        <strong>Thank you!</strong>
        <span>I&apos;ll be in touch soon.</span>
      </div>
    )

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    let body = {
      name,
      email,
      message,
    }

    body = JSON.stringify(body)

    const url = '/api/hello'
    const payload = { method: 'POST', body }
    fetch(url, payload)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <form className={styles.contact} onSubmit={(e) => handleSubmit(e)}>
      <Input
        label='name'
        setValue={setName}
        required
        type='text'
        value={name}
      />
      <Input
        label='email'
        setValue={setEmail}
        required
        type='email'
        value={email}
      />
      <Input
        label='message'
        setValue={setMessage}
        required
        type='textarea'
        value={message}
      />
      <Button type='submit'>
        <div>
          <strong>submit</strong>
        </div>
      </Button>
      <legend>* required</legend>
      <small>
        Your data will <em>not</em> be saved, and you will <em>not</em> be
        signed up for an email list.
      </small>
    </form>
  )
}
