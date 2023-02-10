// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import PricingInfo from "../../pages/api/pricing.json";
import styles from "@/styles/generalstyles//colors.module.scss";
import pricingstyles from "@/styles/componentstyles/pricingCards.module.scss";
import Image from "next/image";
import PriceImage from "../../public/images/pricingImg/pricingimg.png";

// interface Ipricing {
//   Images: string;
//   Title: string;
//   Text: string;
//   Id: number;
//   Price: number;
//   list1: string;
//   list2: string;
//   list3: string;
//   list4: string;
//   list5: string;
//   list6: string;
//   list7: string;
//   list8: string;
//   list9: string;
// }

// export const PricingCard = (props: Ipricing) => {
//   const {
//     Images,
//     Title,
//     Text,
//     Price,
//     list1,
//     list2,
//     list3,
//     list4,
//     list5,
//     list6,
//     list7,
//     list8,
//     list9,
//   } = props;

//   return (
//     <Card className={`mx-auto ${pricingstyles.pricingCardSM}`}>
//       <Card.Body>
//         <Card.Title className={`text-center fw-bold ${styles.textColorWB}`}>
//           {Title}
//         </Card.Title>
//         <Card.Text className={`text-center ${styles.textColorWB}`}>
//           {Text}
//         </Card.Text>
//         <div className={`text-center container ${styles.pryTextColor}`}>
//           <div className="row text-start">
//             <div className={`col-6 text-end  ${pricingstyles.priceStyling2}`}>
//               {Price}
//             </div>
//             <div className="col-6 d-grid mt-1">
//               <span className={`${pricingstyles.priceStyling1}`}>$</span>

//               <span className={`${pricingstyles.priceStyling1}`}>
//                 Per Month
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="mt-2 d-flex justify-content-center">
//           <ul className="">
//             <li className="d-flex">
//               <Card.Img
//                 style={{ width: "1rem", height: "1.2rem" }}
//                 className="me-2 mt-1"
//                 src={Images}
//               />
//               {list1}
//             </li>
//             <li className="d-flex">
//               <Card.Img
//                 style={{ width: "1rem", height: "1.2rem" }}
//                 className="me-2 mt-1"
//                 src={Images}
//               />
//               {list2}
//             </li>
//             <li className="d-flex">
//               <Card.Img
//                 style={{ width: "1rem", height: "1.2rem" }}
//                 className="me-2 mt-1"
//                 src={Images}
//               />
//               {list3}
//             </li>

//             <li className="d-flex">
//               <Card.Img
//                 style={{ width: "1rem", height: "1.2rem" }}
//                 className="me-2 mt-1"
//                 src={Images}
//               />
//               {list4}
//             </li>
//             <li className="d-flex">
//               <Card.Img
//                 style={{ width: "1rem", height: "1.2rem" }}
//                 className="me-2 mt-1"
//                 src={Images}
//               />
//               {list5}
//             </li>
//             <li className="d-flex">
//               <Card.Img
//                 style={{ width: "1rem", height: "1.2rem" }}
//                 className="me-2 mt-1"
//                 src={Images}
//               />
//               {list6}
//             </li>
//             <li className="d-flex">
//               <Card.Img
//                 style={{ width: "1rem", height: "1.2rem" }}
//                 className="me-2 mt-1"
//                 src={Images}
//               />
//               {list7}
//             </li>
//             <li className="d-flex">
//               <Card.Img
//                 style={{ width: "1rem", height: "1.2rem" }}
//                 className="me-2 mt-1"
//                 src={Images}
//               />
//               {list8}
//             </li>
//             <li className="d-flex">
//               <Card.Img
//                 style={{ width: "1rem", height: "1.2rem" }}
//                 className="me-2 mt-1"
//                 src={Images}
//               />
//               {list9}
//             </li>
//           </ul>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// export const SinglePricingCard = () => {
//   return (
//     <div className="container-fluid  ">
//       <div className="row d-flex justify-content-center">
//         {PricingInfo.pricing.map((items) => {
//           return (
//             <>
//               <div
//                 className="col-lg-3 col-md-3 col-sm-12 text-wrap mx-4 my-2"
//                 key={items.Id}
//               >
//                 <PricingCard {...items} />
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export const PricingCard1 = () => {
  return (
    <Card className={`mx-auto   ${pricingstyles.pricingCardSM}`}>
      <Card.Body>
        <Card.Title className={`text-center fw-bold ${styles.textColorWB}`}>
          Classic
        </Card.Title>
        <Card.Text className={`text-center ${styles.textColorWB}`}>
          Lorem ipsum dolorjhhf sit est.
        </Card.Text>
        <div className={`text-center ${styles.pryTextColor}`}>
          <div className="row text-start">
            <div className={`col-6 text-end  ${pricingstyles.priceStyling2}`}>
              200
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
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

export const PricingCard2 = () => {
  return (
    <Card
      className={`mx-auto ${pricingstyles.pricingCardSM}   ${pricingstyles.centerCard}`}
    >
      <Card.Body className="">
        <Card.Title className={`text-center fw-bold ${styles.textColorWB}`}>
          Advanced
        </Card.Title>
        <Card.Text className={`text-center ${styles.textColorWB}`}>
          Lorem ipsum dolorjhhf sit est.
        </Card.Text>
        <div className={`text-center ${styles.pryTextColor}`}>
          <div className="row text-start">
            <div className={`col-6 text-end  ${pricingstyles.priceStyling2}`}>
              500
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
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

export const PricingCard3 = () => {
  return (
    <Card className={`mx-auto   ${pricingstyles.pricingCardSM}`}>
      <Card.Body>
        <Card.Title className={`text-center fw-bold ${styles.textColorWB}`}>
          Premium
        </Card.Title>
        <Card.Text className={`text-center ${styles.textColorWB}`}>
          Lorem ipsum dolorjhhf sit est.
        </Card.Text>
        <div className={`text-center ${styles.pryTextColor}`}>
          <div className="row text-start">
            <div className={`col-6 text-end  ${pricingstyles.priceStyling2}`}>
              1500
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
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
            <li className="d-flex mb-1">
              <Image
                style={{ width: "1rem", height: "1.2rem" }}
                className="me-2 mt-1"
                alt="pricing image"
                src={PriceImage}
              />
              Risk Managenment
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

export const SinglePricingCard = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-3 col-md-3 col-sm-12 text-wrap pb-5  ">
        <PricingCard1 />
      </div>
      <div
        className={`col-lg-3 col-md-3 col-sm-12 text-wrap    ${pricingstyles.secCardPosition}`}
      >
        <PricingCard2 />
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 text-wrap  ">
        <PricingCard3 />
      </div>
    </div>
  );
};
