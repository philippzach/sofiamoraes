import React from "react"
import Helmet from "react-helmet"
import config from "../../config/SiteConfig"
// import ProjectListing from '../components/ProjectListing/ProjectListing';
import Footer from "../components/Footer/Footer"
import Home from "../components/Home/Home"
import Layout from "../components/layouts/index"

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container index-container">
          <Helmet>
            <title>{config.siteTitle}</title>
          </Helmet>
          <Home />

          <Footer />
        </div>
      </Layout>
    )
  }
}

export default Index
