import React from "react"
import Helmet from "react-helmet"
import Footer from "../components/Footer/Footer"
import config from "../../config/SiteConfig"
import Project4 from "../components/Project4-CampBay/Project4"
import MainLayout from "../components/layouts"

const Blog = () => (
  <MainLayout>
    <Helmet title={`Camp Bay Lodge | ${config.siteTitle}`} />
    <Project4 />
    <Footer />
  </MainLayout>
)

export default Blog
