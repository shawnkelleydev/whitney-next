import { useRouter } from 'next/router'

import PageWrapper from 'components/PageWrapper'

import styles from './styles.module.css'

export default function Page3() {
  let { route } = useRouter()
  route = route.replace('/', '')

  return (
    <PageWrapper>
      <h1>{route}</h1>
    </PageWrapper>
  )
}
