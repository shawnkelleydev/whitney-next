import Bio from 'components/Bio'
import Performances from 'components/Performances'
import Publications from 'components/Publications'

import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Performances />
      <section>
        <Bio />
        <Publications />
      </section>
    </div>
  )
}
