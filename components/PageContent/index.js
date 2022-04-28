import Container from './Container'

import styles from './styles.module.css'

export default function PageContent({ children }) {
  console.log(children)
  return (
    <div className={styles['page-content']}>
      {children?.map((child, i) => (
        <Container key={i}>{child}</Container>
      ))}
    </div>
  )
}
