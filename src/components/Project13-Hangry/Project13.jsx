import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import Button from '../Buttons/ButtonOutgoing/ButtonOutgoing';
import HeaderImage from '../../../Design Elements/Project13-Hangry/banner.jpg';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import Logo from '../../../Design Elements/Project13-Hangry/logo.svg';
import Phone from '../../../Design Elements/Project13-hangry/phone.png';
import Logototal from '../../../Design Elements/Project13-hangry/logototal.png';
import ColorPalette from '../../../Design Elements/Project13-hangry/color.png';
import Pic2 from '../../../Design Elements/Project13-Hangry/pic2.png';
import Pic3 from '../../../Design Elements/Project13-Hangry/pic3.png';
import Color from '../../../Design Elements/Project11-Cafeblack/color.png';


import Next from '../ProjectsComponents/NextProject';

const Project2 = () => (
  <div>
    <ProjectTop
      heading='Hangry'
      subHeading='Conecting Restaurants and Users in Zürich'
      pic={HeaderImage}
      altText=''
    />
    <div className={styles.container}>
      <div className={styles.floatleft} style={{ marginBottom: '3em'}}>
        <h2
          className={styles.heading}
          style={{ marginBottom: '1em', marginTop: '1em' }}
        >
         Hangry - online food delivery app
        </h2>
        <p className={styles.text}>
        An app that allows you to (pre)order food and you can pick it up without waiting or queing in a restaurant or a food truck.
        </p>
       
      </div>
    </div>
    <div
      className={styles.container}
      style={{ backgroundColor: '#FF5851', padding: '3em 2em 2em 2em' }}
    >
     <div className={styles.container}>
      <section className={styles.contentlogo}>
        <div className={styles.left}>
          <img
            className={styles.logo}
            src={Logo}
            alt='Hangry Brand Identity Sofia Moraes'
          />
        </div>
        <div className={styles.right}>
          <p style={{ color: 'white',  marginLeft: '3em', textAlign: 'right', fontWeight: '200' }}>
          <h2 style={{color: 'white',fontWeight: '400', paddingBottom: '1em'}}>About the project</h2>
          The project was about creating  the identity of the  website/app were people had the possibility of locating a restaurant, place an orders, pay and setup pickup time and order tracking. In the same way  restaurants had the chance to register, administrate their profile, manage their content, orders, payments and analytics.
          </p>
        </div>
      </section>
      </div>
    </div>
    <div className={styles.container}>
      {/* <div className='w-100 pa2' style={{paddingTop: '4em'}}>
        <img src={Pic1} style={{ width: '100%' }} />
      </div> */}
      <section className={styles.flexfifty} style={{ marginTop: '2em' }}>
        <div className={styles.flexleft}>
          <h2 className={styles.heading}>Building the identity</h2>
          <p className={styles.text}>
            Was defined after stuying the target group and personas, which will
            be: the cheerful city person, the young families and retirees
            reciding in the area of Mosnang.
          </p>
        </div>
        <div className={styles.flexright}>
          <img src={Logototal} style={{ width: '100%' }} />
        </div>
      </section>

      <section className={styles.content} style={{ marginTop: '4em' }}>
        <div className={styles.divleft}>
          <img src={Phone} alt='Wohlgensinger Sofia Moraes Design' />
        </div>
        <div
          className={styles.divright}
          style={{
            textAlign: 'right',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
         
          <p className={styles.text}>
          At the first stage we focus on developing the logo, branding, tone and color palette for further testing before developing the wireframe and UI of the app.

          </p>
        </div>
      </section>

      <section className={styles.flexfifty} style={{ marginTop: '2em' }}>
        <div className={styles.flexleft}>
          <h2 className={styles.heading}>Color Palette</h2>
          <p className={styles.text}>
            Was defined after stuying the target group and personas, which will
            be: the cheerful city person, the young families and retirees
            reciding in the area of Mosnang.
          </p>
        </div>
        <div className={styles.flexright}>
          <img src={ColorPalette} style={{ width: '100%' }} />
        </div>
      </section>

      <div className='tc' style={{ marginTop: '4em', marginBottom: '4em' }}>
        <h3 className={styles.h3text} style={{textAlign: 'center', paddingBottom: '1em'}}>
        After researching the market, mood and tendencies, decided to sketch 3 concepts together with Logo, color palettes and logotypes.
        </h3>
      </div>
    </div>
    <div>
      <img src={Pic2} style={{ width: '100%' }} />
    </div>
    <div className={styles.container}>
    <div className='tc' style={{ marginTop: '4em', marginBottom: '4em' }}>
        <h3 className={styles.h3text} style={{textAlign: 'center', paddingBottom: '1em'}}>
        The three concepts were tested on Usability Hub to be able
 to reach the final election.
 </h3>
<h3 className={styles.h3text} style={{textAlign: 'center', paddingBottom: '1em'}}>
It was included a small one-pager design for potential clients.

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
