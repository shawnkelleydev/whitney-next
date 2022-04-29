import Link from 'components/Link'
import Dates from './Dates'
import Repertoire from './Repertoire'

import styles from './styles.module.css'
import Tickets from './Tickets'

export default function Performance({ performance }) {
  return (
    <a href={performance.url} rel='noreferrer' target='_blank'>
      <li className={styles.performance}>
        <h3>{performance.title}</h3>
        <Repertoire repertoire={performance.repertoire} />
        <Dates dates={performance.dates} />
        <Tickets tickets={performance.tickets} />
      </li>
    </a>
  )
}
