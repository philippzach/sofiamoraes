import React from 'react';
import styles from './Branding.module.scss';
import Placeholder from './brandingsofiamoraes.jpeg';

const Branding = () => (
  <div className={styles.padding}>
    <div className="mw9 center ph3-ns">
      <div className="cf ph2-ns">
        <div className="fl w-100 w-50-ns pa2">
          <div className={styles.abouttext}>
            <h2>
              Branding and <br /> Identity
            </h2>
            <p className="measure-narrow">
              Maybe you're a small startup or maybe you have the business idea but none of the aesthetics? I can help
              you establish an attractive and pleasant branding identity that will differentiate you from the endless
              sea of competitors.
            </p>
          </div>
        </div>
        <div className="fl w-100 w-50-ns pa2">
          <img alt="Ui Ux Design by sofia moraes" src={Placeholder} className={styles.profile} />
        </div>
      </div>
    </div>
  </div>
);

export default Branding;
