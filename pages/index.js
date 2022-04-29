import Bio from 'components/Bio'
import PageWrapper from 'components/PageWrapper'

import styles from './styles.module.css'

export default function Home() {
  return (
    <PageWrapper>
      <div className={styles.home}>
        <Bio />
        <section>
          <h2>performances</h2>
        </section>
        <section>
          <h2>publications</h2>
        </section>
      </div>
    </PageWrapper>
  )
}
