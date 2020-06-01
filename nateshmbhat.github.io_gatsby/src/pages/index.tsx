import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
   <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <Link to="/projects/projects">projects</Link>
    <br/>
    <Link to="/education/education">education</Link>
    <br/>
    <Link to="/homepage/homepage">homepage</Link>
    <br/>
    <Link to="/achievements/achievements">achievements</Link>
    <br/>
  </Layout>
)

export default IndexPage
