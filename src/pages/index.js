import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Dots from "../components/Dots"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Dots />
  </Layout>
)

export default IndexPage
