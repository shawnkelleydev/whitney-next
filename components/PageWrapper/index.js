import Footer from './Footer'
import Header from './Header'

import styles from './styles.module.css'

export default function PageWrapper({ pages, children }) {
  return (
    <div className={styles['page-wrapper']}>
      <Header pages={pages} />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
