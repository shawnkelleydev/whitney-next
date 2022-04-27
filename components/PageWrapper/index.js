import Header from 'components/Header'

import styles from './styles.module.css'

export default function PageWrapper({ pages, children }) {
  return (
    <div className={styles['page-wrapper']}>
      <Header pages={pages} />
      {children}
    </div>
  )
}
