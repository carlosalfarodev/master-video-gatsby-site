import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner title="MASTER VIDEO" info="Tu mejor imagen!">
        <Link to="/contact" className="btn-white">
          get a free quote
        </Link>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
