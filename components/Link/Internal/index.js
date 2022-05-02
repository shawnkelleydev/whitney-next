import Link from 'next/link'
import { useRouter } from 'next/router'

export default function External({ styles, text, url }) {
  let { route } = useRouter()
  route = route !== '/' ? route.replace('/', '') : 'home'

  return (
    <Link href={url}>
      <a className={`${styles.a} ${route === text ? styles.active : ''}`}>
        {text}
      </a>
    </Link>
  )
}
