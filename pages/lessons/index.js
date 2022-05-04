import LessonsMenu from 'components/LessonsMenu'
import PageWrapper from 'components/PageWrapper'
import Strip from 'components/Strip'

import styles from './styles.module.css'

export default function PrivateLessons() {
  return (
    <PageWrapper>
      <Strip>
        <h2>private lessons</h2>
      </Strip>
      <section className={styles.quotes}>
        <blockquote>
          <q>
            Teaching music is not my main purpose. I want to make good citizens.
            If children hear fine music from the day of their birth and learn to
            play it, they develop sensitivity, discipline and endurance. They
            get a beautiful heart.
          </q>
          <cite>Shinichi Suzuki</cite>
        </blockquote>
      </section>
    </PageWrapper>
  )
}
