import React from "react";

const Contact = () => {
  return (
    <>
    <div className="my-5">
      <h1 className="top-heading-section mt-5 mb-4">
        <span>Need Help </span>
      </h1>
      <p className="contact-para mb-5">
        Can’t find the answers you are looking for? Please <br /> get in touch with
        us/contact us
      </p>
      <div className="d-flex justify-content-center">
        <div>
          <div className="contact-boxx">
            <div>
              <i className="far fa-phone-volume"></i>
            </div>
            <div>
              <h6>Contact Us</h6>
              <p>1800-266-0123</p>
            </div>
          </div>
          <div className="contact-boxx">
            <div>
              <i className="fal fa-envelope"></i>
            </div>
            <div>
              <h6>Email Us</h6>
              <p>scottshoot@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
