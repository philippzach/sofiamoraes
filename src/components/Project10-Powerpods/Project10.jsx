import React from 'react';
import styles from '../ProjectsComponents/Project.module.scss';
import HeaderPic from '../../../Design Elements/Project10-Powerpods/banner.jpg';
import Logo from '../../../Design Elements/Project10-Powerpods/logo.svg';
import Button from '../Buttons/ButtonOutgoing/ButtonOutgoing';
import ColorP from '../../../Design Elements/Project10-Powerpods/colorpalette.jpg';
import Pic1 from '../../../Design Elements/Project10-Powerpods/pic1.jpg';
import Pic2 from '../../../Design Elements/Project10-Powerpods/pic2.jpg';
import FontsPic from '../../../Design Elements/Project10-Powerpods/fonts.png';



import Random from '../ProjectsComponents/BrowseProjects';
import Next from '../ProjectsComponents/NextProject';
import ProjectTop from '../ProjectsComponents/ProjectTop';

const Project1 = () => (
  <div>
    <ProjectTop heading="PowerPods" subHeading="A startup located in California, specialized in distribuiting the best quality superfoods" pic={HeaderPic} altText="" />
    <div className={styles.container} style={{ marginBottom: '3rem', marginTop: '1rem' }}>
      <div className={styles.floatright}>
        <h2 className={styles.heading}>PowerPods</h2>
        <p className={styles.text}>
        A superfood startup based in California offering a convenient way to get  the world's best superfood ingredients.        </p>
       
      </div>
    </div>
    <div className={styles.container} style={{ backgroundColor: '#FFB405' }}>
      <section className={styles.content}>
        <div className={styles.left} style={{ padding: '10% 2%' }}>
          <h2 className={styles.heading} style={{ color: 'black' }}>
            Building the Identity
          </h2>
          <p style={{ color: 'black', fontWeight: 200 }}>
          The owners of the startup approached with the idea of ​​creating a minimal variable product to test the market. After discussing about their goals and the brand voice, we start the development of the identity.
          </p>
        </div>
        <div className={styles.right} style={{display: 'flex'}}>
          <img className={styles.logo} src={Logo} alt="Sofia Moraes Power Pods Logo Brand Identity" />
        </div>
      </section>
    </div>
    <div className={styles.container}>
      <section className={styles.content} style={{alignItems: "center", marginTop: "3em"}}>
        <div className={styles.left}>
        <img src={ColorP} />
        </div>
        <div className={styles.right} style={{paddingLeft: "1em"}}>
        <h2 className={styles.heading}>Branding |  <span style={{fontWeight: '200'}}>Authentic storytelling</span></h2>
          <p style={{fontWeight: "200"}}>
          The color palette and typography is focused on expressing convenience and nutrition, fresh and organic values.
          </p>
        </div>
      </section>
    </div>
    <div className={styles.container}>
      <section className={styles.content} style={{alignItems: "center"}}>
        <div className={styles.left}>
          <p className={styles.paragraph}>
          After several rounds of feedback  we got the right colors and font selection, then I procced to sketch and digitalice the fist product label.
          </p>
        </div>
        <div className={styles.right}>
          {' '}
          <img className={styles.acailogorules} src={FontsPic} alt="El Acai Europe Logo Brand Identity" />
        </div>
      </section>
      <h3 className="tc">
        <b>Sustainability | Quality | Happiness</b>
      </h3>
      <img src={Pic1} alt="PowerPods Print Mockup" />
    </div>
   
    <div className={styles.container}>
          <p style={{margin: '0 auto'}} className="tc measure">
            Bold, simple and original. The selected font was used mainly to enhance the nature of the product and its
            playful tone increases reliability of the brand.
          </p>
    </div>
    <img style={{ marginTop: '3rem' }} src={Pic2} alt="El Acai Europe Business Cards" />
    <Next link="/labalm" />
    <Random />
  </div>
);

export default Project1;

/*
<div className={styles.purplebg}>
      <div className={styles.container}>
        <div className="cf">
          <div class="fl w-100 w-50-ns" style={{ paddingTop: '20%' }}>
            <h2 style={{ color: 'white', marginBottom: '0.5rem' }}>
              <b>Building the Identity</b>
            </h2>
            <h3 style={{ color: 'white', fontWeight: 200 }}>The goal: Unique, high visual impact</h3>
            <p style={{ color: 'white', fontWeight: 200 }}>
              Since the Acai berry is relatively new in Europe the logo should have a high visual impact to attract the
              curiosity of the market, it should represent a new flavour, a new experience and the at the same time
              retain its brazilian roots with the european public in mind.
            </p>
          </div>
          <div className="fl w-100 w-50-ns">
            <img className={styles.acailogo} src={AcaiLogo} alt="El Acai Europe Logo Brand Identity" />
          </div>
        </div>
      </div>
    </div>
*/
