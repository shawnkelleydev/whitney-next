import { useState } from 'react'

import LessonsContent from 'components/LessonsContent'
import LessonsMenu from 'components/LessonsMenu'
import Strip from 'components/Strip'

import styles from './styles.module.css'

export default function LessonStrip() {
  const views = ['ready', 'in person', 'online']
  const [currentView, setCurrentView] = useState(views[0])

  return (
    <Strip>
      <div className={styles['lessons-strip']}>
        <h2>private lessons</h2>
        <LessonsMenu
          currentView={currentView}
          setCurrentView={setCurrentView}
          views={views}
        />
        <LessonsContent currentView={currentView} view={views} />
      </div>
    </Strip>
  )
}
