import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import Blog1 from '../components/Blog1/Blog1';

const Blog = () => (
  <div>
    <Helmet title={`Random Blog Title | ${config.siteTitle}`} />
    <Blog1 />
    <Footer />
  </div>
);

export default Blog;
