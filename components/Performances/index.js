import { denverPhilSchedule, months } from 'constants/schedule'

import Performance from './Performance'

export default function Performances() {
  let todayDate = new Date()
  const year = todayDate.getFullYear()
  const month = todayDate.getMonth() + 1

  return (
    <section>
      <h2>performances</h2>
      <ul>
        {denverPhilSchedule
          .filter(
            (concert) =>
              concert.dates[concert.dates.length - 1].year >= year &&
              concert.dates[concert.dates.length - 1].month >= month
          )
          .map((performance, i) => (
            <Performance key={i} performance={performance} />
          ))}
      </ul>
    </section>
  )
}
