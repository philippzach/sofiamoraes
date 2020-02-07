import React from "react"
import Random from "./Random/Random"
import Explanation from "./Explanation/Explanation"
import Container from "../Container/Container"
import Blog from "../Home/Blog/Blog"
import Projects from "./Projects/Projects"
import styled from "@emotion/styled"

const CenterCon = styled.div`
  max-width: 85%;
  margin: 0 auto;
`
const Home = () => (
  <div>
    <Container>
      <Random />
    </Container>
    <Explanation />
    <CenterCon>
      <Projects />
    </CenterCon>
    <Blog />
  </div>
)

export default Home
