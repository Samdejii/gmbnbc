import React, { Fragment } from "react";


const Media = () => {
    
  return(
    <Fragment>
    <section>
    {/* Hero Start */}
    <div className="container-fluid hero-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="hero-header-inner animated zoomIn">
                        <p className="fs-4 text-dark  text-uppercase"></p>
                        <h1 className="display-1 mb-5 text-dark">Media</h1>
                        {/*<a href="/404" className="btn btn-primary py-3 px-5">Read More</a>*/}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Hero End */}

    <div className="container-fluid sermon py-5">
        <div className="container py-5">
            <div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s">
                <p className="fs-5 text-uppercase text-primary"></p>
            </div>
            <div className="row g-4 justify-content-center">
                <h5 className="text-center text-uppercase"><em>Home Mission Fields</em></h5>
               <div className="col-lg-3 col-xl-4">
                    <div className="sermon-item wow fadeIn" data-wow-delay="0.3s">
                        <div className="overflow-hidden p-4 pb-0">
                            <img src="assets/img/ai-generated-ga0b3f568f_1920.jpg" className="img-fluid w-100" alt=""/>
                        </div>
                        <div className="p-4">
                            <a href="/404" className="d-inline-block h4 lh-sm mb-3">Download</a>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
            </div>
                <div className="col-lg-3 col-xl-4">
                    <div className="sermon-item wow fadeIn" data-wow-delay="0.1s">
                        <div className="overflow-hidden p-4 pb-0">
                            <img src="assets/img/ai-generated-ga0b3f568f_1920.jpg" className="img-fluid w-100" alt=""/>
                        </div>
                        <div className="p-4">
                            <a href="/404" className="d-inline-block h4 lh-sm mb-3">Gallery</a>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
               <div className="col-lg-3 col-xl-4">
                    <div className="sermon-item wow fadeIn" data-wow-delay="0.3s">
                        <div className="overflow-hidden p-4 pb-0">
                            <img src="assets/img/ai-generated-ga0b3f568f_1920.jpg" className="img-fluid w-100" alt=""/>
                        </div>
                        <div className="p-4">
                            <a href="/404" className="d-inline-block h4 lh-sm mb-3">Articles</a>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
            </div>
                <div className="col-lg-3 col-xl-4">
                    <div className="sermon-item wow fadeIn" data-wow-delay="0.1s">
                        <div className="overflow-hidden p-4 pb-0">
                            <img src="assets/img/ai-generated-ga0b3f568f_1920.jpg" className="img-fluid w-100" alt=""/>
                        </div>
                        <div className="p-4">
                            <a href="/404" className="d-inline-block h4 lh-sm mb-3">Resources</a>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </div>
    </section>
    </Fragment>
  )
}



export default Media;