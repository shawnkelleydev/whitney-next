import Button from 'components/Button'
import Image from 'next/image'
import Performers from './performers'
import Ticket from 'components/Icons/Ticket'

import styles from './styles.module.css'

export default function Performance({ performance }) {
  const { date, imageAlt, imageUrl, performers, title, url } = performance

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
          <time>{date.rendered}</time>
        </div>
        <a href={url} target='_blank' rel='noreferrer'>
          <Button>
            <div className={styles['button-content']}>
              <span>
                <Ticket />
              </span>
              <strong>get tickets</strong>
            </div>
          </Button>
        </a>
      </div>
    </li>
  )
}
