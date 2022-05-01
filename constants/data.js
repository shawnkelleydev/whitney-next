const getYear = (epoc) => {
  return epoc.getFullYear()
}

export const meta = {
  AUTHOR: 'Whitney Kelley',
  CURRENT_YEAR: getYear(new Date()),
  DESCRIPTION:
    'The digital home of Dr. Whitney Kelley, flute teacher, scholar, and principle flute of the Denver Philharmonic Orchestra.',
  DEVELOPER: 'Shawn Kelley',
  DEVELOPER_URL: 'https://www.shawnkelley.dev',
  KEYWORDS: 'flute, whitney, kelley, lessons, flute lessons',
  TAG: 'Flute',
  TITLE: 'Dr. Whitney Kelley, Flute',
}

// TODO: edit pages
export const pages = ['lessons', 'contact']

// TODO: edit footerLinks
export const footerLinks = [
  { name: 'LINK1', url: '/' },
  { name: 'LINK2', url: '/' },
  { name: 'LINK3', url: '/' },
]
