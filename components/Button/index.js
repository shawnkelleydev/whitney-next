import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

export default function Button({ children }) {
  const ref = useRef()
  const [width, setWidth] = useState(300)

  useEffect(() => {
    const button = ref.current
    setWidth(button.offsetWidth)
    const cb = () => {
      setWidth(button.offsetWidth)
    }
    window.addEventListener('resize', cb)
  }, [])

  return (
    <button className={styles.button} ref={ref} data-width={width}>
      {children}
    </button>
  )
}
