import Button from 'components/Button'
import Dates from './Dates'
import Image from 'next/image'
import Repertoire from './Repertoire'
import Ticket from 'components/Icons/Ticket'

import styles from './styles.module.css'
import Tickets from './Tickets'

export default function Performance({ performance }) {
  return (
    <li className={styles.performance}>
      <Image
        height='800'
        layout='responsive'
        src={performance.imageUrl}
        width='1440'
      />
      <div>
        <h3>{performance.title}</h3>
        <Repertoire repertoire={performance.repertoire} />
        <Dates dates={performance.dates} />
        <Tickets tickets={performance.tickets} />
        <a href={performance.url} target='_blank' rel='noreferrer'>
          <Button>
            <Ticket />
            <span>get tickets</span>
          </Button>
        </a>
      </div>
    </li>
  )
}
