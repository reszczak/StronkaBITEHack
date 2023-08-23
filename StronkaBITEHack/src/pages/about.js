import * as React from "react"
import Seo from "../components/seo"
import Header from "../components/header";
const About = () => (
            <div>
                <Header/>
                <div>
                    <h1>O projekcie</h1>
                    <p>Hackaton</p>
                </div>
            </div>
)

export const Head = () => <Seo title="O projekcie" />

export default About
