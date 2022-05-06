import PageWrapper from 'components/PageWrapper'
import Strip from 'components/Strip'

import ContactForm from 'components/ContactForm'

export default function Contact() {
  const onSubmit = (e, data) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <PageWrapper>
      <Strip>
        <ContactForm onSubmit={onSubmit} />
      </Strip>
    </PageWrapper>
  )
}
