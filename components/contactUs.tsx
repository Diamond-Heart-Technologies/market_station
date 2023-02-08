import React from "react";
import contactStyle from "@/styles/componentstyles/contactUs.module.scss";
import styles from "@/styles/generalstyles/colors.module.scss";

export const ContactUs = () => {
  return (
    <>
      <div
        className={` container-fluid  ${styles.pryColor}  ${contactStyle.contactSection}`}
      >
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center align-self-center">
            <h3 className={` ${styles.secColor}`}>Get in touch</h3>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

const ContactForm = () => {
  return (
    <>
      <div className="col-lg-7 col-md-7 col-sm-12">
        <form className={`bg-white p-3 ${contactStyle.formstyle}`}>
          <div className="mb-3">
            <p>Name:</p>
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <p>Email:</p>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <p>Pricing option:</p>
            <input
              type="pricing"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <p>Message:</p>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Message"
              rows={3}
            ></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <div className={` ${contactStyle}`}>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
