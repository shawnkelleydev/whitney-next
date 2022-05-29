import { denverPhilSchedule } from 'utils/constants/schedule'

import { dateToComposite } from 'utils/conversions'

import Performance from './Performance'
import Strip from 'components/Strip'

import styles from './styles.module.css'

export default function Performances() {
  let todayDate = new Date()
  const year = todayDate.getFullYear()
  const month = todayDate.getMonth() + 1
  const day = todayDate.getDate()

  const todayComposite = dateToComposite(year, month, day)

  const futurePerformances = denverPhilSchedule.filter(
    (concert) => concert.date.composite >= todayComposite
  )

  if (futurePerformances.length < 1) return null

  return (
    <Strip>
      <h2>performances</h2>
      <ul className={styles.performances}>
        {futurePerformances.map((performance, i) => (
          <Performance key={i} performance={performance} />
        ))}
      </ul>
    </Strip>
  )
}
