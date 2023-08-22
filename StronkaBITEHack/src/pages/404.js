import * as React from "react"
import rafon404 from "../images/rafon404.jpg"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1>404: Nie znaleziono</h1>
    <p><img src={rafon404} alt={"Rafon404"} /></p>
  </Layout>
)

export const Head = () => <Seo title="404: Nie znaleziono" />

export default NotFoundPage
