import PageWrapper from 'components/PageWrapper'
import { lorem } from 'constants/data'

export default function Home() {
  return (
    <PageWrapper>
      <section>
        <h3>Section 1</h3>
        <p>{lorem.long}</p>
      </section>
      <section>
        <h3>Section 2</h3>
        <p>{lorem.short}</p>
      </section>
    </PageWrapper>
  )
}
