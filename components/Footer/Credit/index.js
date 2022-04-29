import { meta } from 'constants/data'

import styles from './styles.module.css'

export default function Credit() {
  return (
    <small className={styles.credit}>
      Site developed by <a href={meta.DEVELOPER_URL}>{meta.DEVELOPER}</a>.
    </small>
  )
}
