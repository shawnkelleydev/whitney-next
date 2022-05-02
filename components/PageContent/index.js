import Banner from 'components/Banner'

import styles from './styles.module.css'

export default function PageContent({ children }) {
  return (
    <main className={styles['page-content']}>
      <Banner />
      {children}
    </main>
  )
}
