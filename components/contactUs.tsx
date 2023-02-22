import React from "react";
import { useState } from "react";
import contactStyle from "@/styles/componentstyles/contactUs.module.scss";
import styles from "@/styles/generalstyles/colors.module.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SubmitButton } from "./buttons";

export const ContactUs = () => {
  return (
    <>
      <div
        className={`container mx-auto ${styles.pryColor}  ${contactStyle.contactSection}`}
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

// const ContactForm = () => {
//   return (
//     <>
//       <div className="col-lg-7 col-md-7 col-sm-12 mx-auto">
//         <Form className={`bg-white p-3 ${contactStyle.formstyle}`}>
//           <div className={`mb-3`}>
//             <p className={``}>Name:</p>
//             <input
//               type="email"
//               className={`form-control ${contactStyle.inputstyle}`}
//               id="exampleInputEmail1"
//             />
//           </div>
//           <Form.Group className="mb-3">
//             <p>Email:</p>
//             <input
//               type="email"
//               className={`form-control ${contactStyle.inputstyle}`}
//               id="exampleInputEmail1"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label htmlFor="disabledSelect">Pricing Option</Form.Label>
//             <Form.Select
//               id="disabledSelect"
//               className={`form-control ${contactStyle.inputstyle}`}>
//               <option value="1">Classic</option>
//               <option value="2">Advanced</option>
//               <option value="3">Premium</option>
//             </Form.Select>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <p>Message:</p>
//             <textarea
//               className="form-control"
//               id="exampleFormControlTextarea1"
//               placeholder="Message"
//               rows={3}></textarea>
//           </Form.Group>
//           <div className="d-flex justify-content-center">
//             {/* <Button type="submit">submit</Button> */}
//             <SubmitButton />
//           </div>
//         </Form>
//       </div>
//     </>
//   );
// };

interface Product {
  Name: string;
  Email: string;
  PricingOption: string;
  Message: string;
}

const ContactForm = () => {
  const [person, setPerson] = useState({
    Name: "",
    Email: "",
    PricingOption: "",
    Message: "",
  });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.Name && person.Email && person.PricingOption && person.Message) {
      const newPerson = { ...person };
      setPeople([...people, newPerson]);
      setPerson({ Name: "", Email: "", PricingOption: "", Message: "" });
    }
  };
  return (
    <>
      <article className="form">
        <form>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.Name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.Email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.PricingOption}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>
      <article>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

// interface Product {
//   Name: string;
//   Email: string;
//   PricingOption: string;
//   Message: string;
// }

// const ContactForm = (props: Product) => {
//   const [Name, setName] = useState("");
//   const [Email, setEmail] = useState("");
//   const [PricingOption, setPricingOption] = useState("");
//   const [Message, setMessage] = useState("");
//   const [people, setPeople] = useState([]);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (Name && Email && PricingOption && Message) {
//       const person = {
//         id: new Date().getTime().toString(),
//         Name,
//         Email,
//         PricingOption,
//         Message,
//       };
//       console.log(person);
//       setPeople((people) => {
//         return [...people, person];
//       });
//       setName("");
//       setEmail("");
//       setPricingOption("");
//       setMessage("");
//     } else {
//       console.log("empty values");
//     }
//   };
//   return (
//     <>
//       <article>
//         <form className="form" onSubmit={handleSubmit}>
//           <div className="form-control">
//             <label htmlFor="firstName">Name : </label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </div>
//           <div className="form-control">
//             <label htmlFor="email">Email : </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <button type="submit">add person</button>
//         </form>
//         {people.map((person, index) => {
//           const { id, firstName, email } = person;
//           return (
//             <div className="item" key={id}>
//               <h4>{firstName}</h4>
//               <p>{email}</p>
//             </div>
//           );
//         })}
//       </article>
//     </>
//   );
// };
