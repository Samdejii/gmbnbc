import React, { Fragment } from "react";


const Events = () => {
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
                        <h1 className="display-1 mb-5 text-dark">Events</h1>
                        {/*<a href="/404" className="btn btn-primary py-3 px-5">Read More</a>*/}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Hero End */}




        <div className="container-fluid event py-5">
            <div className="container py-5">
                <h1 className="display-3 mb-5 wow fadeIn" data-wow-delay="0.1s">Upcoming <span className="text-primary">Events</span></h1>
                <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.1s">
                    <div className="col-3 col-lg-2 pe-0">
                        <div className="text-center border-bottom border-dark py-3 px-2">
                            <h6>01 Jan 2045</h6>
                           {/* <p className="mb-0">Fri 06:55</p> */}
                        </div>
                    </div>
                    <div className="col-9 col-lg-6 border-start border-dark pb-5">
                        <div className="ms-3">
                            <h4 className="mb-3">Nigerian Baptist Convention 2024</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                            {/*<a href="/404" className="btn btn-primary px-3">Join Now</a>*/}
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="overflow-hidden mb-5">
                            <img src="img/events-1.jpg" className="img-fluid w-100" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.3s">
                    <div className="col-3 col-lg-2 pe-0">
                        <div className="text-center border-bottom border-dark py-3 px-2">
                            <h6>01 Jan 2045</h6>
                           {/* <p className="mb-0">Fri 06:55</p> */}
                        </div>
                    </div>
                    <div className="col-9 col-lg-6 border-start border-dark pb-5">
                        <div className="ms-3">
                            <h4 className="mb-3">Church Growth</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                            {/*<a href="/404" className="btn btn-primary px-3">Join Now</a>*/}
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="overflow-hidden mb-5">
                            <img src="img/events-2.jpg" className="img-fluid w-100" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.5s">
                    <div className="col-3 col-lg-2 pe-0">
                        <div className="text-center border-bottom border-dark py-3 px-2">
                            <h6>01 Jan 2045</h6>
                           {/* <p className="mb-0">Fri 06:55</p> */}
                        </div>
                    </div>
                    <div className="col-9 col-lg-6 border-start border-dark pb-5">
                        <div className="ms-3">
                            <h4 className="mb-3">Teach To Transform 3.0</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
                            {/*<a href="/404" className="btn btn-primary px-3">Join Now</a>*/}
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="overflow-hidden mb-5">
                            <img src="img/events-3.jpg" className="img-fluid w-100" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        </section>
    </Fragment>
  )
}


export default Events;