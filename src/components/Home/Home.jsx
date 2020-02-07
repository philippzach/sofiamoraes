import React from "react"
import Random from "./Random/Random_new"
import Explanation from "./Explanation/Explanation"
import Container from "../Container/Container"
import Blog from "../Home/Blog/Blog"
import Projects from "./Projects/Projects"

const Home = () => (
  <div>
    <Container>
      <Random />
    </Container>
    <Explanation />
    <Projects />
    <Blog />
  </div>
)

export default Home
