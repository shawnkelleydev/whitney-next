import { useRouter } from 'next/router'

import LessonsContent from 'components/LessonsContent'
import LessonsMenu from 'components/LessonsMenu'
import Strip from 'components/Strip'

export default function LessonStrip() {
  return (
    <Strip>
      <h2>private lessons</h2>
      <LessonsMenu />
      <LessonsContent />
    </Strip>
  )
}
