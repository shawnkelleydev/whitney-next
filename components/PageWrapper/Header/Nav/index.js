import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './styles.module.css'

export default function Nav() {
  let { route } = useRouter()
  route = route.replace('/', '')

  // TODO: set pages
  const pages = ['about', 'work', 'contact']

  return (
    <nav className={styles.nav}>
      {pages.map((page, i) => (
        <Link
          href={`/${page.toLowerCase()}`}
          key={i}
        >
          <a className={page === route ? styles.active : ''}>
            <span>{page}</span>
          </a>
        </Link>
      ))}
    </nav>
  )
}
