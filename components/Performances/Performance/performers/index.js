import styles from './styles.module.css'

export default function Performers({ performers }) {
  return (
    <span className={styles.performers}>
      {performers.map((performer, i) => (
        <strong key={i}>{performer}</strong>
      ))}
    </span>
  )
}
