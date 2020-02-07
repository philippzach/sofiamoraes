import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import Button from '../Buttons/ButtonOutgoing/ButtonOutgoing';
import HeaderImage from '../../../Design Elements/Project15-Fund/banner.jpg';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import Logo from '../../../Design Elements/Project15-Fund/logo.svg';
import Phone from '../../../Design Elements/Project14-Caroki/phone.png';
import Logototal from '../../../Design Elements/Project15-Fund/logototal.svg';
import ColorPalette from '../../../Design Elements/Project15-Fund/color.png';
import Pic1 from '../../../Design Elements/Project15-Fund/pic1.png';
import Pic2 from '../../../Design Elements/Project15-Fund/pic2.png';
import Pic3 from '../../../Design Elements/Project13-Hangry/pic3.png';
import Color from '../../../Design Elements/Project11-Cafeblack/color.png';


import Next from '../ProjectsComponents/NextProject';

const Project2 = () => (
  <div>
    <ProjectTop
      heading='Swiss Startup Fund I'
      subHeading=' A fund for venture asset management '
      pic={HeaderImage}
      altText=''
    />
    <div className={styles.container}>
      <div className={styles.floatleft} style={{ marginBottom: '3em'}}>
        <h2
          className={styles.heading}
          style={{ marginBottom: '1em', marginTop: '1em' }}
        >
         SSUG Flagshipfund I
        </h2>
        <p className={styles.text}>
        The head of marketing of the Swiss company SSUG approached me for this project in which I should develop in a short period of time the identity, website, corporate branding manual and a presentation of the company, the final goal: to have in less than a month absolutely all the necessary material to give the GO to the company.
        </p>
      <div
          className={styles.floatright}
          style={{ textAlign: 'right', marginTop: '2em', marginBottom: '4em' }}
        >
          <Button name='Visit Website' link='https://https://www.ssugflagshipfund.com/' />
        </div>
      </div>
    </div>
    <div
      className={styles.container}
      style={{ backgroundColor: '#EEEEEE', padding: '3em 2em 2em 2em' }}
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
          <p style={{ color: 'black',  marginLeft: '3em', textAlign: 'right', fontWeight: '200' }}>
          <h2 style={{color: 'black',fontWeight: '400', paddingBottom: '1em'}}>About the project</h2>
          Minimalist, simple, noble were the fundamental bases for the creation of this logo.  I decided to add features similar to the SSUG logo while maintaining a new, fresh and a  pleasing identity.


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
          After digital sketching 5  concepts and the final feedback of the client, I proceeded to develop the logo together with the creation of the brand guidelines and website.
          </p>
        </div>
        <div className={styles.flexright}>
          <img src={Logototal} style={{ width: '100%' }} />
        </div>
      </section>

      <div>
      <img src={Pic1} style={{ width: '100%' }} />
    </div>

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
