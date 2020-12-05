import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Bizarre ce nom de recette ... On dirait que la page n'existe pas</p>
  </Layout>
)

export default NotFoundPage
