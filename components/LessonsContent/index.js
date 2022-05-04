import { useRouter } from 'next/router'

import Live from './Live'
import Online from './Online'
import Ready from './Ready'

import styles from './styles.module.css'

export default function LessonsContent() {
  const router = useRouter()
  let { route } = router

  return (
    <div className={styles['lessons-content']}>
      {route.includes('live') && <Live />}
      {route.includes('online') && <Online />}
      {route.includes('ready') && <Ready />}
    </div>
  )
}
