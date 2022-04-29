export default function Repertoire({ repertoire }) {
  return (
    <>
      <h4>Repertoire</h4>
      <ul>
        {repertoire.map((piece, i) => (
          <li key={i}>{`${piece.composer}, ${piece.title}`}</li>
        ))}
      </ul>
    </>
  )
}
