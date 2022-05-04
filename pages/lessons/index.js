import LessonsMenu from 'components/LessonsMenu'
import PageWrapper from 'components/PageWrapper'
import Strip from 'components/Strip'

import styles from './styles.module.css'

export default function PrivateLessons() {
  return (
    <PageWrapper>
      <Strip>
        <h2>Private Lessons</h2>
      </Strip>
      <section className={styles.quotes}>
        <blockquote>
          <q>Considerable technique.</q>
          <cite>Winston-Salem Journal</cite>
        </blockquote>
      </section>
    </PageWrapper>
  )
}
