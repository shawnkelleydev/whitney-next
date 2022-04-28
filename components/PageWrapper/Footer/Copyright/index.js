import styles from './styles.module.css'

export default function Footer() {
  const epocDate = new Date()
  const year = epocDate.getFullYear()

  return (
    <ul className={styles.ul}>
      {/* TODO: Add author */}
      <li>Copyright © {year} [author].</li>
      <li>All rights reserved.</li>
    </ul>
  )
}
