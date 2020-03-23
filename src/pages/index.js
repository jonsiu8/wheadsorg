import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

class Homepage extends React.Component {
    render() {
        const siteTitle = "Wealthyheads";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>WEALTHYHEADS</h2>
                            </header>
                        </div>
                    </div>
                </section>
                <div>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </div>
            </Layout>
        );
    }
}

export default Homepage;