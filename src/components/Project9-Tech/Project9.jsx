import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import Button from '../Buttons/ButtonOutgoing/ButtonOutgoing';
import HeaderImage from '../../../Design Elements/Project9-Tech/banner.jpg';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import Logo from '../../../Design Elements/Project9-Tech/logo.svg';
import Pic1 from '../../../Design Elements/Project9-Tech/pic1.jpg';
import Pic2 from '../../../Design Elements/Project9-Tech/pic2.jpg';

import ColorPalette from '../../../Design Elements/Project8-Wohlgensinger/color.png';

import Next from '../ProjectsComponents/NextProject';

const Project2 = () => (
  <div>
    <ProjectTop
      heading='Swiss Startup Tech'
      subHeading='Zurich-based digital solution provider'
      pic={HeaderImage}
      altText=''
    />
    <div className={styles.container}>
      <div className={styles.floatleft}>
        <h2
          className={styles.heading}
          style={{ marginBottom: '1em', marginTop: '1em' }}
        >
          Part of leading Swiss Venture Platform
        </h2>
        <p className={styles.text}>
          Zurich-based digital solution provider with a focus on accelerating
          product development through innovation, startup and customer-centric
          mindset.
        </p>
        <div
          className={styles.floatright}
          style={{ textAlign: 'right', marginTop: '2em', marginBottom: '4em' }}
        >
          <Button name='Visit Website' link='https://ssut.ch' />
        </div>
      </div>
    </div>
    <div
      className={styles.container}
      style={{ backgroundColor: '#F8E8DD', padding: '3em 2em 2em 2em' }}
    >
      <section className={styles.content}>
        <div className={styles.left}>
          <img
            className={styles.logo}
            src={Logo}
            alt='Swiss Startup Tech Logo Brand Identity Sofia Moraes'
          />
        </div>
        <div className={styles.right}>
          <p style={{ color: 'black', fontWeight: 200, marginLeft: '3em' }}>
            The marketing team of the project contact me with the main goal of
            creating a high performance website in which the user can engage and
            inform about the startup services, benefits and experiences.
          </p>
        </div>
      </section>
    </div>
    <div className={styles.container}>
      <div className='tc' style={{ marginTop: '4em', marginBottom: '4em' }}>
        <h3 className={styles.h3text}>
          The web design was made inspired by the latest digital and graphic
          trends and having a natural tone to differentiate them from rest of
          the tech companies. Adding fun and light graphic elements made this
          page work at maximum percent, resulting in a simple, minimalist
          interface that goes straight to the point.
        </h3>
      </div>
      <div className='w-100 pa2'>
        <img src={Pic1} style={{ width: '100%' }} />
      </div>

      <div className='tc' style={{ marginTop: '4em', marginBottom: '4em' }}>
        <h2 className={styles.heading}>Keywords</h2>
        <p className={styles.text}>Centricity | Value-driven | Leadership</p>
      </div>
    </div>
    <div>
      <img src={Pic2} style={{ width: '100%' }} />
    </div>

    <Next link='/nomadyoga' />
    <Random />
  </div>
);

export default Project2;
