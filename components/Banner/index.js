import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.css'

export default function Banner() {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
  }, [])

  return (
    <div className={styles.banner}>
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
      {windowWidth >= 500 && (
        <Image
          alt='dr. whitney kelley sitting, holding a gold flute perpendicular to the ground and smiling'
          src='/website_banner_2.jpg'
          width='12000'
          height='3900'
          layout='responsive'
        />
      )}
      {windowWidth < 500 && (
        <Image
          alt='dr. whitney kelley sitting, holding a gold flute perpendicular to the ground and smiling'
          src='/whitney_headshot_2.jpg'
          width='5184'
          height='3456'
          layout='responsive'
        />
      )}
    </div>
  )
}
