import Link from 'next/link'
import { meta } from 'constants/data'

import styles from './styles.module.css'

export default function Logo() {
  return (
    <Link href='/'>
      <a className={styles.logo}>
        <h1>
          <b>{meta.TITLE}</b>
          {/* <small>{meta.TAG}</small> */}
        </h1>
      </a>
    </Link>
  )
}
