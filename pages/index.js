import Head from 'partials/_head'
import PageWrapper from 'components/PageWrapper'

export default function Home() {
  // TODO: Add pages
  const pages = ['home', 'page2', 'page3', 'page4']

  return (
    <PageWrapper pages={pages}>
      <Head />
    </PageWrapper>
  )
}
