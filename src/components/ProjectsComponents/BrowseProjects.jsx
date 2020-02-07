import React from "react"
import Link from "gatsby-link"
import styles from "./Project.module.scss"
import stylesp from "../../components/Home/Projects/Projectitem.jsx/Projectitem.module.scss"
import Acai from "../Home/Projects/pics/acai3.png"
import Camp from "../../../Design Elements/Home/campbaylodge.jpg"
import Quant from "../../../Design Elements/Home/quantum.jpg"
import laBalm from "../../../Design Elements/Home/labalm.jpg"
import Media from "../../../Design Elements/Home/turquoisemedia.jpg"
import Nomad from "../../../Design Elements/Home/nomadyoga.jpg"
import WohlAg from "../../../Design Elements/Home/wohlgensinger.jpg"
import SwissTech from "../../../Design Elements/Home/ssut.jpg"
import Power from "../../../Design Elements/Home/powerpods.jpg"
import Cafe from "../../../Design Elements/Home/cafeblack.jpg"
import Mitfick from "../../../Design Elements/Home/mictic.jpg"
import Hut from "../../../Design Elements/Home/hangry.jpg"
import CarFotze from "../../../Design Elements/Home/caroki.jpg"
import FundimArsch from "../../../Design Elements/Home/ssfund.jpg"

const ElAcai = {
  id: 1,
  name: "El Acai Europe",
  keyword: "Photography, Graphics, Web Design",
  img: Acai,
  link: "/elacaieurope",
}
const CampBay = {
  id: 2,
  name: "Camp Bay Lodge",
  keyword: "Logo, Identity, Graphics",
  img: Camp,
  link: "/campbaylodge",
}
const Quantum = {
  id: 3,
  name: "Quantum Peak Coaching",
  keyword: "Branding, Logo, Graphics",
  img: Quant,
  link: "/quantumpeakcoaching",
}
const laBalmProject = {
  id: 4,
  name: "LA Balm",
  keyword: "Branding, Graphics, Marketing",
  img: laBalm,
  link: "/labalm",
}
const Turquoise = {
  id: 5,
  name: "Turquoise Media",
  keyword: "UI/UX, Graphics",
  img: Media,
  link: "/turquoisemedia",
}
const Yoga = {
  id: 6,
  name: "Nomad Yoga",
  keyword: "UI/UX, Graphics, Mobile Design",
  img: Nomad,
  link: "/nomadyoga",
}
const Wohlgensinger = {
  id: 7,
  name: "Wohlgensinger AG",
  keyword: "Graphics, UI/UX",
  img: WohlAg,
  link: "/wohlgensinger",
}

const Tech = {
  id: 8,
  name: "Swiss Startup Tech",
  keyword: "Graphics, UI/UX",
  img: SwissTech,
  link: "/swissstartuptech",
}
const PowerPods = {
  id: 9,
  name: "PowerPods",
  keyword: "Graphics, Branding",
  img: Power,
  link: "/powerpods",
}
const CafeBlack = {
  id: 10,
  name: "Cafe Bar Black1966",
  keyword: "Graphics, UI/UX",
  img: Cafe,
  link: "/cafeblack",
}
const Mictic = {
  id: 11,
  name: "Mictic",
  keyword: "Graphics, UI/UX",
  img: Mitfick,
  link: "/mictic",
}

const Hangry = {
  id: 12,
  name: "Hangry",
  keyword: "Graphics, UI/UX, Branding",
  img: Hut,
  link: "/hangry",
}

const Caroki = {
  id: 13,
  name: "Caroki",
  keyword: "Graphics, Branding",
  img: CarFotze,
  link: "/caroki",
}
const Fund = {
  id: 14,
  name: "Swiss Startup Fund",
  keyword: "Graphics, Branding, UI/UX",
  img: FundimArsch,
  link: "/startupfund",
}

const ProjectArray = [
  Yoga,
  Turquoise,
  laBalmProject,
  Quantum,
  CampBay,
  ElAcai,
  Wohlgensinger,
  Tech,
  PowerPods,
  CafeBlack,
  Mictic,
  Hangry,
  Caroki,
  Fund,
]

const Random = () => {
  let array1 = ProjectArray[Math.floor(Math.random() * ProjectArray.length)]
  let array2 = ProjectArray[Math.floor(Math.random() * ProjectArray.length)]

  return (
    <div className={styles.container}>
      <section
        className={styles.content}
        style={{ textAlign: "center", marginTop: "4em", marginBottom: "5em" }}
      >
        <div className={styles.left}>
          <Link to={array1.link}>
            <img className={styles.random} src={array1.img} />
            <div>
              <h3 className={stylesp.heading}>{array1.name}</h3>
              <p className={stylesp.atr}>{array1.keyword}</p>
            </div>
          </Link>
        </div>
        <div className={styles.right}>
          <Link to={array2.link}>
            <img className={styles.random} src={array2.img} />
            <div>
              <h3 className={stylesp.heading}>{array2.name}</h3>
              <p className={stylesp.atr}>{array2.keyword}</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Random
