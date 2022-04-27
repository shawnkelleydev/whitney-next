import { useRouter } from 'next/router'
import PageWrapper from 'components/PageWrapper'

export default function Home() {
  let { route } = useRouter()
  route = route.replace('/', '')

  return (
    <PageWrapper>
      <h1>home</h1>
    </PageWrapper>
  )
}
