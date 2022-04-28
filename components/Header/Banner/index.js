import Link from 'next/link'
import meta from 'constants/meta'

import styles from './styles.module.css'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Link href='/'>
        <a>
          <h1>
            <b>{meta.TITLE}</b>
            {/* TODO: optional <small>{meta.TAG}</small> */}
          </h1>
        </a>
      </Link>
    </div>
  )
}
