import Image from 'next/image'

import styles from './styles.module.css'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src='/website_banner_1.jpg'
        width='12000'
        height='3900'
        layout='responsive'
      />
      <h2>
        <b>Whitney Kelley</b>
        <span>Flutist</span>
      </h2>
    </div>
  )
}
