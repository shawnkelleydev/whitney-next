import Link from 'next/link'

import styles from './styles.module.css'

export default function Banner() {
  return (
    <Link
      className={styles.banner}
      href={`/`}
    >
      <a>
        <h1>
          <b>Title</b>
          <small>Sub Title</small>
        </h1>
      </a>
    </Link>
  )
}
