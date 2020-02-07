import React from "react"
import styles from "./aboutme.module.scss"
// import tachyons from 'tachyons';
import Profilepic from "./aboutsm.jpg"
// import Typist from 'react-typist';
import Button from "../Buttons/Button1/Button1"
import styled from "@emotion/styled"

const Right = styled.div`
  text-align: right;
`

const Aboutme = () => (
  <div>
    <div className="mw9 center ph3-ns">
      <div className="cf ph2-ns">
        <div className="fl w-100 w-50-ns pa2">
          <img
            alt="Sofia Moraes Portrait"
            src={Profilepic}
            className={styles.profile}
          />
        </div>
        <div className="fl w-100 w-50-ns pa2 measure-narrow">
          <div className={styles.abouttext}>
            <h2>About Me</h2>
            {/* }<Typist cursor= {{show: false,  }}>{ */}
            <p>
              Hi! I am a freelance designer specializing in web applications,
              user interface, UX and brand design.
            </p>
            <p>
              I’m originally from Venezuela but I have spent the last 9 years
              traveling the world using my creative skills and helping startups
              and digital companies achieve their design goals.
            </p>
            <p>
              I love finding the right balance between beauty and usefulness.
              Creating aesthetic solutions that drive a more united world and
              collaborating with incredible people around the world is what
              drives me.
            </p>
            <p>
              In my spare time you will find me only in one place: the ocean
            </p>
            <Right>
              <Button name="Contact Me"></Button>
            </Right>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Aboutme
