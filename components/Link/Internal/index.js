import Link from 'next/link'

export default function External({ styles, text, url }) {
  return (
    <Link href={url}>
      <a className={styles.a}>{text}</a>
    </Link>
  )
}
