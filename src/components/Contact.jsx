import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="black-sec"></div>
      <div id="contact-sec">
        <div className="mapFrame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35231269928!2d88.26495107213475!3d22.535406374569405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1696267691011!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="inputFields">
          <div className="contact-form">
            <form action="#" method="POST" className="contact-inputs">
              <input
                type="text"
                name="username"
                placeholder="Name"
                autoComplete="off"
                required
              />
              <input
                type="text"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <textarea
                type="text"
                name="message"
                placeholder="Your Message here"
                cols="20"
                rows="6"
                autoComplete="off"
                required
              ></textarea>
              <div className="btn-section">
                <button type="button" className="btn">
                  Connect
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
