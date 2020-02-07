import React from 'react';
import styles from './aboutme.module.scss';
// import tachyons from 'tachyons';
import Profilepic from './aboutsm.jpg';
// import Typist from 'react-typist';

const Aboutme = () => (
  <div>
    <div className="mw9 center ph3-ns">
      <div className="cf ph2-ns">
        <div className="fl w-100 w-50-ns pa2">
          <img alt="Sofia Moraes Portrait" src={Profilepic} className={styles.profile} />
        </div>
        <div className="fl w-100 w-50-ns pa2 measure-narrow">
          <div className={styles.abouttext}>
            <h2>About Me</h2>
            {/* }<Typist cursor= {{show: false,  }}>{ */}
            <p>
              I am a graphic designer specialized in web design, user interface, content production and branding
              identity.
            </p>
            <p>
              I'm originally from Venezuela, but I have spent the last 7 years traveling the world using my creative and
              physical skills, my obsession with order and perfection has made me a graphic designer of high caliber, my
              passion for imagery and moments has given me the opportunity to transmit sensations through the lens.
            </p>
            <p>
              I love to find the balance between beauty and usefulness, create aesthetic solutions that propel towards a
              more united world and collaborate with awesome and creative people all over the globe.
            </p>
            <p>In my spare time you will find me only in one place: the ocean</p>
            {/* }</Typist>{ */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Aboutme;
