import React from 'react';
import Button1 from '../Buttons/Button1/Button1';
import styles from './Project.module.scss';

const Next = props => (
  <div className={styles.container}>
    <div>
      <h2 style={{ marginTop: '2.5em', marginBottom: '1em', marginLeft: '1em' }}>Browse more projects</h2>
    </div>
    <div style={{ textAlign: 'right', marginRight: '2em' }}>
      <Button1 name="next Project" link={props.link} />
    </div>
  </div>
);

export default Next;
