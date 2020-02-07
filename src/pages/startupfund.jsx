import React from "react"
import Helmet from "react-helmet"
import Footer from "../components/Footer/Footer"
import config from "../../config/SiteConfig"
import Project15 from "../components/Project15-Fund/Project15"
import MainLayout from "../components/layouts"

const Blog = () => (
  <MainLayout>
    <Helmet title={`Swiss Startup Fund | ${config.siteTitle}`} />
    <Project15 />
    <Footer />
  </MainLayout>
)

export default Blog
