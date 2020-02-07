import React from "react"
import Helmet from "react-helmet"
import Footer from "../components/Footer/Footer"
import config from "../../config/SiteConfig"
import Project6 from "../components/Project6-Quantum/Project6"
import MainLayout from "../components/layouts"

const Blog = () => (
  <MainLayout>
    <Helmet title={`Quantum Peak Coaching | ${config.siteTitle}`} />
    <Project6 />
    <Footer />
  </MainLayout>
)

export default Blog
