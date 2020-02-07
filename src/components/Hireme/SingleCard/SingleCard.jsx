import React from 'react';
import styles from './SingleCard.module.scss';

const SingleCard = props => (
  <article className="grow pointer br3 mv3" style={{ boxShadow: '0px 10px 25px 0px rgba(0,0,0,0.20)' }}>
    <div className="tc pa3 pa4-ns br3 br--top" style={{ backgroundColor: '#ffdf59' }}>
      <img
        src={props.image}
        alt="Sofia Moraes Graphic UI UX Designer"
        className={styles.images}
        title="Sofia Moraes Web Graphic Designer"
      />
    </div>
    <div className="tc">
      <h1 className="f3 mb0">
        <b>{props.heading}</b>
      </h1>
      <div>
        <h2 className="f5 fw4 gray mt0 mb0" style={{ fontWeight: '200' }}>
          {props.heading2}
        </h2>
        <div className={styles.linetop} />
        <ul style={{ listStyle: 'none', marginLeft: 0, paddingBottom: '2em' }}>
          {props.list.map(listValue => <li className={styles.items}>{listValue}</li>)}
        </ul>
      </div>
    </div>
  </article>
);

export default SingleCard;
