import { useRouter } from 'next/router'

import Footer from './Footer'
import Head from 'partials/_head'
import Header from './Header'

import styles from './styles.module.css'

export default function PageWrapper({ children }) {
  let { route } = useRouter()
  route = route.replace('/', '')

  return (
    <div className={styles['page-wrapper']}>
      <Head />
      <Header />
      <div>
        <h2>{route}</h2>
        {children}
      </div>
      <Footer />
    </div>
  )
}
