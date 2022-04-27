import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './styles.module.css'

export default function Nav({ pages }) {
  const router = useRouter()
  console.log(router.route)

  return (
    <nav className={styles.nav}>
      {pages.map((page, i) => (
        <Link
          href={`/${page.toLowerCase()}`}
          key={i}
        >
          <a>
            <span>{page}</span>
          </a>
        </Link>
      ))}
    </nav>
  )
}
