import Head from 'partials/_head'
import PageWrapper from 'components/PageWrapper'

export default function Home() {
  // TODO: Add pages
  const pages = ['page1', 'page2', 'page3', 'page4', 'page5']

  return (
    <PageWrapper pages={pages}>
      <Head />
    </PageWrapper>
  )
}
