import React from "react"
import Link from "gatsby-link"
import styles from "./Footer.module.scss"
import Logo from "../Logo/Logo"
//import Cat from "./cat"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <p className={styles.footercenter}>
        I'm always interested in working on new projects. You can
        <Link to="/hireme">
          {" "}
          <span className={styles.link}>Hire Me</span>{" "}
        </Link>
        for a few hours or we can work together on a bigger project.
      </p>
      <div>
        <Logo />
        {/*  <Cat /> */}
      </div>
    </div>
  </footer>
)

export default Footer
