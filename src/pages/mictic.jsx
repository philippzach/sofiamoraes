import React from "react"
import Helmet from "react-helmet"
import Footer from "../components/Footer/Footer"
import config from "../../config/SiteConfig"
import Project12 from "../components/Project12-Mictic/Project12"
import MainLayout from "../components/layouts"

const Blog = () => (
  <MainLayout>
    <Helmet title={`Mictic | ${config.siteTitle}`} />
    <Project12 />
    <Footer />
  </MainLayout>
)

export default Blog
