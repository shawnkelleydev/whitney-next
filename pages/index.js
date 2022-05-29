import { denverPhilSchedule } from 'utils/constants/schedule'

import Bio from 'components/Bio'
import Performances from 'components/Performances'
import Publications from 'components/Publications'

import styles from './styles.module.css'

export default function Home({ staticImages }) {
  return (
    <div className={styles.home}>
      <Performances staticImages={staticImages} />
      <section>
        <Bio />
        <Publications />
      </section>
    </div>
  )
}

export async function getStaticProps(context) {
  const staticImages = []
  denverPhilSchedule.forEach((concert) => {
    staticImages.push(concert.imageUrl)
  })

  const props = { staticImages }

  return { props }
}
