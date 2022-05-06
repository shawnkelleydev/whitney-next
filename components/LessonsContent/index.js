import InPerson from './InPerson'
import Online from './Online'
import Ready from './Ready'

import styles from './styles.module.css'

export default function LessonsContent({ currentView }) {
  return (
    <div className={styles['lessons-content']}>
      {currentView === 'in person' && <InPerson />}
      {currentView === 'online' && <Online />}
      {currentView === 'ready' && <Ready />}
    </div>
  )
}
