import { denverPhilSchedule } from 'constants/schedule'

import Performance from './Performance'

export default function Performances() {
  return (
    <section>
      <h2>performances</h2>
      <ul>
        {denverPhilSchedule.map((performance, i) => (
          <Performance key={i} performance={performance} />
        ))}
      </ul>
    </section>
  )
}
