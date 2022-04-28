const getYear = (epoc) => {
  return epoc.getFullYear()
}

export const meta = {
  // TODO: edit AUTHOR
  AUTHOR: 'author',
  CURRENT_YEAR: getYear(new Date()),
  // TODO: edit DESCRIPTION
  DESCRIPTION: 'description',
  // TODO: edit KEYWORDS
  KEYWORDS: 'keyword1, keyword2, keyword3',
  // TODO: edit/remove TAG
  TAG: 'tag',
  // TODO: edit TITLE
  TITLE: 'title',
}

// TODO: edit pages
export const pages = ['about', 'work', 'contact']

// TODO: edit footerLinks
export const footerLinks = [
  { name: 'LINK1', url: '/' },
  { name: 'LINK2', url: '/' },
  { name: 'LINK3', url: '/' },
]

export const lorem = {
  long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus justo quis arcu luctus, a blandit ipsum mollis. Fusce dictum blandit elit, et suscipit est mattis a. Proin id consequat elit. Phasellus maximus, neque at mollis venenatis, enim urna pulvinar nisl, et pretium dui elit nec diam. Nam rhoncus blandit arcu vitae dapibus. Fusce metus libero, sodales ut egestas quis, imperdiet sed nunc. Integer pretium cursus lacus quis molestie. Proin ut faucibus ante. Cras porttitor, sem id dictum ultricies, lacus tellus maximus ligula, vitae vestibulum lorem velit et nisi.',
  short:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus justo quis arcu luctus, a blandit ipsum mollis. Fusce dictum blandit elit, et suscipit est mattis a. Proin id consequat elit. Phasellus maximus, neque at mollis venenatis, enim urna pulvinar nisl, et pretium dui elit nec diam.',
}
