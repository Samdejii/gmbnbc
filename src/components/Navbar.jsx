import React, { Fragment } from "react";


const Navbar = () => {
  return(
    <Fragment>
      
      {/* Spinner Start 
        <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div>
        {/* Spinner End */}


        {/* Topbar start */}
        <div className="container-fluid fixed-top">
           <div className="container topbar d-none d-lg-block">
                <div className="topbar-inner">
                    <div className="row gx-0">
                        <div className="col-lg-7 text-start">
                            <div className="h-100 d-inline-flex align-items-center me-4">
                                <span className="fa fa-phone-alt me-2 text-dark"></span>
                                <a href="/" className="text-secondary"><span>+234 80 279 4894</span></a>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center">
                                <span className="far fa-envelope me-2 text-dark"></span>
                                <a href="/404" className="text-secondary"><span>https://www.globalmissions@gmail.com</span></a>
                            </div>
                        </div>
                        <div className="col-lg-5 text-end">
                            <div className="h-100 d-inline-flex align-items-center">
                                <span className="text-body">Follow Us:</span>
                                <a className="text-dark px-2" href="https://www.facebook.com/globalmissions.board.75">
                                    <i className="fab fa-facebook-f"></i></a>
                                <a className="text-dark px-2" href="https://twitter.com/GMBmissions">
                                    <i className="fab fa-twitter"></i></a>
                                <a className="text-dark px-2" href="https://www.instagram.com/gmbnbcmissions/">
                                    <i className="fab fa-instagram"></i></a>
                                {/*<a className="text-dark px-2" href="/"><i className="fab fa-linkedin-in"></i></a>
                                <a className="text-body ps-4" href="/404"><i className="fa fa-lock text-dark me-1"></i> Signup/login</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="container">
                <nav className="navbar navbar-light navbar-expand-lg py-3">
                    <a href="/" className="navbar-brand">
                        <img src="assets/img/gmb-header-1.png" alt="GMB Logo" width="200px" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div className="navbar-nav ms-lg-auto mx-xl-auto">
                            <a href="/" className="nav-item nav-link">Home</a>

                            <div className="nav-item dropdown">
                                <a href="about.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">About Us</a>
                                <div className="dropdown-menu m-0 rounded-0">
                                    <a href="/history" className="dropdown-item">History</a>
                                    <a href="/board" className="dropdown-item">Board Members</a>
                                    <a href="/management" className="dropdown-item">Management</a>
                                    <a href="/home_missionaries" className="dropdown-item">Our Missionaries</a>
                                    <a href="https://www.nigerianbaptist.org/" className="dropdown-item">Nigerian Baptist Convention</a>
                                </div>
                            </div>


                            <div className="nav-item dropdown">
                                <a href="sermon.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Ministries</a>
                                <div className="dropdown-menu m-0 rounded-0">
                                        <a href="/hfm" className="dropdown-item">Home Frontier Missions</a>
                                        <a href="/sfm" className="dropdown-item">Specialised Frontier Missions</a>
                                    <a href="/tmr" className="dropdown-item">Training Media and Research</a>
                                    <a href="/hr" className="dropdown-item">Establishment and Human Resources</a>
                                    <a href="/404" className="dropdown-item">Finance</a>
                                </div>
                            </div>

                            <a href="/training" className="nav-item nav-link">Training</a>

                            
                            <a href="/media" className="nav-item nav-link">Media</a>


                            <a href="/404" className="nav-item nav-link">Join</a>


                           
                            <a href="/events" className="nav-item nav-link">Events</a>


                            <a href="/contact" className="nav-item nav-link">Contact</a>

                        </div>
                        <a href="/" className="btn btn-primary py-2 px-4 d-none d-xl-inline-block">Donate</a>
                    </div>
                </nav>
            </div>
        </div>
        {/* Topbar End */}
    </Fragment>
  )
}


export default Navbar;