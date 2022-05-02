import Button from 'components/Button'
import Image from 'next/image'

import styles from './styles.module.css'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        alt='dr. whitney kelley sitting, holding a gold flute perpendicular to the ground and smiling'
        src='/website_banner_1.jpg'
        width='12000'
        height='3900'
        layout='responsive'
      />
      <div className={styles.overlay}>
        <div />
        <div>
          <h1>
            <b>Dr. Whitney Kelley</b>
            <small>Flutist</small>
          </h1>
        </div>
      </div>
    </div>
  )
}
