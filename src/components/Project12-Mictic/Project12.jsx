import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import Button from '../Buttons/ButtonOutgoing/ButtonOutgoing';
import HeaderImage from '../../../Design Elements/Project12-Mictic/banner.jpg';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import Logo from '../../../Design Elements/Project12-Mictic/logo.png';
import Pic1 from '../../../Design Elements/Project12-Mictic/pic1.jpg';
import Pic2 from '../../../Design Elements/Project12-Mictic/pic2.png';
import Pic3 from '../../../Design Elements/Project12-Mictic/pic3.png';
import Color from '../../../Design Elements/Project11-Cafeblack/color.png';


import Next from '../ProjectsComponents/NextProject';

const Project2 = () => (
  <div>
    <ProjectTop
      heading='Mictic'
      subHeading='The first audio augmented reality device'
      pic={HeaderImage}
      altText=''
    />
    <div className={styles.container}>
      <div className={styles.floatleft}>
        <h2
          className={styles.heading}
          style={{ marginBottom: '1em', marginTop: '1em' }}
        >
         Mictic - The first body instrument
        </h2>
        <p className={styles.text}>
        The startup develop the first body instrument an audio augmented reality device that allow people….augmented sound reality!
        </p>
        <div
          className={styles.floatright}
          style={{ textAlign: 'right', marginTop: '2em', marginBottom: '4em' }}
        >
          <Button name='Visit Website' link='https://mictic.com' />
        </div>
      </div>
    </div>
    <div
      className={styles.container}
      style={{ backgroundColor: '#39FFFA', padding: '3em 2em 2em 2em' }}
    >
     <div className={styles.container}>
      <section className={styles.contentlogo}>
        <div className={styles.left}>
          <img
            className={styles.logo}
            src={Logo}
            alt='Mictic Brand Identity Sofia Moraes'
          />
        </div>
        <div className={styles.right}>
          <p style={{ color: 'black',  marginLeft: '3em', textAlign: 'right', fontWeight: '200' }}>
          <h2 style={{fontWeight: '400', paddingBottom: '1em'}}>The problem/goal:</h2>
          The client approached me with the simple goal of building an easy jet consumer driven website to identify the product, its primary usage, and lead the user into future pre-orders.
          </p>
        </div>
      </section>
      </div>
    </div>
    <div className={styles.container}>
      <div className='w-100 pa2' style={{paddingTop: '4em'}}>
        <img src={Pic1} style={{ width: '100%' }} />
      </div>
      <div className='tc' style={{ marginTop: '4em', marginBottom: '4em' }}>
        <h3 className={styles.h3text} style={{textAlign: 'center', paddingBottom: '1em'}}>
        The main challenge in terms of  design was to show the user in a concise way and within the first seconds of opening the site what the product\experience is all about. 

        </h3>
      </div>

     {/*  <div  style={{ marginTop: '4em', marginBottom: '4em' }}>
        <h2 className={styles.heading}>Color Palette</h2>
        <p className={styles.text}>Inspired by the work of Malene Bach done in the restoration of the bar.</p>
      </div>
      <div className={styles.floatright}>
      <img src={Color}   />
      </div> */}
    </div>
    <div>
      <img src={Pic2} style={{ width: '100%' }} />
    </div>
    <div className={styles.container}>
    <div className='tc' style={{ marginTop: '4em', marginBottom: '4em' }}>
        <h3 className={styles.h3text} style={{textAlign: 'center', paddingBottom: '1em'}}>
        Being a completely new product in our world and our daily life, we decided to use the most direct and impressive communication system on the page: videos! also incorporate a nice fluid design to invite the user to learn more about the product. Used graphics and photos to further encourage the experience and reward.

        </h3>
      </div>
      </div>
      <div>
      <img src={Pic3} style={{ width: '100%' }} />
    </div>
    <Next link='/nomadyoga' />
    <Random />
  </div>
);

export default Project2;
