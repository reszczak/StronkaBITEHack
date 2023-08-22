import React from 'react';
import '../styles/global.css';
import Layout from "../components/layout";
import Seo from "../components/seo";

const HomePage = () => {
    return (
        <div>
            <Layout>
                <h1>Witaj na stronie!</h1>
                <p>Tutaj będą informacje.</p>
            </Layout>
        </div>
    );
};

export const Head = () => <Seo title="O projekcie" />

export default HomePage;