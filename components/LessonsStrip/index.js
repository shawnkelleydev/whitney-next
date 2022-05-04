import { useRouter } from 'next/router'

import LessonsMenu from 'components/LessonsMenu'
import Strip from 'components/Strip'

export default function LessonStrip() {
  const router = useRouter()
  console.log(router)

  return (
    <Strip>
      <h2>private lessons</h2>
      <LessonsMenu />
    </Strip>
  )
}
