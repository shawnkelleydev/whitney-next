import { months } from 'constants/schedule'

import styles from './styles.module.css'

export default function Time({ date }) {
  const getFormattedTime = (time) => {
    let t = time
    const isPm = parseInt(t.split(':')[0]) > 12 ? true : false
    if (isPm) {
      t = t.split(':')
      t = `${parseInt(t[0]) - 12}:${t[1]}pm`
    }
    if (!isPm) t = t + 'am'
    return t
  }

  return (
    <time
      className={styles.time}
      dateTime={`${date.year}-${date.month}-${date.day}T${date.time}`}
    >
      {months[date.month - 1]} {date.day}, {date.year} @{' '}
      {getFormattedTime(date.time)}
    </time>
  )
}
