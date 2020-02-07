import React from 'react';
import styles from './Projects.module.scss';
import Projectitem from './Projectitem.jsx/Projectitem';
import Link from 'gatsby-link';
import Fade from 'react-reveal/Fade';
import Acai from '../../../../Design Elements/Home/elacaieurope.jpg';
import laBalm from '../../../../Design Elements/Home/labalm.jpg';
import Quantum from '../../../../Design Elements/Home/quantum.jpg';
import Media from '../../../../Design Elements/Home/turquoisemedia.jpg';
import CampBay from '../../../../Design Elements/Home/campbaylodge.jpg';
import Nomad from '../../../../Design Elements/Home/nomadyoga.jpg';
// import Mandalita from '../../../../Design Elements/Home/mandalita1.svg';
import CafeBlack from '../../../../Design Elements/Home/cafeblack.jpg';
import Caroki from '../../../../Design Elements/Home/caroki.jpg';
import Hangry from '../../../../Design Elements/Home/hangry.jpg';
import Mictic from '../../../../Design Elements/Home/mictic.jpg';
import PowerPods from '../../../../Design Elements/Home/powerpods.jpg';
import Fund from '../../../../Design Elements/Home/ssfund.jpg';
import Ssut from '../../../../Design Elements/Home/ssut.jpg';
import Wohlgensinger from '../../../../Design Elements/Home/wohlgensinger.jpg';

const Projects = () => (
  <div>
    <div className={styles.container}>
      <div className='center measure-wide'>
        <h2 className={styles.line} style={{ marginBottom: 0 }}>
          <b>Check out my work!</b>
        </h2>
        <h3>Selected Projects</h3>
      </div>
    </div>
    <div className={styles.overflow}>
      <div className={styles.boxes}>
        <ul className={[styles.layout, styles.layoutleft].join(' ')}>
          <li className={styles.listitem}>
            <Link to='/wohlgensinger'>
              <Fade bottom duration={2500}>
                <Projectitem
                  name='Wohlgensinger AG'
                  atr='Graphics, UI/UX'
                  img={Wohlgensinger}
                />
              </Fade>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to='/swissstartuptech'>
              <Fade bottom duration={2500}>
                <Projectitem
                  name='Swiss Startup Tech'
                  atr='Graphics, UI/UX'
                  img={Ssut}
                />
              </Fade>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to='/powerpods'>
              <Fade bottom duration={2500}>
                <Projectitem
                  name='PowerPods'
                  atr='Branding, Graphics'
                  img={PowerPods}
                />
              </Fade>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to='/mictic'>
              <Fade bottom duration={2500}>
                <Projectitem name='Mictic' atr='UI/UX, Graphics' img={Mictic} />
              </Fade>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to='/hangry'>
              <Fade bottom duration={2500}>
                <Projectitem
                  name='Hangry'
                  atr='Branding, Graphics, UI/UX'
                  img={Hangry}
                />
              </Fade>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to='/caroki'>
              <Fade bottom duration={2500}>
                <Projectitem name='Caroki' atr='Branding' img={Caroki} />
              </Fade>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to='/startupfund'>
              <Fade bottom duration={2500}>
                <Projectitem
                  name='Swiss Startup Fund'
                  atr='Branding, Graphics, UI/UX'
                  img={Fund}
                />
              </Fade>
            </Link>
          </li>
        </ul>

        <ul className={styles.layout}>
          <li className={styles.listitem}>
            <Link to='/elacaieurope'>
              <Fade bottom duration={2500}>
                <Projectitem
                  name='El Acai Europe'
                  atr='Photography, Graphics, Web Design'
                  img={Acai}
                />
              </Fade>
            </Link>
          </li>

          <li className={styles.listitem}>
            <Link to='/campbaylodge'>
              <Fade bottom duration={2500}>
                <Projectitem
                  name='Camp Bay Lodge'
                  atr='Identity, Graphics'
                  img={CampBay}
                />
              </Fade>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to='/quantumpeakcoaching'>
              <Fade bottom duration={2500}>
                <Projectitem
                  name='Quantum Peak Coaching'
                  atr='Branding, Logo, Graphics'
                  img={Quantum}
                />
              </Fade>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to='/cafeblack'>
              <Fade bottom duration={2500}>
                <Projectitem
                  name='Cafe Bar Black1966'
                  atr='UI/UX, Graphics'
                  img={CafeBlack}
                />
              </Fade>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to='/labalm'>
              <Fade bottom duration={2500}>
                <Projectitem
                  name='LA Balm'
                  atr='Branding, Graphics, Marketing'
                  img={laBalm}
                />
              </Fade>
            </Link>
          </li>

          <li className={styles.listitem}>
            <Link to='/turquoisemedia'>
              <Fade bottom duration={2500}>
                <Projectitem
                  name='Turquoise Media'
                  atr='UI/UX, Graphics'
                  img={Media}
                />
              </Fade>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to='/nomadyoga'>
              <Fade bottom duration={2500}>
                <Projectitem
                  name='Nomad Yoga'
                  atr='UI/UX, Graphics, Mobile Design'
                  img={Nomad}
                />
              </Fade>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Projects;
