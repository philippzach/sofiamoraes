import React from "react"
import Helmet from "react-helmet"
import Footer from "../components/Footer/Footer"
import config from "../../config/SiteConfig"
import Project8 from "../components/Project8-Wohlgensinger/Project8"
import MainLayout from "../components/layouts"

const Blog = () => (
  <MainLayout>
    <Helmet title={`Wohlgensinger AG | ${config.siteTitle}`} />
    <Project8 />
    <Footer />
  </MainLayout>
)

export default Blog
