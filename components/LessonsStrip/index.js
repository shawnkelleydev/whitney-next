import LessonsContent from 'components/LessonsContent'
import LessonsMenu from 'components/LessonsMenu'
import Strip from 'components/Strip'

import styles from './styles.module.css'

export default function LessonStrip() {
  return (
    <Strip>
      <div className={styles['lessons-strip']}>
        <h2>private lessons</h2>
        <LessonsMenu />
        <LessonsContent />
      </div>
    </Strip>
  )
}
