import React from 'react';
import styles from './Post.module.scss';
import Button from '../../../Buttons/ButtonOutgoing2/Button1';

const Post = props => (
  <div className={styles.blogpost}>
    <div className={styles.date}>{props.date}</div>
    <h3 className={styles.title}>{props.title}</h3>
    <div>
      <div className={styles.mobilelink}>
        <Button name="Read more" link={props.link} />
      </div>
    </div>
  </div>
);

export default Post;
