import Link from 'next/link'

import styles from './styles.module.css'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Link href='/'>
        <a>
          <h1>
            {/* TODO: Add title */}
            <b>title</b>
            {/* TODO: optional <small>sub title</small> */}
          </h1>
        </a>
      </Link>
    </div>
  )
}
