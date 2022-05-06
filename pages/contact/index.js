import { useState } from 'react'

import PageWrapper from 'components/PageWrapper'
import Strip from 'components/Strip'

import styles from './styles.module.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <PageWrapper>
      <Strip>
        <form className={styles.contact}>
          <label>
            <span>name:</span>
            <input />
          </label>
          <label>
            <span>email:</span>
            <input />
          </label>
          <label>
            <span>message:</span>
            <textarea />
          </label>
          <button type='submit' onClick={() => setSubmitted(true)}>
            submit
          </button>
          <legend>
            Good news -- you won&apos;t be added to a database or email list.
          </legend>
        </form>
      </Strip>
    </PageWrapper>
  )
}
