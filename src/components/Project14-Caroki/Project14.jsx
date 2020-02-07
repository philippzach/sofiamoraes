import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import Button from '../Buttons/ButtonOutgoing/ButtonOutgoing';
import HeaderImage from '../../../Design Elements/Project14-Caroki/banner.jpg';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import Logo from '../../../Design Elements/Project14-Caroki/logo.svg';
import Phone from '../../../Design Elements/Project14-Caroki/phone.png';
import Logototal from '../../../Design Elements/Project14-Caroki/logototal.png';
import ColorPalette from '../../../Design Elements/Project14-Caroki/color.png';
import Pic2 from '../../../Design Elements/Project14-Caroki/pic2.png';
import Pic3 from '../../../Design Elements/Project13-Hangry/pic3.png';
import Color from '../../../Design Elements/Project11-Cafeblack/color.png';


import Next from '../ProjectsComponents/NextProject';

const Project2 = () => (
  <div>
    <ProjectTop
      heading='Caroki'
      subHeading='The center of used cars in Switzerland'
      pic={HeaderImage}
      altText=''
    />
    <div className={styles.container}>
      <div className={styles.floatleft} style={{ marginBottom: '3em'}}>
        <h2
          className={styles.heading}
          style={{ marginBottom: '1em', marginTop: '1em' }}
        >
         Caroki | Simplicity and Security
        </h2>
        <p className={styles.text}>
        A company that offers online a full service leasing on used car operating at the national level. Their full service platform for used cars eliminates risk and reduces effort for the buyer, creating trust and transparency.        </p>
      </div>
    </div>
    <div
      className={styles.container}
      style={{ backgroundColor: '#F45027', padding: '3em 2em 2em 2em' }}
    >
     <div className={styles.container}>
      <section className={styles.contentlogo}>
        <div className={styles.left}>
          <img
            className={styles.logo}
            src={Logo}
            alt='Caroki Brand Identity Sofia Moraes'
          />
        </div>
        <div className={styles.right}>
          <p style={{ color: 'white',  marginLeft: '3em', textAlign: 'right', fontWeight: '200' }}>
          <h2 style={{color: 'white',fontWeight: '400', paddingBottom: '1em'}}>About the project</h2>
          The goal was to create a modern, young, neutral and down to earth identity that can be easily use online and in the field service. Which transmits to the future user the ease of using of the services, comfort and carefree driving.

          </p>
        </div>
      </section>
      </div>
    </div>
    <div className={styles.container}>
   
      <section className={styles.flexfifty} style={{ marginTop: '2em' }}>
        <div className={styles.flexleft}>
          <h2 className={styles.heading}>The Logo</h2>
          <p className={styles.text}>
          A simple, cohesive and easy to apply design, chosen for its
modern and memorable style. The font that is used here is
Hippo Sans Serif.
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
          After digital sketching 5  concepts and the final feedback of the client, I proceeded to develop the logo together with the creation of the brand guidelines.

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

     
    </div>
    <div>
      <img src={Pic2} style={{ width: '100%' }} />
    </div>
 
      
    <Next link='/nomadyoga' />
    <Random />
  </div>
);

export default Project2;
