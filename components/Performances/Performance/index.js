import Link from 'components/Link'
import Dates from './Dates'
import Repertoire from './Repertoire'

import styles from './styles.module.css'
import Tickets from './Tickets'

export default function Performance({ performance }) {
  return (
    <li className={styles.performance}>
      <Link url={performance.url}>
        <h3>{performance.title}</h3>
      </Link>
      <Repertoire repertoire={performance.repertoire} />
      <Dates dates={performance.dates} />
      <Tickets tickets={performance.tickets} />
    </li>
  )
}
