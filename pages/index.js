import Head from 'partials/_head'
import PageWrapper from 'components/PageWrapper'

import { pages } from 'constants'

export default function Home() {
  return (
    <PageWrapper pages={pages}>
      <Head />
    </PageWrapper>
  )
}
