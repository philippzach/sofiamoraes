import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import HeaderImage from '../../../Design Elements/Project4-Quantum Peak Coaching/qpq-sm.jpg';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import syle from './Project6.module.scss';
import Phone from '../../../Design Elements/Project4-Quantum Peak Coaching/iphone-sm.jpg';
import Logo from '../../../Design Elements/Project4-Quantum Peak Coaching/l-01.svg';
import Colors from '../../../Design Elements/Project4-Quantum Peak Coaching/cp-01.svg';
import Font1 from '../../../Design Elements/Project4-Quantum Peak Coaching/ft1g-01.svg';
import Font2 from '../../../Design Elements/Project4-Quantum Peak Coaching/ft2g-01.svg';
import Last from '../../../Design Elements/Project4-Quantum Peak Coaching/brandingmockup-sm.jpg';
import Next from '../ProjectsComponents/NextProject';

const Project6 = () => (
  <div>
    <ProjectTop heading="Quantum Peak Coaching" subHeading="Reaching your highest peaks" pic={HeaderImage} altText="" />
    <div className={styles.container}>
      <div className={styles.floatright} style={{textAlign: 'right', marginTop: '2em', marginBottom: '4em'}}>
        <h2 className={styles.heading}>Quantum Peak Coaching</h2>
        <h3 className={styles.h3text}>There is no such thing as reality,<br/> only our perception of it</h3>
      </div>
      <section className={styles.content} style={{marginBottom: '4em'}}>
        <div className={syle.divleft}>
          <h2 className={styles.heading}>
            The Client
          </h2>
          <p className={styles.text}>
            Quantum Peak Coaching It is a Canadian company committed to support people who consider a profound change
            in their lives. Based on values of strength and personal influence it specializes in training,
            consulting and NLP training programs.
          </p>
        </div>
        <div className={syle.divright}>
          <h2 className={styles.heading}>
            The Solution
          </h2>
          <p className={styles.text}>
            I was asked to create a logo and the brand identity that would highlight the brand's uniqueness on the
            market. The Keywords that sum up branding design were: Powerful / Simplistic / ModernSleek.
          </p>
        </div>
      </section>
    </div>
    <img src={Phone} alt="" />
    <div className={styles.container}>
      <div className={styles.floatright} style={{marginTop: '6em', textAlign: 'right', marginBottom: '6em'}}>
        <h2 className={styles.heading}>Building the Logo</h2>
        <p className={styles.text}>
          The graphic representation of the peak was a great metaphorical link to the peak of success and happiness they
          portray through the business, I used a minimalist and angular approach to the design which gave it a simple
          and modern touch
        </p>
      </div>
      <div className="tc">
        <img src={Logo} alt="" />
      </div>
      <div style={{marginTop: '8em', marginBottom: '12em'}}>
        <h2 className={styles.heading}>
          Color Palette
        </h2>
        <h3>Transmitting security, reliability and tranquility</h3>
      </div>
      <div className="tc" style={{ marginTop: '6em' ,marginBottom: '8em' }}>
        <img src={Colors} alt="" />
      </div>
      <div className={styles.floatright} style={{textAlign: 'right', marginBottom: '12em'}}>
        <h2 className={styles.heading}>Fonts Used</h2>
        <h3 className={styles.h3text}>A combination of sans serif which expresses decision making, clarity and balance</h3>
      </div>
      <section className={styles.content}>
      <div className={styles.divleft}>
        <img src={Font1} alt="" />
      </div>
      </section>
      <div className="tc" style={{marginTop: '8em', marginBottom: '8em'}}>
        <h3>A great combination to reflect the core values of the company.</h3>
      </div>
      
      <div className={styles.floatright}>
        <img src={Font2} alt="" style={{marginBottom: '6em'}}/>
      </div>
      
      
      <div className={styles.horizontalline} />
      <div className={styles.containersm} style={{marginTop: '8em', marginBottom: '8em'}}>
      <div className="tc">
        <h3 className={styles.h3text}>
          The brand visual is the final word on Quantum Peak Coaching identity: logotype, typography, color palette,
          photography, and more. It comes with detailed instructions on how to use these elements in a variety of
          contexts.
        </h3>
      </div>
      </div>
    </div>
    <img src={Last} alt="" style={{marginBottom: '4em'}}/>
    <Next link="/mandalita" />
    <Random />
  </div>
);

export default Project6;
