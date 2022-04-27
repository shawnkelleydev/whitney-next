import Head from 'partials/_head'

import Footer from './Footer'
import Header from './Header'

import styles from './styles.module.css'

export default function PageWrapper({ children }) {
  return (
    <div className={styles['page-wrapper']}>
      <Head />
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
