import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import testimonial from "../../pages/api/testimonials.json";
import styles from "@/styles/generalstyles//colors.module.scss";
import Tstyles from "@/styles/componentstyles/testimonial.module.scss";

interface ITestimonial {
  Id: number;
  Images: string;
  Name: string;
  Position: string;
  text: string;
}

export const TestimonialCard = (props: ITestimonial) => {
  const { Images, Name, Position, text } = props;
  return (
    <main className="">
      <Card
        className={`px-4 py-4 mx-auto  ${styles.ServiceCardBG}   ${Tstyles.TestimonialCardSM}`}
      >
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <Card.Img
              className={`ms-2 mt-3  ${Tstyles.TcardImage}`}
              src={Images}
              style={{ width: " 3rem" }}
            />
          </div>

          <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mt-3">
            <span className={`  ${Tstyles.testimonialName}`}>{Name}</span>
            <br />
            <span className={`  ${Tstyles.testimonialPosition}`}>
              {Position}
            </span>
          </div>
        </div>
        {text}
      </Card>
    </main>
  );
};

export const SingleTestimonialCard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {testimonial.testimonialDetails.map((items) => {
          return (
            <>
              <div
                className="col-lg-6 col-md-6 col-sm-12 col- xs-12 my-3 "
                key={items.Id}
              >
                <TestimonialCard {...items} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
