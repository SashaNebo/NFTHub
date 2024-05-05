import { Hero } from '../../components/Hero'
import { Brand } from '../../components/Brand'
import { Divider } from '../../components/Divider/Divider'
import { Collection } from '../../components/Collection/Collection'
import { Choose } from '../../components/Choose/Choose'
import { Fact } from '../../components/Fact/Fact'
import { About } from '../../components/About/About'
import { News } from '../../components/News'
import { Roadmap } from '../../components/Roadmap/Roadmap'

const Home = () => {
  return (
    <>
      <Hero />
      <Brand />
      <Divider />
      <Collection />
      <Divider />
      <Choose />
      <Divider />
      <Fact />
      <Divider />
      <About />
      <Divider />
      <News />
      <Divider />
      <Roadmap />
    </>
  )
}

export { Home }
