import { useRouter } from 'next/router'

import PageWrapper from 'components/PageWrapper'

import styles from './styles.module.css'

export default function Contact() {
  let { route } = useRouter()
  route = route.replace('/', '')

  return (
    <PageWrapper>
      <h2>{route}</h2>
    </PageWrapper>
  )
}
