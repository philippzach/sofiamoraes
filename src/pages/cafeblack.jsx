import React from "react"
import Helmet from "react-helmet"
import Footer from "../components/Footer/Footer"
import config from "../../config/SiteConfig"
import Project11 from "../components/Project11-Cafeblack/Project11"
import MainLayout from "../components/layouts"

const Blog = () => (
  <MainLayout>
    <Helmet title={`Cafe Bar Black1966 | ${config.siteTitle}`} />
    <Project11 />
    <Footer />
  </MainLayout>
)

export default Blog
