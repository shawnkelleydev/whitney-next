import Button from 'components/Button'
import Image from 'next/image'
import Performers from './performers'
import Ticket from 'components/Icons/Ticket'

import styles from './styles.module.css'

export default function Performance({ performance }) {
  const { dates, imageUrl, performers, title, url } = performance

  return (
    <li className={styles.performance}>
      <Image height='800' layout='responsive' src={imageUrl} width='1440' />
      <div>
        <div>
          <h3>{title}</h3>
          <Performers performers={performers} />
          <time>{dates.rendered}</time>
        </div>
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
