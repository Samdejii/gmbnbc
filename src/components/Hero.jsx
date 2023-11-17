import React, { Fragment } from "react";


const Hero = () => {
  return(
    <Fragment>
{/* Hero Start */}
        <div className="container-fluid hero-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="hero-header-inner animated zoomIn">
                            <p className="fs-4 text-dark"> WELCOME TO GLOBAL MISSIONS BOARD </p>
                            <h1 className="display-1 mb-5 text-dark">Make Disciples of ALL NATIONS</h1>
                            {/*<a href="/404" className="btn btn-primary py-3 px-5">Read More</a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Hero End */}


        <div className="container-fluid about py-5">
            <div className="container py-5 ">
                <div className="row g-5 mb-5">
                    <div className="col-xl-6">
                        <div className="row g-4">
                            <div className="col-8 mt-5">
                                <img src="assets/img/WhatsApp-Image-2021-04-13-at-1.33.17-PM.jpeg" className="img-fluid h-60 wow zoomIn" data-wow-delay="0.1s" alt=""/>
                                <p className="text-center mt-2 fs-5" data-wow-delay="0.1s" ><b>Rev. Dr Femi Adewumi </b><br/>Director, Global Missions Board (NBC)</p>
                            </div>
                           <div className="col-4 pt-4 mt-5">
                                <img src="assets/img/hands-1917895_1280.png" className="img-fluid pb-3 wow zoomIn" data-wow-delay="0.1s" alt=""/><br/><br/>
                                <img src="assets/img/larm-rmah-AEaTUnvneik-unsplash.jpg" className="img-fluid pt-3 wow zoomIn" data-wow-delay="0.1s" alt=""/><br/><br/>
                                <img src="assets/img/thomas-schutze-6j4UjzyDtBk-unsplash.jpg" className="img-fluid pt-3 wow zoomIn" data-wow-delay="0.1s" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeIn" data-wow-delay="0.5s">
                        <p className="fs-5 text-uppercase text-primary">About Global Missions Board</p>
                        <h1 className="display-5 pb-4 m-0">Some Text</h1>
                        <p className="pb-4">For more than 65 years, Global Missions Board (GMB) has been saddled with the responsibilities of mobilizing, 
                        engaging and deploying Missionaries, to various mission fields at home and abroad where there are the unreached, unengaged and 
                        less-reached People Groups for the singular purpose of reaching them with the true Gospel of Christ. Global Missions Board is committed 
                        to working with the Nigerian Baptist Churches and other Great Commission lovers to achieve this singular purpose through the enabling grace 
                        of Christ by the power of the Holy Spirit. Fellow partners with God of Missions through Global Missions Board of our great Nigerian Baptist Convention.
                         We thank God for your unalloyed sacrifices and your undiluted passion to ensure that everyone have the opportunity of responding to the love of our 
                         Lord and Saviour Jesus Christ. This we must continue to do together until all heard about Him.</p>
                        <div className="row g-4 mb-4">
                            <div className="col-md-12">
                                <div className="ps-3 d-flex align-items-center justify-content-start">
                                    <span className="bg-primary btn-md-square rounded-circle mt-4 me-2"><i className="fa fa-eye text-dark fa-4x mb-5 pb-2"></i></span>
                                    <div className="ms-4">
                                        <h5>Our Vision</h5>
                                        <p>Reaching all nations for Christ. (Matthew 28: 19a; Matthew 24: 14)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="ps-3 d-flex align-items-center justify-content-start">
                                    <span className="bg-primary btn-md-square rounded-circle mt-4 me-2"><i className="fa fa-flag text-dark fa-4x mb-5 pb-2"></i></span>
                                    <div className="ms-4">
                                        <h5>Our Mission</h5>
                                        <p>Advancing the Great Commission to all Nations through the Nigerian Baptist Convention by networking with 
                                        other Great Commission Christian, such that all nations might come to the saving, worshipping and serving faith in Jesus Christ.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       {/* <div className="bg-light p-3 mb-4">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-3">
                                    <img src="img/about-child.jpg" className="img-fluid rounded-circle" alt=""/>
                                </div>
                                <div className="col-6">
                                    <p className="mb-0">Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam. Etiam quis mauris justo.</p>
                                </div>
                                <div className="col-3">
                                        <h2 className="mb-0 text-primary text-center">$20,46</h2>
                                        <h5 className="mb-0 text-center">Raised</h5>
                                </div>
                            </div>
                        </div> 
                        <div className="row g-2">
                            <div className="col-md-6">
                                <p className="mb-2"><i className="fa fa-check text-primary me-3"></i>Authority and inerrancy of Scriptures for faith and practice.</p>
                                <p className="mb-0"><i className="fa fa-check text-primary me-3"></i>School of Missions</p>
                            </div>
                            <div className="col-md-6">
                                <p className="mb-2"><i className="fa fa-check text-primary me-3"></i>Evangelism</p>
                                <p className="mb-0"><i className="fa fa-check text-primary me-3"></i>Mission Outreach</p>
                            </div>
                        </div>*/}
                    </div>
                </div><br/>

                    {/*    <div className="container">
                            <div className="row mb-4">
                                <h3 className="text-center">Our Core Values</h3>
                            <div className="col-md-6">
                                <p className="mb-0"><i className="fa fa-check text-primary me-3"></i>Authority and inerrancy of Scriptures for faith and practice.</p>
                                <p className="mb-0"><i className="fa fa-check text-primary me-3"></i>Proclamation of the gospel of Christ that all may hear.</p>
                                <p className="mb-0"><i className="fa fa-check text-primary me-3"></i>Belief in eternal Salvation of the faithfuls in Christ and damnation for the lost, who reject the Gospel message.</p>
                                <p className="mb-0"><i className="fa fa-check text-primary me-3"></i>Congregational system of government.</p>
                                <p className="mb-0"><i className="fa fa-check text-primary me-3"></i>Belief in the triune, indivisible God.</p>
                            </div><br/>
                            
                <div className="col-md-6">
                                <p className="mb-0"><i className="fa fa-check text-primary me-3"></i>Responsible autonomy of every local assembly.</p>
                                <p className="mb-0"><i className="fa fa-check text-primary me-3"></i>Priesthood of all the truly saved.</p>
                                <p className="mb-0"><i className="fa fa-check text-primary me-3"></i>Perseverance, through the power of God, of all the Saints who are truly saved and daily sanctified.</p>
                                <p className="mb-0"><i className="fa fa-check text-primary me-3"></i>Belief and practice of water Baptism as an outward sign of the new birth.</p>
                                <p className="mb-0"><i className="fa fa-check text-primary me-3"></i>Appreciation and promotion of trained leadership.</p>
                            </div><br/>
                            </div>
                        </div>*/}


                
                <div className="container text-center bg-primary py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-2">
                            <i className="fa fa-church fa-5x text-white"></i>
                        </div>
                        <div className="col-lg-7 text-center text-lg-start">
                            <h1 className="mb-0">All Churches Need To Realise The Importance Of &quot;Discipleship&quot; for Missions</h1>
                        </div>
                        <div className="col-lg-3">
                            <a href="/404" className="btn btn-light py-2 px-4">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


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
                                <h4>Church Growth & Mission Summit</h4>
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


        
        <div className="container-fluid event py-5"  style={{backgroundColor: 'whitesmoke'}}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 col-xl-6">
                        <img src="assets/img/11121753_4637195.svg" alt=""
                        className="img-fluid pt-3 wow zoomIn" data-wow-delay="0.1s" style={{width: '400px'}} />
                    </div>
                    <div className="col-lg-6 col-xl-6 px-5 mt-5 ml-5 py-5">
                        <h4>Online Payment</h4>
                        <p>For your Mission Donations and Support </p>
                            <a href="/" className="btn btn-primary px-3">Donate</a>
                    </div>
                </div>
            </div>
        </div>



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
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
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
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                             minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
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
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                             enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
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




        
    </Fragment>
  )
}


export default Hero;