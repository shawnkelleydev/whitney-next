export default function Input({ label, setValue, type, value, ...rest }) {
  return (
    <label htmlFor={label}>
      <span>
        {label}
        <sup>*</sup>
      </span>
      {type !== 'textarea' && (
        <input
          id={label}
          name={label}
          onChange={(e) => setValue(e.target.value)}
          type={type}
          value={value}
          {...rest}
        />
      )}
      {type === 'textarea' && (
        <textarea
          id={label}
          name={label}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          {...rest}
        />
      )}
    </label>
  )
}
