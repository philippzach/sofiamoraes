import React from "react"
import Helmet from "react-helmet"
import Container from "../components/Container/Container"
import Footer from "../components/Footer/Footer"
import config from "../../config/SiteConfig"
import Hireme from "../components/Hireme/Hireme"
import Layout from "../components/layouts/index"

const Contact = () => (
  <Layout>
    <div className="container contact-container">
      <Helmet title={`Hire me for a few hours | ${config.siteTitle}`} />
      <Container>
        <Hireme />
      </Container>
      <Footer />
    </div>
  </Layout>
)

export default Contact
