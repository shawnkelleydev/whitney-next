import Link from 'components/Link'

import styles from './styles.module.css'

export default function LessonsMenu() {
  return (
    <div className={styles['lessons-menu']}>
      <Link url='/lessons/inperson'>in person</Link>
      <Link url='/lessons/online'>online</Link>
      <Link url='/lessons/ready'>ready</Link>
    </div>
  )
}
