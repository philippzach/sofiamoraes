import React from "react"
import styles from "./Random.module.scss"
import Sofia from "../../Aboutme/sofia-profile.jpg"

import Button from "../../Buttons/Button2/Button2"
import Typist from "react-typist"

const Random = () => (
  <div className={styles.master}>
    <div className={styles.maincontainer}>
      <div className={styles.secondarycontainer}>
        <div className={styles.container1}>
          <h2>
            <b>Hi, I'm Sofia </b> - a visual designer based in{" "}
            <span>
              <Typist
                className={styles.Typist}
                startDelay={1000}
                avgTypingDelay={150}
                cursor={{ show: false }}
              >
                <span>
                  <b>Austria</b>
                </span>
                <Typist.Backspace count={7} delay={1500} />
                <span>
                  <b>Venezuela</b>
                </span>
                <Typist.Backspace count={9} delay={1500} />
                <span>
                  <b>Hawaii at the moment</b>
                </span>
              </Typist>
            </span>
            , I enjoy creating beautiful solutions.
          </h2>
          <div className={styles.buttondiv}>
            <Button name="More projects" link="#projects" />
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.background}>
            <div className={styles.fill} />
          </div>
          <div className={styles.nonproject}>
            <div className={styles.nonpulsingdiv}>
              <img
                className={styles.nonprojectimg}
                alt="Sofia Moraes Design Branding UI/UX"
                src={Sofia}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Random
