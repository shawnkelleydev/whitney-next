import LessonsMenu from 'components/LessonsMenu'
import PageContent from 'components/PageContent'
import PageWrapper from 'components/PageWrapper'

import styles from './styles.module.css'

export default function PrivateLessons() {
  return (
    <PageWrapper>
      <PageContent>
        <LessonsMenu />
        <h2>Welcome</h2>
      </PageContent>
    </PageWrapper>
  )
}
