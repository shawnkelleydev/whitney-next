import Link from 'next/link'

import styles from './styles.module.css'

export default function Nav({ pages }) {
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
