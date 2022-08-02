import Button from 'components/Button'
import Image from 'next/image'
import Performers from './Performers'
import Ticket from 'components/Icons/Ticket'

import styles from './styles.module.css'

export default function Performance({ performance }) {
  const { date, imageAlt, imageUrl, performers, title, url } = performance

  const dateTime = date.year + '-' + date.month + '-' + date.day

  return (
    <li className={styles.performance}>
      <div>
        <Image
          alt={imageAlt}
          height='800'
          layout='responsive'
          src={imageUrl}
          width='1440'
        />
      </div>
      <div className={styles.info}>
        <div>
          <h3>{title}</h3>
          <Performers performers={performers} />
          <time dateTime={dateTime}>{date.rendered}</time>
        </div>
        <Button
          className={styles.button}
          onClick={() => window.open(url, '_blank')}
        >
          <Ticket />
          <strong>get tickets</strong>
        </Button>
      </div>
    </li>
  )
}
