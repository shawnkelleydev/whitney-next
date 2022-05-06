import { useState } from 'react'

import Button from 'components/Button'
import Input from './Input'

import styles from './styles.module.css'

export default function ContactForm({ onSubmit }) {
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

  return (
    <form className={styles.contact} onSubmit={onSubmit}>
      <Input label='name' setValue={setName} type='text' value={name} />
      <Input label='email' setValue={setEmail} type='email' value={email} />
      <Input
        label='message'
        setValue={setMessage}
        type='textarea'
        value={message}
      />
      <Button type='submit' onClick={() => setSubmitted(true)}>
        <div>
          <strong>submit</strong>
        </div>
      </Button>
      <legend>
        Good news -- you won&apos;t be added to a database or email list.
      </legend>
    </form>
  )
}
