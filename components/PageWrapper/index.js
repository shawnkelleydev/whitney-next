import Footer from 'components/Footer'
import Head from 'partials/_head'
import Header from 'components/Header'
import PageContent from 'components/PageContent'

import styles from './styles.module.css'

export default function PageWrapper({ children }) {
  return (
    <div className={styles['page-wrapper']}>
      <Head />
      <Header />
      <PageContent>{children}</PageContent>
      <Footer />
    </div>
  )
}
