class Concert {
  constructor(title, performers, url, imageUrl, imageAlt, dates) {
    this.title = title
    this.performers = performers
    this.url = url
    this.imageUrl = imageUrl
    this.imageAlt = imageAlt
    this.dates = dates
  }
}

const beethovenCelebration = new Concert(
  'Beethoven Celebration',
  ['Denver Philharmonic Orchestra'],
  'https://www.eventbrite.com/e/beethoven-celebration-tickets-214706130817',
  'https://denverphilharmonic.org/wp-content/uploads/2021/08/dpo-art2122-d2-bday.jpg',
  'outline of a cupcake filled with yellow and orange balloons and encircled by outward-pointing candles and confetti-like strokes',
  { composite: 20220526, rendered: 'May 25 & 26, 2022' }
)

const standardImageAlt =
  'side by side portraits of composers, soloists, and conductors'

const seasonTickets =
  'https://www.eventbrite.com/e/202223-season-pass-6-concerts-tickets-348067658737?aff=ebdsoporgprofile'

const tchaik5 = new Concert(
  'Tchaikovsky 5',
  ['Denver Philharmonic Orchestra', 'Rony Barrak, darbouka'],
  seasonTickets,
  'https://denverphilharmonic.org/wp-content/uploads/2022/05/dpo-2223-seasonhero-1-720x400.jpg',
  standardImageAlt,
  { composite: 20221007, rendered: 'October 7, 2022' }
)

const beethovenPiano = new Concert(
  'Emperor',
  ['Denver Philharmonic Orchestra', 'Sheng Cai, piano'],
  seasonTickets,
  'https://denverphilharmonic.org/wp-content/uploads/2022/05/dpo-2223-seasonhero-2-720x400.jpg',
  standardImageAlt,
  { composite: 20221112, rendered: 'November 12, 2022' }
)

const holidayCheer = new Concert(
  'Holiday Cheer',
  ['Denver Philharmonic Orchestra', 'Colorado Chorale'],
  seasonTickets,
  'https://denverphilharmonic.org/wp-content/uploads/2021/05/DPO-2122-Website-3-720x400.jpg',
  standardImageAlt,
  { composite: 20221217, rendered: 'December 16 & 17, 2022' }
)

const dvorak8 = new Concert(
  'Dvořák 8',
  [
    'Denver Philharmonic Orchestra',
    'Anna Katherine Barnett-Hartt, violin',
    'Rebecca Mortizky, harp',
  ],
  seasonTickets,
  'https://denverphilharmonic.org/wp-content/uploads/2022/05/dpo-2223-seasonhero-4-720x400.jpg',
  standardImageAlt,
  { composite: 20230304, rendered: 'March 4, 2023' }
)

const brahms1 = new Concert(
  'Brahms 1',
  ['Denver Philharmonic Orchestra'],
  seasonTickets,
  'https://denverphilharmonic.org/wp-content/uploads/2022/05/dpo-2223-seasonhero-5-720x400.jpg',
  standardImageAlt,
  { composite: 20230408, rendered: 'April 8, 2023' }
)

const mozart40 = new Concert(
  'Mozart 40',
  ['Denver Philharmonic Orchestra'],
  seasonTickets,
  'https://denverphilharmonic.org/wp-content/uploads/2022/05/dpo-2223-seasonhero-6-720x400.jpg',
  standardImageAlt,
  { composite: 20230525, rendered: 'May 25, 2023' }
)

export const denverPhilSchedule = [
  beethovenCelebration,
  tchaik5,
  beethovenPiano,
  holidayCheer,
  dvorak8,
  brahms1,
  mozart40,
]
