import styles from './styles.module.css'

export default function Repertoire({ repertoire }) {
  return (
    <div className={styles.repertoire}>
      <h4>Repertoire</h4>
      <ul>
        {repertoire.map((piece, i) => (
          <li key={i}>
            {piece.composer}, <i>{piece.title}</i>
          </li>
        ))}
      </ul>
    </div>
  )
}
