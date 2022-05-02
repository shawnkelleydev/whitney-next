import Link from 'components/Link'
import { useRouter } from 'next/router'
import { pages } from 'constants/data'

import styles from './styles.module.css'

export default function Nav() {
  let { route } = useRouter()
  route = route.replace('/', '')

  return (
    <nav className={styles.nav}>
      {pages.map((page, i) => (
        <Link url={page !== 'home' ? `/${page.toLowerCase()}` : '/'} key={i}>
          {page}
        </Link>
      ))}
    </nav>
  )
}
