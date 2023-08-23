import * as React from "react"
import Seo from "../components/seo"
import Header from "../components/header";

const Regulations = () => (
        <div>
            <Header/>
            <div>
                <h1>Regulamin</h1>
                <p>1. Szanujemy Rafona</p>
            </div>
        </div>
)

export const Head = () => <Seo title="Regulations" />

export default Regulations
