import React from "react"
import Helmet from "react-helmet"
import Footer from "../components/Footer/Footer"
import config from "../../config/SiteConfig"
import Project13 from "../components/Project13-Hangry/Project13"
import MainLayout from "../components/layouts"

const Blog = () => (
  <MainLayout>
    <Helmet title={`Hangry | ${config.siteTitle}`} />
    <Project13 />
    <Footer />
  </MainLayout>
)

export default Blog
