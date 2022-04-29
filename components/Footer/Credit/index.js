import { meta } from 'constants/data'
import Link from 'components/Link'

import styles from './styles.module.css'

export default function Credit() {
  return (
    <small className={styles.credit}>
      Site developed by <Link text={meta.DEVELOPER} url={meta.DEVELOPER_URL} />.
    </small>
  )
}
