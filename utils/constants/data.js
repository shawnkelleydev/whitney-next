const getYear = (epoc) => {
  return epoc.getFullYear()
}

export const meta = {
  AUTHOR: 'Whitney Kelley',
  CURRENT_YEAR: getYear(new Date()),
  DESCRIPTION:
    'The digital home of Dr. Whitney Kelley, flute teacher, scholar, and principle flute of the Denver Philharmonic Orchestra.  Whitney Kelley offers in-person flute lessons in Northglenn, Colorado.',
  DEVELOPER: 'Shawn Kelley',
  DEVELOPER_URL: 'https://www.shawnkelley.dev',
  KEYWORDS:
    'flute, whitney, kelley, lessons, flute lessons, northglenn, thornton, westminster, broomfield, colorado',
  TAG: 'Flute',
  TITLE: 'Dr. Whitney Kelley, Flute',
}

export const pages = ['home', 'lessons', 'contact']
