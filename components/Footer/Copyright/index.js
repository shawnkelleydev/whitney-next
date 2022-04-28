// throws async errors with aliasing
import metaData from 'constants/meta'

import styles from './styles.module.css'

export default function Footer() {
  const epocDate = new Date()
  const year = epocDate.getFullYear()

  return (
    <ul className={styles.ul}>
      <li>
        Copyright © {year} {metaData.author}.
      </li>
      <li>All rights reserved.</li>
    </ul>
  )
}
