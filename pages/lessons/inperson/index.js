import LessonsMenu from 'components/LessonsMenu'
import PageWrapper from 'components/PageWrapper'

import styles from './styles.module.css'

export default function InPerson() {
  return (
    <PageWrapper>
      <LessonsMenu />
      <div>in person</div>
    </PageWrapper>
  )
}
