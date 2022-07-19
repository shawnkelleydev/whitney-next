class Concert {
  constructor(title, performers, url, imageUrl, imageAlt, date) {
    this.title = title
    this.performers = performers
    this.url = url
    this.imageUrl = imageUrl
    this.imageAlt = imageAlt
    this.date = date
  }
}

const standardImageAlt =
  'side by side portraits of composers, soloists, and conductors'

const seasonTickets =
  'https://www.eventbrite.com/e/202223-season-pass-6-concerts-tickets-348067658737?aff=ebdsoporgprofile'

const blindedByLight = new Concert(
  'Blinded By Light',
  ['Denver Philharmonic Orchestra', 'Rony Barrak, darbouka'],
  seasonTickets,
  'https://denverphilharmonic.org/wp-content/uploads/2022/07/Blinded-by-the-Light-Hero-720x400.png',
  standardImageAlt,
  {
    year: 2022,
    month: 10,
    day: 7,
    composite: 20221007,
    rendered: 'October 7, 2022',
  }
)

const outOfTheBlue = new Concert(
  'Out of the Blue',
  ['Denver Philharmonic Orchestra', 'Sheng Cai, piano'],
  seasonTickets,
  'https://denverphilharmonic.org/wp-content/uploads/2022/07/Out-of-the-Blue-Hero-720x400.png',
  standardImageAlt,
  {
    year: 2022,
    month: 11,
    day: 12,
    composite: 20221112,
    rendered: 'November 12, 2022',
  }
)

const holidayCheer = new Concert(
  'Holiday Cheer!',
  ['Denver Philharmonic Orchestra', 'Colorado Chorale'],
  seasonTickets,
  'https://denverphilharmonic.org/wp-content/uploads/2022/07/Holiday-Cheer-22-Hero-720x400.png',
  standardImageAlt,
  {
    year: 2022,
    month: 12,
    day: 17,
    composite: 20221217,
    rendered: 'December 16 & 17, 2022',
  }
)

const hiddenTreasure = new Concert(
  'Hidden Treasure',
  [
    'Denver Philharmonic Orchestra',
    'Anna Katherine Barnett-Hartt, violin',
    'Rebecca Mortizky, harp',
  ],
  seasonTickets,
  'https://denverphilharmonic.org/wp-content/uploads/2022/07/Hidden-Treasure-Hero-720x400.png',
  standardImageAlt,
  {
    year: 2023,
    month: 3,
    day: 4,
    composite: 20230304,
    rendered: 'March 4, 2023',
  }
)

const wildWildWest = new Concert(
  'Wild Wild West',
  ['Denver Philharmonic Orchestra'],
  seasonTickets,
  'https://denverphilharmonic.org/wp-content/uploads/2022/07/Wild-Wild-West-Hero-720x400.png',
  standardImageAlt,
  {
    year: 2023,
    month: 4,
    day: 8,
    composite: 20230408,
    rendered: 'April 8, 2023',
  }
)

const crownJewel = new Concert(
  'Crown Jewel',
  ['Denver Philharmonic Orchestra'],
  seasonTickets,
  'https://denverphilharmonic.org/wp-content/uploads/2022/07/Crown-Jewel-Hero-720x400.png',
  standardImageAlt,
  {
    year: 2023,
    month: 5,
    day: 25,
    composite: 20230525,
    rendered: 'May 25, 2023',
  }
)

export const denverPhilSchedule = [
  blindedByLight,
  outOfTheBlue,
  holidayCheer,
  hiddenTreasure,
  wildWildWest,
  crownJewel,
]
