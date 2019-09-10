import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { FaVideo } from "react-icons/fa"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SimpleHero>
      <Banner title="MASTER VIDEO" info="Tu mejor imagen!">
        <Link to="/contact" className="btn-white">
          get a free quote
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)

export default IndexPage
