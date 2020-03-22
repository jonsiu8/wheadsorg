import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'

class wo286ge8 extends React.Component {
    render() {
        const siteTitle = "Wealthyheads";

        return (
            <Layout>
                <Helmet title={siteTitle} />
                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>IMG Membership Orientation</h2>
                            </header>
                        </div>
                        <div className="col-6">
                            {/* <span className="image fit"><img src={pic01} alt="" /></span> */}
                            <smartvideo 
                                src="https://filedn.com/lXcp1DYmRijpixduwqHOKqS/wheadsorg/jdlp2.mp4" 
                                width="1280" 
                                height="720"
                                class="swarm-fluid" controls>
                            </smartvideo>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default wo286ge8;