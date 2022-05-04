import styles from './styles.module.css'

export default function Strip({ children }) {
  return <section className={styles.strip}>{children}</section>
}
