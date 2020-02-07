import React from "react"
import Link from "gatsby-link"
import logo from "./sofiamoraes-logo.svg"
import styles from "./Logo.module.scss"
import config from "../../../config/SiteConfig"
import SmDrib from "./social/dribbble.svg"
import SmFb from "./social/fb.svg"
import SmInsta from "./social/insta.svg"
import SmLink from "./social/linked.svg"
import SmVimeo from "./social/vimeo.svg"
import styled from "@emotion/styled"

const SMImage = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 0;
  margin-right: 15px;
`

const Logo = () => (
  <div className={styles._38GougRNE8}>
    <Link to="/">
      <img
        className={styles.logo}
        alt="logo sofiamoraes"
        src={logo}
        width="135px"
      />
    </Link>
    <div className={styles.social}>
      <a
        href="https://linkedin.com/in/sofia-moraes-7b0061145"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SMImage src={SmLink} alt="social media links" />
      </a>
      <a
        href="https://vimeo.com/sofimoraesm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SMImage src={SmVimeo} alt="social media links" />
      </a>
      <a
        href="https://www.facebook.com/sofiamoraesdesigns"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SMImage src={SmFb} alt="social media links" />
      </a>
      <a
        href="https://www.instagram.com/soo.fly/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SMImage src={SmInsta} alt="social media links" />
      </a>
      <a
        href="https://dribbble.com/sofimoraesm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SMImage src={SmDrib} alt="social media links" />
      </a>
    </div>
  </div>
)

export default Logo
