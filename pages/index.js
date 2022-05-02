import Banner from 'components/Banner'
import Bio from 'components/Bio'
import PageWrapper from 'components/PageWrapper'
import Performances from 'components/Performances'
import Publications from 'components/Publications'

import styles from './styles.module.css'

export default function Home() {
  return (
    <PageWrapper>
      <div className={styles.home}>
        <Bio />
        <Performances />
        <Publications />
      </div>
    </PageWrapper>
  )
}
