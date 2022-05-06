export default function Input({ label, setValue, type, value }) {
  return (
    <label htmlFor={label}>
      <span>{label}</span>
      {type !== 'textarea' && (
        <input
          id={label}
          name={label}
          onChange={(e) => setValue(e.target.value)}
          type={type}
          value={value}
        />
      )}
      {type === 'textarea' && (
        <textarea
          id={label}
          name={label}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      )}
    </label>
  )
}
