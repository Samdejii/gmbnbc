import React, { Fragment } from "react";


const Header = () => {
  return(
    <Fragment>
{/* Hero Start */}
        <div className="container-fluid hero-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="hero-header-inner animated zoomIn">
                            <p className="fs-4 text-dark">WELCOME TO GLOBAL MISSIONS BOARD</p>
                            <h1 className="display-1 mb-5 text-dark">Make Disciples of ALL NATIONS</h1>
                            {/*<a href="/404" className="btn btn-primary py-3 px-5">Read More</a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Hero End */}

        </Fragment>
  )
}


export default Header;