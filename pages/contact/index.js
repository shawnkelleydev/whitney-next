import PageWrapper from 'components/PageWrapper'
import Strip from 'components/Strip'

import ContactForm from 'components/ContactForm'

export default function Contact() {
  return (
    <PageWrapper>
      <Strip>
        <h2>get in touch</h2>
        <ContactForm />
      </Strip>
    </PageWrapper>
  )
}
