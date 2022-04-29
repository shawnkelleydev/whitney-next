import External from './External'
import Internal from './Internal'

import styles from './styles.module.css'

export default function Link({ text, url }) {
  if (url.charAt(0) === '/')
    return <Internal styles={styles} text={text} url={url} />

  return <External styles={styles} text={text} url={url} />
}
