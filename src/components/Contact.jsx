import React, { Fragment } from "react";


const Contact = () => {
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
                        <h1 className="display-1 mb-5 text-dark">Contact</h1>
                        {/*<a href="/404" className="btn btn-primary py-3 px-5">Read More</a>*/}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Hero End */}



    <div className="container-fluid contact py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s" >
                    <p className="fs-5 text-uppercase text-primary">Get In Touch</p>
                    <h1 className="display-3">Get in Touch with us</h1>
                    {/*<p className="mb-0">The contact form is currently inactive. Get a functional 
                    and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files,
                    add a little code and you're done. <a href="https://htmlcodex.com/contact-form">
                    Download Now</a>.</p>*/}
                </div>
                <div className="row g-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="col-sm-6">
                        <input type="text" className="form-control bg-transparent p-3" placeholder="Your Name"/>
                    </div>
                    <div className="col-sm-6">
                        <input type="email" className="form-control bg-transparent p-3" placeholder="Your Email"/>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control bg-transparent p-3" placeholder="Subject"/>
                    </div>
                    <div className="col-12">
                        <textarea className="w-100 form-control bg-transparent p-3" rows="6" cols="10" placeholder="Your Message"></textarea>
                    </div>
                    <div className="col-12 text-center">
                        <button className="btn btn-primary border-0 py-3 px-5" type="button">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    


        </section>
    </Fragment>
  )
}


export default Contact;