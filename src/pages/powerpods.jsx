import React from "react"
import Helmet from "react-helmet"
import Footer from "../components/Footer/Footer"
import config from "../../config/SiteConfig"
import Project10 from "../components/Project10-Powerpods/Project10"
import MainLayout from "../components/layouts"

const Blog = () => (
  <MainLayout>
    <Helmet title={`PowerPods | ${config.siteTitle}`} />
    <Project10 />
    <Footer />
  </MainLayout>
)

export default Blog
