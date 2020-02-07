import React from 'react';
import styles from './Random.module.scss';
import Placeholder from './placeholdersquare.png';
import Link from 'gatsby-link';
import Acai from '../../../../Design Elements/Home/elacaieurope.jpg';
import laBalm from '../../../../Design Elements/Home/labalm.jpg';
import Quantum from '../../../../Design Elements/Home/quantum.jpg';
import Media from '../../../../Design Elements/Home/turquoisemedia.jpg';
import CampBay from '../../../../Design Elements/Home/campbaylodge.jpg';
import Nomad from '../../../../Design Elements/Home/nomadyoga.jpg';
import CafeBlack from '../../../../Design Elements/Home/cafeblack.jpg';
import Caroki from '../../../../Design Elements/Home/caroki.jpg';
import Hangry from '../../../../Design Elements/Home/hangry.jpg';
import Mictic from '../../../../Design Elements/Home/mictic.jpg';
import PowerPods from '../../../../Design Elements/Home/powerpods.jpg';
import Fund from '../../../../Design Elements/Home/ssfund.jpg';
import Ssut from '../../../../Design Elements/Home/ssut.jpg';
import Wohlgensinger from '../../../../Design Elements/Home/wohlgensinger.jpg';
import Button from '../../Buttons/Button2/Button2';
import Typist from 'react-typist';

const Random = () => (
  <div className={styles.master}>
    <div className={styles.maincontainer}>
      <div className={styles.secondarycontainer}>
        <div className={styles.container1}>
          <h2>
            <b>Hi, I'm Sofia </b> - a visual designer based in{' '}
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
            <Button name='More projects' link='#projects' />
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.background}>
            <div className={styles.fill} />
          </div>
          <div className={styles.project}>
            <div className={styles.pulsingdiv}>
              <Link to='/elacaieurope'>
                <img
                  className={styles.projectimg}
                  alt='placeholder'
                  src={Acai}
                />{' '}
              </Link>
              <img
                className={styles.projectimg}
                alt='placeholder'
                src={laBalm}
              />
              <img
                className={styles.projectimg}
                alt='placeholder'
                src={Quantum}
              />
              <img
                className={styles.projectimg}
                alt='placeholder'
                src={Media}
              />
              <img
                className={styles.projectimg}
                alt='placeholder'
                src={CampBay}
              />
              <img
                className={styles.projectimg}
                alt='placeholder'
                src={Quantum}
              />
              <img
                className={styles.projectimg}
                alt='placeholder'
                src={Nomad}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Random;
