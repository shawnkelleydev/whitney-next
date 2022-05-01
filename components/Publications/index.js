import Link from 'components/Link'
import { pubs } from 'constants/pub'

import styles from './styles.module.css'

export default function Publications() {
  console.log(pubs)
  return (
    <section className={styles.pubs}>
      <h2>publications</h2>
      <ul>
        {pubs.map((pub, i) => {
          if (!pub.link)
            return (
              <li key={i}>
                <cite>{pub.name}</cite>, <cite>{pub.parent}</cite>.
              </li>
            )
          if (pub.link)
            return (
              <li key={i}>
                <Link url={pub.link}>
                  <cite>{pub.name}</cite>, <cite>{pub.parent}</cite>
                </Link>
                .
              </li>
            )
        })}
      </ul>
    </section>
  )
}
