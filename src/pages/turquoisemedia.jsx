import React from "react"
import Helmet from "react-helmet"
import Footer from "../components/Footer/Footer"
import config from "../../config/SiteConfig"
import Project5 from "../components/Project5-Turquoise/Project5"
import MainLayout from "../components/layouts"

const Blog = () => (
  <MainLayout>
    <Helmet title={`Turquoise Media | ${config.siteTitle}`} />
    <Project5 />
    <Footer />
  </MainLayout>
)

export default Blog
