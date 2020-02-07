import React from "react"
import Helmet from "react-helmet"
import Footer from "../components/Footer/Footer"
import config from "../../config/SiteConfig"
import Project7 from "../components/Project7-Mandalita/Project7"
import MainLayout from "../components/layouts"

const Blog = () => (
  <MainLayout>
    <Helmet title={`Mandalita | ${config.siteTitle}`} />
    <Project7 />
    <Footer />
  </MainLayout>
)

export default Blog
