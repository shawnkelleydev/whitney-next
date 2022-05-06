import styles from './styles.module.css'

export default function Quote() {
  const quote = {
    citation: 'Shinichi Suzuki',
    text: 'Beautiful music, beautiful heart.',
  }

  return (
    <section className={styles.quote}>
      <blockquote>
        <q>{quote.text}</q>
        <cite>{quote.citation}</cite>
      </blockquote>
    </section>
  )
}
