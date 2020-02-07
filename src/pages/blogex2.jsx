import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Blog2 from '../components/Blog2/Blog2';

const Blog = () => (
  <div>
    <Helmet title={`Random Blog Title | ${config.siteTitle}`} />
    <Blog2 />
    <Footer />
  </div>
);

export default Blog;