// throws async errors with aliasing
import { meta } from 'utils/constants/data'

import styles from './styles.module.css'

export default function Copyright() {
  return (
    <div className={styles.copyright}>
      <small>
        Copyright © {meta.CURRENT_YEAR} {meta.AUTHOR}.
      </small>
      <small>All rights reserved.</small>
    </div>
  )
}
