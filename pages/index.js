import { useRouter } from 'next/router'
import PageWrapper from 'components/PageWrapper'

export default function Home() {
  let { route } = useRouter()
  route = route.replace('/', '')

  return (
    <PageWrapper>
      <h2>home</h2>
    </PageWrapper>
  )
}
