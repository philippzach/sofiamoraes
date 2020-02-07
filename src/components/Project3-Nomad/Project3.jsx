import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import HeaderImage from '../../../Design Elements/Project6-Nomad/Cards1-sm.jpg';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import syle from '../Project3-Nomad/Project3.module.scss';
import Phone1 from '../../../Design Elements/Project6-Nomad/app1.png';
import Phone2 from '../../../Design Elements/Project6-Nomad/app2.png';
import Phone3 from '../../../Design Elements/Project6-Nomad/app3.png';
import Logo from '../../../Design Elements/Project6-Nomad/lOGO-01.svg';
import Ring1 from '../../../Design Elements/Project6-Nomad/c1-01-01.svg';
import Ring2 from '../../../Design Elements/Project6-Nomad/c2-06-01.svg';
import Ring3 from '../../../Design Elements/Project6-Nomad/c3-02-01-01.svg';
import Diagram from '../../../Design Elements/Project6-Nomad/Diagram-01.svg';
import Mockup from '../../../Design Elements/Project6-Nomad/Thumnails-01.svg';
import Apps from '../../../Design Elements/Project6-Nomad/mockup final-sm.png';
import Next from '../ProjectsComponents/NextProject';

const Project3 = () => (
  <div>
    <ProjectTop heading="Nomad Yoga" subHeading="Ready to feel good?" pic={HeaderImage} altText="" />
    <div className={styles.container}>
      <div className={styles.floatright} style={{ textAlign: 'right', marginTop: '4em', marginBottom: '4em' }}>
        <h2 className={styles.heading}>What is Nomad Yoga?</h2>
        <p className={styles.text}>
          Is a mobile application which presents a series of soulful yoga practices curated for daily use. Designed to
          help people build a morning routine, connect with other yogis, or simple disconnect from a busy life.
        </p>
      </div>
      <hr className={styles.horizontalline} />

      <div className={styles.containersm} style={{ marginTop: '4em', marginBottom: ' 4em' }}>
        <p className={styles.text} style={{ textAlign: 'center' }}>
          The founders of Nomad Yoga expressed their desire to create an application in which people had the opportunity
          to create a habit around their practice.
        </p>
      </div>
    </div>
    <div className={syle.greybackground}>
      <div>
        <img className={syle.iphone} src={Phone1} />
      </div>
      <div>
        <img className={syle.iphone} src={Phone2} />
      </div>
      <div>
        <img className={syle.iphone} src={Phone3} />
      </div>
    </div>
    <div className={styles.container}>
      <section className={styles.content} style={{ marginTop: '6em' }}>
        <div className={styles.divleft}>
          <h2 className={styles.heading}>The Design</h2>
          <h3>Giving life to the lines</h3>
          <p className={styles.text}>
            I incorporate bluish tones into the design which have the characteristics of expressing tranquility,
            relaxation & feelings of well being.
          </p>
        </div>
        <div className={styles.divright}>
          <img src={Logo} alt="Nomad Yoga Logo Sofia Moraes copyright" />
        </div>
      </section>
      <div className={styles.floatright} style={{ textAlign: 'right', marginTop: '6em' }}>
        <h2 className={styles.heading}>Goals</h2>
        <p className={styles.text}>
          Create a minimal, easy and focused practice that offers the three elements of habit: simplicity, community and
          discovery. These characteristics are deeply rooted in the human being, which bring as a consequence a total
          commitment with the application.
        </p>
      </div>
      <div className={syle.whitebackground}>
        <div>
          <img className={syle.circles} src={Ring1} />
        </div>
        <div>
          <img className={syle.circles} src={Ring2} />
        </div>
        <div>
          <img className={syle.circles} src={Ring3} />
        </div>
      </div>
      <div className={styles.horizontalline} />
      <div className="tc" style={{ marginTop: '6em' }}>
        <div className={styles.containersm} style={{ marginBottom: '4em' }}>
          <h3 className={styles.h3text}>
            The purpose of creating user flows for this application was mainly to demonstrate in a simple way the
            founders and developers the operation of the app.
          </h3>
        </div>
        <img src={Diagram} />
        <div className={styles.floatright} style={{ textAlign: 'right', marginBottom: '4em', marginTop: '4em' }}>
          <h2 className={styles.heading}>Simple UI</h2>
          <h3>Simplicity is the closest way to the heart</h3>
          <p className={styles.text}>
            With the aim of a minimum decision making and a beautiful and simple user interface, the design of the touch
            screen allows the user to access the practice in an easy and practical way, eliminating any element of
            distraction.
          </p>
        </div>
      </div>
    </div>
    <img src={Mockup} style={{ width: '100%' }} />
    <div className={styles.container}>
      <div className={styles.containersm}>
        <h3 className={styles.h3text} style={{ textAlign: 'center', marginBottom: '4em' }}>
          The creation of iconography and miniatures was inspired by the soft tones of the main design palette, which
          resulted in a very pleasing appearance to the eye.
        </h3>
      </div>
    </div>
    <img src={Apps} style={{ width: '100%' }} />
    <Next link="/campbaylodge" />
    <Random />
  </div>
);

export default Project3;
