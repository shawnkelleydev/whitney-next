import { denverPhilSchedule } from 'constants/schedule'

import Performance from './Performance'

import styles from './styles.module.css'

export default function Performances() {
  let todayDate = new Date()
  const year = todayDate.getFullYear()
  const month = todayDate.getMonth() + 1

  return (
    <section className={styles.performances}>
      <h2>performances</h2>
      <ul>
        {denverPhilSchedule
          .filter(
            (concert) =>
              concert.dates.year >= year && concert.dates.month >= month
          )
          .map((performance, i) => (
            <Performance key={i} performance={performance} />
          ))}
      </ul>
    </section>
  )
}
