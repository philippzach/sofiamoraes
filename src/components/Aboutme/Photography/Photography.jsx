import React from 'react';
import styles from './Photography.module.scss';
import Placeholder from './productphotographysofiamoraes.jpeg';

const Photography = () => (
  <div className={styles.padding}>
    <div className="mw9 center ph3-ns">
      <div className="cf ph2-ns">
        <div className="fl w-100 w-50-ns pa2 tc">
          <img alt="Ui Ux Design by sofia moraes" src={Placeholder} className={styles.profile} />
        </div>
        <div className="fl w-100 w-50-ns pa2">
          <div className={styles.abouttext}>
            <h2>Product Photography</h2>
            <p className="measure-narrow">
              You need professional, colorful and fresh photos of your product? I specialize in product photography for
              your website, online store, the Amazon marketplace, branding and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Photography;
