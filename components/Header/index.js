import Banner from './Banner'
import Nav from './Nav'

import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Banner />
      <Nav />
    </header>
  )
}
