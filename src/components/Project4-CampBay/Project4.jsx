import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import HeaderImage from '../../../Design Elements/Project2-CampBay/Banner-sm.jpg';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import syle from './Project4.module.scss';
import Button from '../Buttons/ButtonOutgoing/ButtonOutgoing';
import Logos from '../../../Design Elements/Project2-CampBay/logo-icons.svg';
import Picture from '../../../Design Elements/Project2-CampBay/cblphoto-sm.png';
import Group from '../../../Design Elements/Project2-CampBay/Group-5.png';

// import Carved from '../../../Design Elements/Project2-CampBay/';
import Palet from '../../../Design Elements/Project2-CampBay/palet-01.svg';
import Sketch1 from '../../../Design Elements/Project2-CampBay/1-01.svg';
import Sketch2 from '../../../Design Elements/Project2-CampBay/2-01.svg';
import Sketch3 from '../../../Design Elements/Project2-CampBay/3-01.svg';
import Mockup1 from '../../../Design Elements/Project2-CampBay/m1.png';
import Mockup2 from '../../../Design Elements/Project2-CampBay/m2.png';
import Next from '../ProjectsComponents/NextProject';

const Project4 = () => (
  <div>
    <ProjectTop heading="Camp Bay Lodge" subHeading="A mindful experience" pic={HeaderImage} altText="" />
    <div className={styles.container}>
      <section className={styles.content} style={{marginTop: '4em', marginBottom: '4em'}}>
        <div className={styles.divleft}>
          <h2 className={styles.heading}>What is actually</h2>
          <h3>Camp Bay Lodge?</h3>
        </div>
        <div className={styles.divright}>
          <p className={styles.text}>
            It is a hotel located in the uncrowded East end of Roatan, totally removed from the regular tourism hustle
            surrounded by exuberant nature.
          </p>
          <Button name="Link to site" link="http://campbaylodge.com/" />
        </div>
      </section>
    </div>
    <div className={styles.container} style={{ backgroundColor: 'rgb(50,51,52)' }}>
      <section className={styles.content}>
        <div className={styles.divleft} style={{ padding: '10% 2%' }}>
          <h2 className={styles.heading} style={{ color: 'white' }}>
            Building the Identity
          </h2>
          <h3 style={{ color: 'white' }}>Reflecting Camp Bay Logde</h3>
          <p className={styles.text} style={{ color: 'white' }}>
            The client was very clear about message behind the logo: the Lodge is more about a place where you can
            return to the true nature of self, surrounded by a majestic nature and still have the opportunity to connect
            with the moment through yoga, meditation or any sports activity.
          </p>
        </div>
        <div className={styles.divright}>
          <img className={styles.acailogo} src={Logos} alt="El Acai Europe Logo Brand Identity" />
        </div>
      </section>
    </div>
    <div className={styles.container}>
      <section className={styles.content} style={{marginTop: '6em', marginBottom: '6em'}}>
        <div className={styles.divleft}>
          <img src={Picture} alt="Turquoise Media Fonts Scheme Sofia Moraes copyright" />
        </div>
        <div className={styles.divright}>
          <h3 className={syle.alignvertical}>
            The final logo was also carved in wood by local artists, giving an original touch to each space of the place
          </h3>
        </div>
      </section>
      
        <div className={styles.floatleft}>
          <h2 className={styles.heading}>Color Palette</h2>
          <h3>Inspired by nature</h3>
          <p className={styles.text}>
            After getting inspired by the island of Roatan, I decided to complement the favourite colour of the client:
            turquoise with a light blue representing the panoramic view of the sea along with two monochromatic grays to
            give a professional and reliable style.
          </p>
        </div>
        <div>
        <img src={Palet} alt="" style={{ width: '100%', maxWidth: 'none' }}/>
        </div>
   
      <div className="tc">
        <h2 className={styles.heading} style={{marginTop: '4em', marginBottom:'2em'}}>Developing the logo & base shape</h2>
        <h3 className={styles.h3text} style={{marginBottom:'4em'}}>
          The main idea for the realisation of the base shape was representing the universal law of: “ as it is above so
          below” referring to every thought that we place in our mind will shape our reality.
        </h3>
      </div>
      <div className={syle.flex}>
      <div>
        <img className={syle.icons} src={Sketch1} alt="" style={{ width: '20em'}} />
        </div>
        <div>
        <img className={syle.icons} src={Sketch2} alt="" style={{width: '20em'}}/>
        </div>
        <div>
        <img className={syle.icons} src={Sketch3} alt="" style={{width: '20em'}}/>
        </div>
      </div>
      <div className={styles.containersm} style={{marginTop: '4em', marginBottom: '6em'}}>
      <div className="tc">
        <h3 className={styles.h3text}>
          This idea was reflected in a very simple way though two inverse triangles and a circle representing the whole.
          The definition was very pleasant for the client due that Camp Bay Lodge is not just an hotel but a space for
          reflection where you can find the balance in your mind and therefore in Life.
        </h3>
      </div>
      </div>
    </div>
    <img src={Group} alt="" style={{ width: '100%'}}/>
    <div className={styles.container}>
      <div className="tc">
        <h2 className={styles.heading} style={{marginTop: '4em'}}>What I love the most while designing this!</h2>
        <div className={styles.containersm}>
        <h3 className={styles.h3text} style={{marginTop: '2em', marginBottom: '6em'}}>
          This idea was reflected in a very simple way though two inverse triangles and a circle representing the whole.
          The definition was very pleasant for the client due that Camp Bay Lodge is not just an hotel but a space for
          reflection where you can find the balance in your mind and therefore in Life.
        </h3>
        </div>
      </div>
      <section className={styles.content}>
        <div className={styles.left}>
          <img style={{marginTop: '3em', padding: '3%'}} src={Mockup1} alt="" />
        </div>
        <div className={styles.right}>
          <img style={{padding: '3%'}} src={Mockup2} alt="" />
        </div>
      </section>
    </div>
    <div className={styles.container}>
    <div className={styles.containersm}>
      <div className="tc" style={{marginTop: '4em', marginBottom: '8em'}}>
        <h2 className={syle.lastwords}>
          <b>Camp Bay lodge is part of one of the most remote and original communities in the world</b> full of life,
          exotic food and surrounded by ancient special feeling.
        </h2>
        </div>
      </div>
    </div>
    <Next link='/turquoisemedia' />
    <Random />
  </div>
);

export default Project4;


/*<div className={styles.container} style={{ backgroundColor: 'lightgrey' }}>
      <section className={styles.content}>
        <div className={styles.divleft} style={{marginTop: '12%'}}>
          <h2 className={styles.heading} style={{  }}>On-side website</h2>
          <h3 style={{  }}>Merging all the elements</h3>
          <p className={styles.text} style={{  }}>
            My work was not limited to graphic design, but also to the production of audiovisual, as well as being part
            of the web design team.
          </p>
        </div>
        <div className={styles.divright}>
          <img src={Mockup2} alt="" />
        </div>
      </section>
    </div>*/ 