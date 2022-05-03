import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.css'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        alt='dr. whitney kelley sitting, holding a gold flute perpendicular to the ground and smiling'
        src='/website_banner_2.jpg'
        width='12000'
        height='3900'
        layout='responsive'
      />
      <div className={styles.overlay}>
        <div>
          <Link href='/'>
            <a>
              <h1>
                <b>Dr. Whitney Kelley</b>
                <small>Flutist</small>
              </h1>
            </a>
          </Link>
        </div>
        <div />
      </div>
    </div>
  )
}
