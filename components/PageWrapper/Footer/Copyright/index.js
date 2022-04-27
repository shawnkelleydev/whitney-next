import styles from './styles.module.css'

export default function Footer() {
  return (
    <ul className={styles.ul}>
      {/* TODO: Add year and author */}
      <li>Copyright © *year* *author*.</li>
      <li>All rights reserved.</li>
    </ul>
  )
}
