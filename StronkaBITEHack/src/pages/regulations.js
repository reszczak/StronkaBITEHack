import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Regulations = () => (
  <Layout>
    <h1>Regulamin</h1>
    <p>1. Szanujemy Rafona</p>
    <Link to="/">O projekcie</Link>
  </Layout>
)

export const Head = () => <Seo title="Regulations" />

export default Regulations
