import Link from 'components/Link'

import styles from './styles.module.css'

export default function Bio() {
  return (
    <article className={styles.bio}>
      <h2>bio</h2>
      <p>
        Principal flutist of the{' '}
        <Link url='https://denverphilharmonic.org/'>
          Denver Philharmonic Orchestra
        </Link>
        , Dr. Whitney Kelley is praised for her innovative performances and
        pedagogical methods which have inspired audiences across the country.
        Acclaimed for her “considerable technique” by the Winston-Salem Journal,
        she has appeared as soloist in numerous orchestral and recital settings,
        including guest appearances with world-renowned flutist Sir James
        Galway, Hollywood film composer Dave Grusin, jazz flutist Nestor Torres,
        and performances in the Ravinia Summer Music Festival, Texas Music
        Festival, Cheyenne Symphony, Denver Pops, Jefferson Symphony, and
        Longmont Symphony Orchestras.
      </p>
      <p>
        In addition to her solo and chamber pursuits, Whitney is an innovative
        pedagogue, presenting her research, teaching philosophies, and musical
        perspectives to music educators and performers through lectures,
        masterclasses, online videos, and publications in the{' '}
        <Link url='https://www.fluteworld.com/product/flutists-handbook-a-pedagogy-anthologyv-2/'>
          National Flute Association Pedagogy Anthology Vol. 2
        </Link>
        , American Suzuki Journal, Colorado Flutist, and Flute Examiner. While
        maintaining a thriving Suzuki studio in Denver, Colorado, Whitney
        additionally actively serves as a clinician, adjudicator, and coaching
        staff for music programs across the country.
      </p>
      <p>
        She received her D.M.A. in Flute Performance and Pedagogy from the
        University of Colorado with{' '}
        <Link url='https://www.christinajennings.com/'>Christina Jennings</Link>
        . Other teachers include Rebecca Paluzzi, Dr. Shelly Binder,{' '}
        <Link url='https://tadeucoelho.com/'>Dr. Tadeu Coelho</Link>, and
        training with Suzuki flute founder, Toshio Takahashi.
      </p>
    </article>
  )
}
