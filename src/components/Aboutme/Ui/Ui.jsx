import React from 'react';
import styles from './Ui.module.scss';
import Placeholder from './uxuidesignsofiamoraes.jpeg';

const Ui = () => (
  <div className={styles.padding}>
    <div className="mw9 center ph3-ns">
      <div className="cf ph2-ns">
        <div className="fl w-100 w-50-ns pa2 tc">
          <img alt="Ui Ux Design by sofia moraes" src={Placeholder} className={styles.profile} />
        </div>
        <div className="fl w-100 w-50-ns pa2">
          <div className={styles.abouttext}>
            <h2>
              UI|UX Web <br /> Design & <br /> Development
            </h2>
            <p className="measure-narrow">
            Leave it to me to realize your app or website into an intuitive, useful and delightful experience to interact - one that understand your user needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Ui;
