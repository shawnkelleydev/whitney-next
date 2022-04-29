export default function Dates({ dates }) {
  return (
    <div>
      <h4>Dates</h4>
      <ul>
        {dates.map((date, i) => (
          <li key={i}>
            {`${date.month} ${date.day}, ${date.year} at ${date.time}`}
          </li>
        ))}
      </ul>
    </div>
  )
}
