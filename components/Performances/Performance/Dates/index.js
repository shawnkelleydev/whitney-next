import Event from 'components/Icons/Event'
import Time from 'components/Time'

import styles from './styles.module.css'

export default function Dates({ dates }) {
  return (
    <div className={styles.dates}>
      <h4>Dates</h4>
      <ul>
        {dates.map((date, i) => (
          <li key={i}>
            <Event />
            <Time date={date} />
          </li>
        ))}
      </ul>
    </div>
  )
}
