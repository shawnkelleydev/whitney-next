import { useRouter } from 'next/router'

import InPerson from './InPerson'
import Online from './Online'
import Ready from './Ready'

import styles from './styles.module.css'

export default function LessonsContent() {
  const router = useRouter()
  let { route } = router
  route = route.split('/')
  route = route[route.length - 1]

  return (
    <div className={styles['lessons-content']}>
      {route === 'inperson' && <InPerson />}
      {route === 'online' && <Online />}
      {route === 'ready' && <Ready />}
    </div>
  )
}
