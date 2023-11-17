import React, { Fragment } from "react";


const Blank = () => {
    
  return(
    <Fragment>
<section>
{/* Hero Start 
<div className="container-fluid hero-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="hero-header-inner animated zoomIn">
                            <p className="fs-4 text-dark"></p>
                            <h1 className="display-1 mb-5 text-dark">Oops!<br/> Page not Found</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                            {/*<a href="/404" className="btn btn-primary py-3 px-5">Read More</a>*/}
        {/* Hero End */}


<div className="container-fluid py-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center py-5 mt-5">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-6">
                        <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">Page Not Found</h1>
                        <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                       {/* <a className="btn btn-primary py-3 px-4" href="/404">Go Back To Home</a>*/}
                    </div>
                </div>
            </div>
        </div>
</section>
    </Fragment>
  )
}


export default Blank;