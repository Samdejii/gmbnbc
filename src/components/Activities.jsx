import React, { Fragment } from "react";


const Activities = () => {
  return(
    <Fragment>
        <div className="container-fluid activities py-5">
            <div className="container py-5">
                <div className="mx-auto text-center mb-5 wow fadeIn" data-wow-delay="0.1s">
                    <p className="fs-5 text-uppercase text-primary">Activities</p>
                    <h1 className="display-3">Here Are Our Activities</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6 col-xl-4">
                        <div className="activities-item p-4 wow fadeIn" data-wow-delay="0.1s">
                            <i className="fa fa-church fa-4x text-dark"></i>
                            <div className="ms-4">
                                <h4>Church Growth</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam.</p>
                                <a href="/404" className="btn btn-primary px-3">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="activities-item p-4 wow fadeIn" data-wow-delay="0.3s">
                            <i className="fa fa-donate fa-4x text-dark"></i>
                            <div className="ms-4">
                                <h4>Charity & Donation</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam.</p>
                                <a href="/404" className="btn btn-primary px-3">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="activities-item p-4 wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-spinner fa-4x text-dark"></i>
                            <div className="ms-4">
                                <h4>Mobilization</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam.</p>
                                <a href="/404" className="btn btn-primary px-3">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="activities-item p-4 wow fadeIn" data-wow-delay="0.1s">
                            <i className="fa fa-book fa-4x text-dark"></i>
                            <div className="ms-4">
                                <h4>Outreach</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam.</p>
                                <a href="/404" className="btn btn-primary px-3">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="activities-item p-4 wow fadeIn" data-wow-delay="0.3s">
                            <i className="fa fa-book-open fa-4x text-dark"></i>
                            <div className="ms-4">
                                <h4>School of Missions</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam.</p>
                                <a href="/404" className="btn btn-primary px-3">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="activities-item p-4 wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-hands fa-4x text-dark"></i>
                            <div className="ms-4">
                                <h4>Help Orphans</h4>
                                <p className="mb-4">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam.</p>
                                <a href="/404" className="btn btn-primary px-3">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}


export default Activities;