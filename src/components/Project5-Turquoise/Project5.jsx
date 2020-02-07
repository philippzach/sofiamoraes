import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import HeaderImage from '../../../Design Elements/Project7-TurquoiseMedia/Banner 1 tqm.png';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import syle from '../Project5-Turquoise/Project5.module.scss';
import Logo from '../../../Design Elements/Project7-TurquoiseMedia/bl-01.svg';
import Logo1 from '../../../Design Elements/Project7-TurquoiseMedia/l-01.svg';
import Website from '../../../Design Elements/Project7-TurquoiseMedia/tqmwebsitebanner.png';
import Colors from '../../../Design Elements/Project7-TurquoiseMedia/cp.svg';
import Card from '../../../Design Elements/Project7-TurquoiseMedia/bc-sm.jpg';
import Font from '../../../Design Elements/Project7-TurquoiseMedia/f-01.svg';
import Mobiles from '../../../Design Elements/Project7-TurquoiseMedia/Mobile Mockup-sm.jpg';
import Next from '../ProjectsComponents/NextProject';


const Project5 = () => (
  <div>
    <ProjectTop heading="Turquoise Media" subHeading="Design | Captivate | Convert" pic={HeaderImage} altText="" />
    <div className={styles.container}>
    <section className={styles.content} style={{marginTop: '2em'}}>
      <div className={styles.divleft}>
        <h2 className={styles.heading}>The Company</h2>
        <h3 className={styles.h3text}>
          Turquoise Media is an independent international creative agency that leads commerces into a digital world
        </h3>
      </div>
      </section>
      <div className="tr" style={{marginTop: '2em', marginBottom: '6em'}}>
        <h2 className={styles.heading}>The Solution</h2>
        <p className={styles.text}>
          The founders approached me to elaborate some changes to their already established brand, of which consisted in
          refining the logo and make some changes to its web and mobile design, despite of being a super simple project,
          I enjoyed giving it that colorful & cheerful final look
        </p>
      </div>
      <div className={styles.horizontalline} />
      <section className={styles.content}>
      <div className={styles.divleft} style={{marginTop: '6em'}}>
        <h2 className={styles.heading}>Rebranding</h2>
        <h3>The Logo</h3>
        <p className={styles.text}>
          After many iterations, I found the right graphic representation of freedom, flexibility, creativity and that
          funky style that expresses what the company is about.
        </p>
        </div>
        </section>
        <div style={{marginTop: '4em'}} className="tc">
          <img src={Logo} />
        </div>
        <div style={{marginTop: '4em'}} className="tc">
          <img src={Logo1} />
        </div>
      </div>
    
    <section className={styles.content} style={{marginTop: '6em', marginBottom: '6em'}}>
      <div className={syle.divleft}>
        <h2 className={styles.heading}>An updated website</h2>
        <p className={styles.text}>
          With their new site, the aim was to communicate in the simplest, fastest, and most elegant way their strengths
          as an creative agency.
        </p>
      </div>
      <div className={syle.divright}>
        <img src={Website} alt="Turquoise Media Webstite Mockup Sofia Moraes copyright" style={{width: '100%'}}/>
      </div>
    </section>
    <div className={styles.container}>
      <div className={styles.horizontalline} />
      <section className={styles.content} style={{marginTop: '4em', marginBottom: '4em'}}>
        <div className={styles.divleft}>
          <img src={Colors} alt="Turquoise Media Color Scheme Sofia Moraes copyright" style={{width: '100%'}} />
        </div>
        <div className={styles.divright} style={{textAlign: 'right'}}>
          <h2 className={styles.heading}>Color Palette</h2>
          <h3>Highlighting the best creative solutions</h3>
        </div>
      </section>
    </div>
   
      <img src={Card} style={{width: '100%'}} />
    <div className={styles.container}>
    <section className={styles.content} style={{marginTop: '4em', marginBottom: '4em'}}>
      <div className={styles.divleft}>
        <h2 className={styles.heading}>Quicksand</h2>
        <h3>Font-Family: Sans Serif</h3>
      </div>
      <div className={styles.divright}>
        <img src={Font} alt="Turquoise Media Fonts Scheme Sofia Moraes copyright" />
      </div>
    </section>
    </div>
    <div className="tc">
      <img src={Mobiles} />
    </div>
    <div className={styles.container} style={{marginTop: '2em', marginBottom: '4em'}}>
    <div className={styles.horizontalline} />
    </div>
    <Next link='/quantumpeakcoaching' />
    <Random />
  </div>
);

export default Project5;
