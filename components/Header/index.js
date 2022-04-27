import Banner from './Banner'
import Nav from './Nav'

export default function Header({ pages }) {
  return (
    <header>
      <Banner />
      <Nav pages={pages} />
    </header>
  )
}
