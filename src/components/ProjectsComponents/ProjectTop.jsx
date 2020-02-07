import React from 'react';
import styles from './Project.module.scss';

const ProjectTop = props => (
  <div>
    <div className={styles.container}>
      <div style={{ marginTop: '1rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>
          <b>{props.heading}</b>
        </h1>
        <h2>{props.subHeading}</h2>
      </div>
    </div>
    <img src={props.pic} alt={props.altText} style={{ width: '100%' }} />
  </div>
);

export default ProjectTop;
