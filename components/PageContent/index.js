import { useRouter } from 'next/router'

import styles from './styles.module.css'

export default function PageContent({ children }) {
  let { route } = useRouter()
  route = route.replace('/', '')

  return (
    <div className={styles['page-content']}>
      <h2>{route.length > 0 ? route : 'home'}</h2>
      {children}
    </div>
  )
}
