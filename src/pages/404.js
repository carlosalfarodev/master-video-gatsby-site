import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <header className={styles.error}>
      <Banner
        title="NOT FOUND"
        info="You just hit a route that doesn&#39;t exist... the sadness."
      >
        <Link to="/" className="btn-white">
          back to home page
        </Link>
      </Banner>
    </header>
  </Layout>
)

export default NotFoundPage
