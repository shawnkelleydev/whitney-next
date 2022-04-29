import Copyright from './Copyright'
import Credit from './Credit'

import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Copyright />
      <Credit />
    </footer>
  )
}
