import React from "react"
import Helmet from "react-helmet"
import Footer from "../components/Footer/Footer"
import config from "../../config/SiteConfig"
import Project3 from "../components/Project3-Nomad/Project3"
import MainLayout from "../components/layouts"

const Blog = () => (
  <MainLayout>
    <Helmet title={`Nomad Yoga | ${config.siteTitle}`} />
    <Project3 />
    <Footer />
  </MainLayout>
)

export default Blog
