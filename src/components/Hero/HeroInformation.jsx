import { motion } from "framer-motion"

import cn from "./Hero.module.scss"
import person1 from "../../assets/images/png/artists/artist-1.png"
import person2 from "../../assets/images/png/artists/artist-2.png"
import person3 from "../../assets/images/png/artists/artist-3.png"
import { UIButtonLink } from "../UI/UIButtonLink/UIButtonLink"
import { anHero } from "../../helpers/animation"

const HeroInformation = () => {
  return (
    <motion.div
      className={cn["information"]}
      initial="hidden"
      animate="visible"
      variants={anHero}>
      <h1 className={cn["information__title"]}>High Quality NFT Collection</h1>
      <p className={cn["information__desc"]}>
        A 890 piece custom Nerko's collection is joining the NFT space on
        Opensea.
      </p>

      <UIButtonLink
        text="View in OPENSEA"
        icon="arrowUpRight"
        to="https://opensea.io/"
        target="_blank"
      />

      <Community />
    </motion.div>
  )
}

const Community = () => {
  const members = [person1, person2, person3]

  return (
    <div className={cn["community"]}>
      <ul className={cn["community__members"]}>
        {members.map((member) => (
          <li className={cn["community__members-photo"]} key={member}>
            <img src={member} alt="member" />
          </li>
        ))}
      </ul>
      <div className={cn["community__value"]}>
        <h5>47k+</h5>
        <span>Community members</span>
      </div>
    </div>
  )
}

export { HeroInformation }
