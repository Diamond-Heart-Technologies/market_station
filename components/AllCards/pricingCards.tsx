import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PricingInfo from "../../pages/api/pricing.json";
import styles from "@/styles/generalstyles//colors.module.scss";
import pricingstyles from "@/styles/componentstyles/pricingCards.module.scss";
import Image from "next/image";
import PriceImage from "../../public/images/pricingImg/pricingimg.png";
import { bottom } from "@popperjs/core";

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
  bottom: string;
  paddingTop: string;
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
    bottom,
    paddingTop,
  } = props;

  return (
    <Card
      style={{
        bottom: `${bottom}`,
        paddingTop: `${paddingTop}`,
      }}
      className={`mx-auto mb-5 ${pricingstyles.pricingCardSM}`}
    >
      <Card.Body>
        <Card.Title className={`text-center fw-bold ${styles.textColorWB}`}>
          {Title}
        </Card.Title>
        <Card.Text className={`text-center ${styles.textColorWB}`}>
          {Text}
        </Card.Text>
        <div className={`text-center ${styles.pryTextColor}`}>
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
        <div className="mt-2 d-flex justify-content-center">
          <ul className="me-5">
            <li className="d-flex">
              <Card.Img
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                src={Images}
              />
              {list1}
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              {list2}
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              {list3}
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              {list4}
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              {list5}
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              {list6}
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              {list7}
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              {list8}
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
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
      <div className="row d-flex justify-content-center">
        {PricingInfo.pricing.map((items) => {
          return (
            <>
              <div
                className="col-lg-3 col-md-3 col-sm-12 text-wrap mx-4 my-2"
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
