import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import testimonial from "../../pages/api/testimonials.json";
import styles from "@/styles/generalstyles//colors.module.scss";
import Tstyles from "@/styles/componentstyles/testimonial.module.scss";
import Image from "next/image";
import testimonialCard from "../../public/images/testimonial/testimonialimage.png";

export const TestimonialCard1 = () => {
  return (
    <main className="">
      <Card
        className={`px-4 py-4 mx-auto container border-0 ${styles.ServiceCardBG2} ${Tstyles.TestimonialCardSM}`}
      >
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mt-1">
            <Image
              className={`my-3 ${Tstyles.TcardImage}`}
              src={testimonialCard}
              alt="testimonial image"
            />
          </div>

          <div
            className={`col-lg-10 col-md-10 col-sm-12 col-xs-12   ${Tstyles.imgspacing}`}
          >
            <span className={`${Tstyles.testimonialName}`}>
              Esther blessing
            </span>
            <br />
            <span className={`${Tstyles.testimonialPosition}`}>
              "CEO, Dara Wears
            </span>
          </div>
        </div>
        Lorem ipsum dolor sit amet consectetur. Platea vel feugiat aenean arcu
        purus egestas. Pulvinar nunc sed sed vulputate tortor tristique
        condimentum augue at. Ullamcorper facilisis ut pellentesque nunc. Eget
        eget at quam sit proin enim tincidunt.
      </Card>
    </main>
  );
};

export const TestimonialCard2 = () => {
  return (
    <main className="">
      <Card
        className={`px-4 py-4 mx-auto container  border-0 ${styles.ServiceCardBG} ${Tstyles.TestimonialCardSM}`}
      >
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mt-1">
            <Image
              className={`my-3 ${Tstyles.TcardImage}`}
              src={testimonialCard}
              alt="testimonial image"
            />
          </div>

          <div
            className={`col-lg-10 col-md-10 col-sm-12 col-xs-12   ${Tstyles.imgspacing}`}
          >
            <span className={`${Tstyles.testimonialName}`}>
              Esther blessing
            </span>
            <br />
            <span className={`${Tstyles.testimonialPosition}`}>
              "CEO, Dara Wears
            </span>
          </div>
        </div>
        Lorem ipsum dolor sit amet consectetur. Platea vel feugiat aenean arcu
        purus egestas. Pulvinar nunc sed sed vulputate tortor tristique
        condimentum augue at. Ullamcorper facilisis ut pellentesque nunc. Eget
        eget at quam sit proin enim tincidunt.
      </Card>
    </main>
  );
};

export const TestimonialCard3 = () => {
  return (
    <main className="">
      <Card
        className={`px-4 py-4 mx-auto container  border-0 ${styles.ServiceCardBG} ${Tstyles.TestimonialCardSM}`}
      >
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mt-1">
            <Image
              className={`my-3 ${Tstyles.TcardImage}`}
              src={testimonialCard}
              alt="testimonial image"
            />
          </div>
          <div
            className={`col-lg-10 col-md-10 col-sm-12 col-xs-12   ${Tstyles.imgspacing}`}
          >
            <span className={`${Tstyles.testimonialName}`}>
              Esther blessing
            </span>
            <br />
            <span className={`${Tstyles.testimonialPosition}`}>
              "CEO, Dara Wears
            </span>
          </div>
        </div>
        Lorem ipsum dolor sit amet consectetur. Platea vel feugiat aenean arcu
        purus egestas. Pulvinar nunc sed sed vulputate tortor tristique
        condimentum augue at. Ullamcorper facilisis ut pellentesque nunc. Eget
        eget at quam sit proin enim tincidunt.
      </Card>
    </main>
  );
};

export const TestimonialCard4 = () => {
  return (
    <main className="">
      <Card
        className={`px-4 py-4 mx-auto container  border-0 ${styles.ServiceCardBG2} ${Tstyles.TestimonialCardSM}`}
      >
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mt-1">
            <Image
              className={`my-3 ${Tstyles.TcardImage}`}
              src={testimonialCard}
              alt="testimonial image"
            />
          </div>

          <div
            className={`col-lg-10 col-md-10 col-sm-12 col-xs-12   ${Tstyles.imgspacing}`}
          >
            <span className={`${Tstyles.testimonialName}`}>
              Esther blessing
            </span>
            <br />
            <span className={`${Tstyles.testimonialPosition}`}>
              "CEO, Dara Wears
            </span>
          </div>
        </div>
        Lorem ipsum dolor sit amet consectetur. Platea vel feugiat aenean arcu
        purus egestas. Pulvinar nunc sed sed vulputate tortor tristique
        condimentum augue at. Ullamcorper facilisis ut pellentesque nunc. Eget
        eget at quam sit proin enim tincidunt.
      </Card>
    </main>
  );
};
export const SingleTestimonialCard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col- xs-12 my-3 ">
          <TestimonialCard1 />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col- xs-12 my-3 ">
          {" "}
          <TestimonialCard2 />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col- xs-12 my-3 ">
          {" "}
          <TestimonialCard3 />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col- xs-12 my-3 ">
          {" "}
          <TestimonialCard4 />
        </div>
      </div>
    </div>
  );
};

// interface ITestimonial {
//   Id: number;
//   Images: string;
//   Name: string;
//   Position: string;
//   text: string;
// }

// export const TestimonialCard = (props: ITestimonial) => {
//   const { Images, Name, Position, text } = props;
//   return (
//     <main className="">
//       <Card
//         className={`px-4 py-4 mx-auto container ${styles.ServiceCardBG} ${Tstyles.TestimonialCardSM}`}
//       >
//         <div className="row">
//           <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
//             <Card.Img
//               className={`ms-2 mt-3 ${Tstyles.TcardImage}`}
//               src={Images}
//               style={{ width: "3rem" }}
//             />
//           </div>

//           <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mt-3">
//             <span className={`${Tstyles.testimonialName}`}>{Name}</span>
//             <br />
//             <span className={`${Tstyles.testimonialPosition}`}>{Position}</span>
//           </div>
//         </div>
//         {text}
//       </Card>
//     </main>
//   );
// };

// export const SingleTestimonialCard = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         {testimonial.testimonialDetails.map((items) => {
//           return (
//             <>
//               <div
//                 className="col-lg-6 col-md-6 col-sm-12 col- xs-12 my-3 "
//                 key={items.Id}
//               >
//                 <TestimonialCard {...items} />
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

//  className = "col-lg-6 col-md-6 col-sm-12 col- xs-12 my-3 ";
