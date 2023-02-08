import React from "react";
import contactStyle from "@/styles/componentstyles/contactUs.module.scss";
import styles from "@/styles/generalstyles/colors.module.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SubmitButton } from "./buttons";

export const ContactUs = () => {
  return (
    <>
      <div
        className={`container-fluid  mx-auto ${styles.pryColor}  ${contactStyle.contactSection}`}
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
      <div className="col-lg-7 col-md-7 col-sm-12 mx-auto">
        <Form className={`bg-white p-3 ${contactStyle.formstyle}`}>
          <div className={`mb-3`}>
            <p className={``}>Name:</p>
            <input
              type="email"
              className={`form-control  ${contactStyle.inputstyle}`}
              id="exampleInputEmail1"
            />
          </div>
          <Form.Group className="mb-3">
            <p>Email:</p>
            <input
              type="email"
              className={`form-control  ${contactStyle.inputstyle}`}
              id="exampleInputEmail1"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Pricing Option</Form.Label>
            <Form.Select
              id="disabledSelect"
              className={`form-control  ${contactStyle.inputstyle}`}
            >
              <option value="1">Classic</option>
              <option value="2">Advanced</option>
              <option value="3">Premium</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <p>Message:</p>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Message"
              rows={3}
            ></textarea>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button type="submit">submit</Button>
            {/* <SubmitButton /> */}
          </div>
        </Form>
      </div>
    </>
  );
};
