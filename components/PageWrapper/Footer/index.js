import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        {/* TODO: Add year and author */}
        <li>Copyright © *year* *author*.</li>
        <li>All rights reserved.</li>
      </ul>
    </footer>
  )
}
