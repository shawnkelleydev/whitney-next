import styles from './styles.module.css'

export default function Tickets({ tickets }) {
  return (
    <div className={styles.tickets}>
      <h4>Tickets</h4>
      <ul>
        {Object.keys(tickets).map((key, i) => (
          <li key={i}>
            <span>{key}</span>
            <span>{!!tickets[key] ? '$' + tickets[key] : 'FREE'}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
