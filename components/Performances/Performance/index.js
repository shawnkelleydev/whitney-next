import Button from 'components/Button'
import Dates from './Dates'
import Image from 'next/image'
import Performers from './performers'
import Repertoire from './Repertoire'
import Ticket from 'components/Icons/Ticket'

import styles from './styles.module.css'
import Tickets from './Tickets'

export default function Performance({ performance }) {
  const { imageUrl, performers, title, url } = performance

  return (
    <li className={styles.performance}>
      <Image height='800' layout='responsive' src={imageUrl} width='1440' />
      <div>
        <h3>{title}</h3>
        <Performers performers={performers} />
        <a href={url} target='_blank' rel='noreferrer'>
          <Button>
            <span>
              <Ticket />
            </span>
            <strong>get tickets</strong>
          </Button>
        </a>
      </div>
    </li>
  )
}
