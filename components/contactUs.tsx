import React from "react";
import { useState } from "react";
import contactStyle from "@/styles/componentstyles/contactUs.module.scss";
import styles from "@/styles/generalstyles/colors.module.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SubmitButton } from "./buttons";
import PropTypes from "prop-types";
import { type } from "os";

export const ContactUs = () => {
  return (
    <div
      className={`container ${styles.pryColor}  ${contactStyle.contactSection}`}
    >
      <div className="row">
        <div className="d-md-flex d-lg-flex justify-content-center align-items-center">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <h3 className={`fs-1 ${styles.secColor} text-center`}>
              Get in touch
            </h3>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 mb-4 mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PricingOption, setPricingOption] = useState("");
  const [Message, setMessage] = useState("");
  // const [people, setPeople] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Name && Email && PricingOption && Message) {
      const person = {
        Name,
        Email,
        PricingOption,
        Message,
      };
      console.log(person);

      setName("");
      setEmail("");
      setPricingOption("");
      setMessage("");
    } else {
      window.alert("empty values");
    }
  };
  return (
    <>
      {/* useState FORM STARTS HERE */}

      {/* <div className="col-lg-7 col-md-7 col-sm-12 mx-auto"> */}
      <form
        onSubmit={handleSubmit}
        className={`bg-white p-4 mx-auto ${contactStyle.formstyle}`}
      >
        <div className={`mb-5 mt-3`}>
          <label className={``}>Name:</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className={`form-control ${contactStyle.inputstyle}`}
          />
        </div>

        <div className={`mb-3`}>
          <label className={``}>Email:</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className={`form-control ${contactStyle.inputstyle}`}
          />
        </div>
        <div className="mb-5 mt-5">
          <label htmlFor="disabledSelect" className="mb-3">
            Pricing Option
          </label>
          <select
            placeholder="Pricing Option"
            id="PricingOption"
            name="PricingOption"
            value={PricingOption}
            onChange={(e) => setPricingOption(e.target.value)}
            className={`form-control ${contactStyle.inputstyle} pt-0`}
          >
            <option value="Classic">Classic</option>
            <option value="Advanced">Advanced</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="mb-3">Message:</label>
          <textarea
            id="Message"
            name="Message"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            rows={3}
          ></textarea>
        </div>

        <div className="d-flex justify-content-center pb-2">
          <SubmitButton />
        </div>
      </form>
      {/* </div> */}
      {/* useState FORM ENDS HERE */}

      {/* bootsrap FORM START HERE */}
      {/* <div className="col-lg-7 col-md-7 col-sm-12 mx-auto">
        <Form className={`bg-white p-3 ${contactStyle.formstyle}`}>
          <div className={`mb-3`}>
            <p className={``}>Name:</p>
            <input
              type="email"
              className={`form-control ${contactStyle.inputstyle}`}
              id="exampleInputEmail1"
            />
          </div>
          <Form.Group className="mb-3">
            <p>Email:</p>
            <input
              type="email"
              className={`form-control ${contactStyle.inputstyle}`}
              id="exampleInputEmail1"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Pricing Option</Form.Label>
            <Form.Select
              id="disabledSelect"
              className={`form-control ${contactStyle.inputstyle}`}
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
            <SubmitButton />
          </div>
        </Form>
      </div> */}
      {/* bootstrap FORM ENDS HERE */}
    </>
  );
};
