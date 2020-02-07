import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import Button from '../Buttons/ButtonOutgoing/ButtonOutgoing';
import HeaderImage from '../../../Design Elements/Project8-Wohlgensinger/banner.jpg';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import syle from './Project8.module.scss';
import Phone from '../../../Design Elements/Project8-Wohlgensinger/phone.png';
import Product1 from '../../../Design Elements/Project8-Wohlgensinger/pic.png';
import Pic2 from '../../../Design Elements/Project8-Wohlgensinger/pic2.jpg';
import Pic3 from '../../../Design Elements/Project8-Wohlgensinger/pic3.jpg';
import ColorPalette from '../../../Design Elements/Project8-Wohlgensinger/color.png';

import Next from '../ProjectsComponents/NextProject';

const Project2 = () => (
  <div>
    <ProjectTop
      heading='Wohlgensinger AG'
      subHeading='Innovative ecological carpentry with experience in remodeling, new construction and furniture.'
      pic={HeaderImage}
      altText=''
    />
    <div className={styles.container}>
      <div className={styles.floatleft}>
        <h2
          className={styles.heading}
          style={{ marginBottom: '1em', marginTop: '1em' }}
        >
          Simplicity and Sustainability
        </h2>
        <p className={styles.text}>
          It is an ecological and sustainable wood construction company founded
          in 1941. It is responsible for advice, planning and construction using
          regional wood in the Mosnang area, Switzerland.
        </p>
        <div
          className={styles.floatright}
          style={{ textAlign: 'right', marginTop: '2em', marginBottom: '4em' }}
        >
          <Button name='Visit Website' link='https://wohlgensinger.ch' />
        </div>
      </div>

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
          <h2 className={styles.heading}>The Problem</h2>
          <p className={styles.text}>
            Create a beautiful, vibrant, minimal yet impactful new version of
            the website that transmits the vision of the company and at the same
            time to be used as online catalog and inspiration for client’s
            future projects..
          </p>
        </div>
      </section>
      <div className='tc' style={{ marginTop: '4em', marginBottom: '4em' }}>
        <h2 className={styles.heading}>Their Values</h2>
        <h3 className={styles.h3text}>
          simplicity, sustainability, innovation and aesthetics
        </h3>
      </div>
      <div className='w-100 pa2'>
        <img src={Product1} style={{ width: '100%' }} />
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
      <div className='tc' style={{ marginTop: '4em', marginBottom: '4em' }}>
        <h3 className={styles.h3text}>
          Since the website was developed as a React PWA, I had a lot of freedom
          to make a beautiful website with several features, transitions,
          carousels, symmetric shapes giving balance and focus to the images as
          the main point of attention, a soft color palette to reflect the
          ecology and company mision.
        </h3>
      </div>
    </div>
    <div>
      <img src={Pic2} style={{ width: '100%' }} />
    </div>
    <div className={styles.container}>
      <div className='tc' style={{ marginTop: '4em', marginBottom: '4em' }}>
        <h3 className={styles.h3text}>
          I was also in charge of choosing the photo/content for the website,
          photo and color correction as well as creating the wireframe, UI and
          icons used on the site.
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
