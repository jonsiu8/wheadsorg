import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

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
                            <span>
                                <smartvideo 
                                    src="https://filedn.com/lXcp1DYmRijpixduwqHOKqS/wheadsorg/jdlp2.mp4" 
                                    width="1280" 
                                    height="720"
                                    poster="https://filedn.com/lXcp1DYmRijpixduwqHOKqS/wheadsorg/cover%20mo.jpg"                                    
                                    class="swarm-fluid" controls>
                                </smartvideo>
                            </span>
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

export default wo286ge8;