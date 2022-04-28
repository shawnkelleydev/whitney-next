import Footer from './Footer'
import Head from 'partials/_head'
import Header from './Header'

import styles from './styles.module.css'
import PageContent from 'components/PageContent'

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
