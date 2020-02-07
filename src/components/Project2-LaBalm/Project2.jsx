import React from 'react';
import ProjectTop from '../ProjectsComponents/ProjectTop';
import HeaderImage from '../../../Design Elements/Project3-LApalm/banner2.jpg';
import Random from '../ProjectsComponents/BrowseProjects';
import styles from '../ProjectsComponents/Project.module.scss';
import syle from '../Project2-LaBalm/Project2.module.scss';
import Logo from '../../../Design Elements/Project3-LApalm/Lb-01.svg';
import Font1 from '../../../Design Elements/Project3-LApalm/tps-01.svg';
import Font2 from '../../../Design Elements/Project3-LApalm/tp2-01.svg';
import Colors from '../../../Design Elements/Project3-LApalm/pc-01.svg';
import Product1 from '../../../Design Elements/Project3-LApalm/minilabalm-min.jpg';
import Product2 from '../../../Design Elements/Project3-LApalm/Face-oil-same-sm.jpg'; // Face Oil-sm.jpg
import Product3 from '../../../Design Elements/Project3-LApalm/Boxes Mockup-sm.jpg'; //  Face-oil-boxes-same-sm.jpg
import Catalog1 from '../../../Design Elements/Project3-LApalm/book2-sm.jpg';
import Catalog2 from '../../../Design Elements/Project3-LApalm/bb blue-sm.jpg';
import Catalog3 from '../../../Design Elements/Project3-LApalm/bookcoco-sm.jpg';
import Catalog4 from '../../../Design Elements/Project3-LApalm/Horizontal_Book_Mockup_1-sm.jpg';
import Sticker from '../../../Design Elements/Project3-LApalm/stickers-sm.jpg';
import Instagram1 from '../../../Design Elements/Project3-LApalm/iphone1.png';
import Instagram2 from '../../../Design Elements/Project3-LApalm/iphone2.png';
import Instagram3 from '../../../Design Elements/Project3-LApalm/iphone3.png';
import Next from '../ProjectsComponents/NextProject';

const Project2 = () => (
  <div>
    <ProjectTop heading="LA Balm" subHeading="Cococanna - Natural Skin Care" pic={HeaderImage} altText="" />
    <div className={styles.container}>
      <div className={styles.floatleft}>
        <h2 className={styles.heading} style={{marginBottom: "1em", marginTop: '1em' }}>Sharing the love</h2>
        <p className={styles.text}>
          La Balm is a line of high quality handcrafted skincare products. Based in California, offers small-batch,
          organic and wildcrafted body care that uses 100% natural and plant-based ingredients.
        </p>
      </div>
      <div className={styles.floatright} style={{ textAlign: "right", marginTop: "4em", marginBottom: "6em" }}>
        <h2 className={styles.heading}>Strategy</h2>
        <h3>An approach of simplicity to daily life</h3>
        <p className={styles.text}>
          The strategy was to design the visual identity and packaging that would adopt a distinctive language from
          traditional cosmetic brands, focusing on promoting a more natural and simple lifestyle.
          <br />
          Inspired by: Love | Happiness | Sharing the good stuff
        </p>
      </div>
      <section className={styles.content} style={{ marginTop: "4em" }}>
        <div className={styles.divleft}>
          <img src={Logo} alt="LABalm Logo Sofia Moraes copyright" />
        </div>
        <div className={styles.divright}>
          <h2 className={styles.heading}>Logo</h2>
          <h3>Spraying those vibes!</h3>
          <p className={styles.text}>Simple and minimal, allowing the brands' spirit and modern vibe shine.</p>
        </div>
      </section>
      <div style={{ marginTop: "4em" }}>
        <h2 className={styles.heading}>Typography</h2>
        <h3>The edge between fun & minimalistic</h3>
        <section className={styles.content} style={{ marginTop: "4em" }}>
          <div className={styles.left}>
            <img src={Font1} />
          </div>
          <div className={styles.right}>
            <img src={Font2} />
          </div>
        </section>
      </div>
      <div className={styles.floatright} style={{ marginTop: "4em", textAlign: "right" }}>
        <h2 className={styles.heading}>Color Palette</h2>
        <h3>Pastel colors babe</h3>
        <p className={styles.text}>
          The client wanted a palette that was bright and fun. I picked a main colour for each pack then mixed up the
          remaining colours as accents across the range.
        </p>
      </div>
      <div>
        <img src={Colors} style={{ width: "100%" }}/>
      </div>
      <div className="tc" style={{ marginTop: "4em", marginBottom: "4em" }} >
        <h2 className={styles.heading}>Product Line</h2>
        <h3 className={styles.h3text}>LA Balm, a brand with a steadfast belief in the power of self-love and communion with nature.</h3>
      </div>
      <div>
      <div className="fl w-100 pa2">
        <img src={Product1} style={{width: '100%'}}/>
        </div>
        <div className="fl w-third pa2">
        <img src={Product2} />
        </div>
        <div className="fl w-two-thirds pa2">
        <img src={Product3} />
        </div>
      </div>
      <div className="tc" style={{ marginTop: "4em", marginBottom: "4em" }}>
        <h2 className={styles.heading}>Catalog Design</h2>
        <h3 className={styles.h3text}>Good vibes go a long way*</h3>
      </div>
      <div>
      <div className="fl w-100 pa2">
        <img src={Catalog1} />
        </div>
        <div className="fl w-third pa2">
        <img src={Catalog2} />
        </div>
        <div className="fl w-third pa2">
        <img src={Catalog3} />
        </div>
        <div className="fl w-third pa2">
        <img src={Catalog4} />
        </div>
      </div>
      
      <img src={Sticker} style={{marginTop: '4em'}} />
      <div className={styles.horizontalline} />
      <div className="tc" style={{ marginTop: "6em", marginBottom: "6em" }}>
        <h2 className={styles.heading}>Instagram Graphics</h2>
        <h3 className={styles.h3text}>'How to' Instagram slide graphics.</h3>
      </div>
    </div>
    <div className={syle.yellowbackground}>
      <div className={syle.third}>
        <img className={syle.iphone} src={Instagram1} />
        </div>
      <div className={syle.third}>
        <img className={syle.iphone} src={Instagram2} />
        </div>
      <div className={syle.third}>
        <img className={syle.iphone} src={Instagram3} />
        </div>
      </div>
    <Next link="/nomadyoga" />
    <Random />
  </div>
);

export default Project2;
