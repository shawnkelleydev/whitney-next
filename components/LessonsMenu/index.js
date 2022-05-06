import Button from 'components/Button'

import styles from './styles.module.css'

export default function LessonsMenu({ currentView, setCurrentView, views }) {
  return (
    <div className={styles['lessons-menu']}>
      {views.map((view, i) => (
        <Button
          className={currentView === view ? 'active' : ''}
          key={i}
          onClick={() => setCurrentView(view)}
        >
          <strong>{view === 'ready' ? 'Is my child ready?' : view}</strong>
        </Button>
      ))}
    </div>
  )
}
