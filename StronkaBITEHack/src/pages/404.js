import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Nie znaleziono</h1>
  </Layout>
)

export const Head = () => <Seo title="404: Nie znaleziono" />

export default NotFoundPage
