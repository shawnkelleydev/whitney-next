import { useRouter } from 'next/router'

import Container from './Container'

import styles from './styles.module.css'

export default function PageContent({ children }) {
  let { route } = useRouter()
  route = route.replace('/', '')
  if (route === '') route = 'home'

  return (
    <div className={styles['page-content']}>
      <h2>{route}</h2>
      {children?.map((child, i) => (
        <Container key={i}>{child}</Container>
      ))}
    </div>
  )
}
