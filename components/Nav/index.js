import Link from 'components/Link'
import { pages } from 'utils/constants/data'

import styles from './styles.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      {pages.map((page, i) => (
        <Link key={i} url={page !== 'home' ? `/${page.toLowerCase()}` : '/'}>
          {page}
        </Link>
      ))}
    </nav>
  )
}
