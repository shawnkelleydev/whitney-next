import { useEffect, useState } from 'react'

import External from './External'
import Internal from './Internal'

import styles from './styles.module.css'

export default function Link({ text, url }) {
  const [internal, setInternal] = useState(false)

  useEffect(() => {
    url.charAt(0) === '/' && setInternal(true)
  }, [url])

  if (internal) return <Internal styles={styles} text={text} url={url} />

  return <External styles={styles} text={text} url={url} />
}
