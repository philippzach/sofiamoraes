import React from 'react';
import Link from 'gatsby-link';
import styles from './Blog.module.scss';
import Container from '../../Container/Container';
import Post from './Post/Post';

const Blog = () => (
  <div className={styles.background}>
    <Container>
      <div className={styles.fullflex}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h3>My blog and news</h3>
            <h2 style={{ marginBottom: 0 }}>
              <b>Get inspired :)</b>
            </h2>
          </div>
        </div>
        <div className={styles.posts}>
          <a href="https://medium.com/@sofimoraes.m/freedom-of-being-f428e8944728" className={styles.blogpost}>
            <Post
              title="Freedom of Being"
              date="04. August 18"
              link="https://medium.com/@sofimoraes.m/freedom-of-being-f428e8944728"
            />
          </a>
          <a href="https://medium.com/@sofimoraes.m/physics-in-wonderland-4433e8d3da18" className={styles.blogpost}>
            <Post
              title="Physics in Wonderland"
              date="24. July 18"
              link="https://medium.com/@sofimoraes.m/physics-in-wonderland-4433e8d3da18"
            />
          </a>
          <a href="https://medium.com/@sofimoraes.m/us-vs-them-3a6ec1cef66b" className={styles.blogpost}>
            <Post
              title="Us vs. Them"
              date="11. July 18"
              link="https://medium.com/@sofimoraes.m/us-vs-them-3a6ec1cef66b"
            />
          </a>
        </div>
      </div>
    </Container>
  </div>
);

export default Blog;
