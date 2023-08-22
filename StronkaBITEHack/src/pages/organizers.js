import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Organizers = () => (
  <Layout>
    <h1>Organizatorzy</h1>
    <p>Nasz CT</p>
    <Link to="/">O projekcie</Link>
  </Layout>
)

export const Head = () => <Seo title="Organizatorzy" />

export default Organizers
