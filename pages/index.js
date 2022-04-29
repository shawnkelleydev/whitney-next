import Banner from 'components/Banner'
import Bio from 'components/Bio'
import PageWrapper from 'components/PageWrapper'
import Performances from 'components/Performances'

import styles from './styles.module.css'

export default function Home() {
  return (
    <PageWrapper>
      <Banner />
      <div className={styles.home}>
        <Bio />
        <Performances />
        <section>
          <h2>publications</h2>
        </section>
      </div>
    </PageWrapper>
  )
}
