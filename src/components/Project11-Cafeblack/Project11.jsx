import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import Button from '../Buttons/ButtonOutgoing/ButtonOutgoing';
import HeaderImage from '../../../Design Elements/Project11-Cafeblack/banner.png';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import Logo from '../../../Design Elements/Project11-Cafeblack/logo.svg';
import Pic1 from '../../../Design Elements/Project11-Cafeblack/pic1.png';
import Pic2 from '../../../Design Elements/Project11-Cafeblack/pic2.jpg';
import Color from '../../../Design Elements/Project11-Cafeblack/color.png';


import Next from '../ProjectsComponents/NextProject';

const Project2 = () => (
  <div>
    <ProjectTop
      heading='Cafe Bar Black1966'
      subHeading='historic cafe located in Zurich Seefeld opened since 1966'
      pic={HeaderImage}
      altText=''
    />
    <div className={styles.container}>
      <div className={styles.floatleft}>
        <h2
          className={styles.heading}
          style={{ marginBottom: '1em', marginTop: '1em' }}
        >
         Cafe Bar Black 1966
        </h2>
        <p className={styles.text}>
        It was one of the first cafes in the city to offer real Italian coffee. After changing their ownership in May 2019 they decided to renew it to open their doors again in December 2019. The place was delicately resigned by the famous Danish artist Malene Bach.

        </p>
        <div
          className={styles.floatright}
          style={{ textAlign: 'right', marginTop: '2em', marginBottom: '4em' }}
        >
          <Button name='Visit Website' link='https://black1966.ch' />
        </div>
      </div>
    </div>
    <div
      className={styles.container}
      style={{ backgroundColor: '#F8E8DD', padding: '3em 2em 2em 2em' }}
    >
     <div className={styles.container}>
      <section className={styles.contentlogo}>
        <div className={styles.left}>
          <img
            className={styles.logo}
            src={Logo}
            alt='Swiss Startup Tech Logo Brand Identity Sofia Moraes'
          />
        </div>
        <div className={styles.right}>
          <p style={{ color: 'black', fontWeight: 200, marginLeft: '3em' }}>
          The marketing team approached me with the goal of creating a super simple but inspiring website in which former clients could see the renovation as well as inform themselves of the opening hours and variations of the menu.
          </p>
        </div>
      </section>
      </div>
    </div>
    <div className={styles.container}>
      <div className='tc' style={{ marginTop: '4em', marginBottom: '4em' }}>
        <h3 className={styles.h3text}>
        The web design was inspired by the geometric designs and faint colors of the Artist Malene, bringing to the forefront the visual impact of the coffee restoration, as well as a minimalist and easy-to-navigate menu for the user.

        </h3>
      </div>
      <div className='w-100 pa2'>
        <img src={Pic1} style={{ width: '100%' }} />
      </div>

      <div  style={{ marginTop: '4em', marginBottom: '4em' }}>
        <h2 className={styles.heading}>Color Palette</h2>
        <p className={styles.text}>Inspired by the work of Malene Bach done in the restoration of the bar.</p>
      </div>
      <div className={styles.floatright}>
      <img src={Color}   />
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
