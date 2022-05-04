import Link from 'components/Link'

import styles from './styles.module.css'

export default function LessonsMenu() {
  return (
    <div className={styles['lessons-menu']}>
      <Link url='/lessons/ready'>is my child ready?</Link>
      <Link url='/lessons/live'>live</Link>
      <Link url='/lessons/online'>online</Link>
    </div>
  )
}
