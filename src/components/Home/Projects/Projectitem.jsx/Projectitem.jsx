import React from 'react';
import styles from './Projectitem.module.scss';

const Projectitem = props => (
  <div>
    <div className={styles.picture} >
    <img src={props.img}/>
     </div>
    <div className={styles.text} >
    <h3 className={styles.heading}>{props.name}</h3>
    <div>
    <p className={styles.atr}>{props.atr}</p>
    </div>
    </div>
    </div>
);

export default Projectitem;
