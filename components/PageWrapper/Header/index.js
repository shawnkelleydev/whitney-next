import Banner from './Banner'
import Nav from './Nav'

import styles from './styles.module.css'

export default function Header({ pages }) {
  return (
    <header className={styles.header}>
      <Banner />
      <Nav pages={pages} />
    </header>
  )
}
