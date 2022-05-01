import LessonsMenu from 'components/LessonsMenu'
import PageWrapper from 'components/PageWrapper'

import styles from './styles.module.css'

export default function Ready() {
  return (
    <PageWrapper>
      <LessonsMenu />
      <div>ready</div>
    </PageWrapper>
  )
}
