import Link from 'next/link'
import meta from 'constants/meta'

import styles from './styles.module.css'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Link href='/'>
        <a>
          <h1>
            <b>{meta.title}</b>
            {/* TODO: optional <small>{meta.tag}</small> */}
          </h1>
        </a>
      </Link>
    </div>
  )
}
