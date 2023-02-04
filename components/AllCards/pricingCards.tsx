import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PricingInfo from "../../pages/api/pricing.json";
import styles from "@/styles/generalstyles//colors.module.scss";
import pricingstyles from "@/styles/componentstyles/pricingCards.module.scss";

interface Ipricing {
  Images: string;
  Title: string;
  Text: string;
  Id: number;
  Price: number;
  list1: string;
  list2: string;
  list3: string;
  list4: string;
  list5: string;
  list6: string;
  list7: string;
  list8: string;
  list9: string;
}

export const PricingCard = (props: Ipricing) => {
  const {
    Images,
    Title,
    Text,
    Price,
    list1,
    list2,
    list3,
    list4,
    list5,
    list6,
    list7,
    list8,
    list9,
  } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Title className={`text-center fw-bold  ${styles.textColorWB}`}>
          {Title}
        </Card.Title>
        <Card.Text className={`text-center   ${styles.textColorWB}`}>
          {Text}
        </Card.Text>
        <div className={`text-center  ${styles.pryTextColor}`}>
          <div className="row text-start">
            <div className={`col-6 text-end  ${pricingstyles.priceStyling2}`}>
              {Price}
            </div>
            <div className="col-6 d-grid mt-1">
              <span className={`${pricingstyles.priceStyling1}`}>$</span>

              <span className={`${pricingstyles.priceStyling1}`}>
                Per Month
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <ul className="mt-2 ">
            <li className="d-flex">
              <Card.Img
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                src={Images}
              />
              {list1}
            </li>
            <li className="d-flex">
              <Card.Img
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                src={Images}
              />
              {list2}
            </li>
            <li className="d-flex">
              <Card.Img
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                src={Images}
              />
              {list3}
            </li>

            <li className="d-flex">
              <Card.Img
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                src={Images}
              />
              {list4}
            </li>
            <li className="d-flex">
              <Card.Img
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                src={Images}
              />
              {list5}
            </li>
            <li className="d-flex">
              <Card.Img
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                src={Images}
              />
              {list6}
            </li>
            <li className="d-flex">
              <Card.Img
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                src={Images}
              />
              {list7}
            </li>
            <li className="d-flex">
              <Card.Img
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                src={Images}
              />
              {list8}
            </li>
            <li className="d-flex">
              <Card.Img
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                src={Images}
              />
              {list9}
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

export const SinglePricingCard = () => {
  return (
    <div className="container-fluid  ">
      <div className="   row d-flex justify-content-center">
        {PricingInfo.pricing.map((items) => {
          return (
            <>
              <div
                className="col-lg-3 col-md-3 col-sm-12 col- xs-12 text-wrap mx-4 my-2"
                key={items.Id}
              >
                <PricingCard {...items} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
