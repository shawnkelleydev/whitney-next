import { useRouter } from 'next/router'

import Footer from 'components/Footer'
import Head from 'partials/_head'
import Header from 'components/Header'
import PageContent from 'components/PageContent'

import styles from './styles.module.css'

export default function PageWrapper({ children }) {
  let { route } = useRouter()
  route = route.replace('/', '')

  if (route === '') route = 'home'

  return (
    <div className={styles['page-wrapper']}>
      <Head />
      <Header />
      <main>
        <h2>{route}</h2>
        <PageContent>{children}</PageContent>
      </main>
      <Footer />
    </div>
  )
}
