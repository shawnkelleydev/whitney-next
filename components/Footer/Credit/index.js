import { meta } from 'utils/constants/data'
import Link from 'components/Link'

import styles from './styles.module.css'

export default function Credit() {
  return (
    <small className={styles.credit}>
      Site developed by <Link url={meta.DEVELOPER_URL}>{meta.DEVELOPER}</Link>.
    </small>
  )
}
