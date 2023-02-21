import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDetails from "../../pages/api/musing.json";
import CardInfo from "../../pages/api/serviceCard.json";
import styles from "@/styles/generalstyles//colors.module.scss";
import Servicestyles from "@/styles/componentstyles/ourServiceCards.module.scss";

interface IProduct {
  Images: string;
  Title: string;
  Text: string;
  Id: number;
}

export const ServiceCard = (props: IProduct) => {
  const { Images, Title, Text } = props;
  return (
    <>
      <Card className={`mx-auto ${styles.ServiceCardBG}`}>
        <Card.Img
          className="ms-2 mt-3"
          src={Images}
          style={{ width: "3rem" }}
        />
        <Card.Body>
          <Card.Title className="">{Title}</Card.Title>
          <Card.Text>{Text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export const SingleServiceCards = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {CardInfo.ourServiceCards.map((items) => {
          return (
            <>
              <div
                className="col-lg-3 col-md-3 col-sm-12 text-wrap mx-4 my-2"
                key={items.Id}
              >
                <ServiceCard {...items} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

interface Product {
  Image: string;
  Title: string;
  Bodytext: string;
  Link: string;
  Id: number;
}

export const MusingCard = (props: Product) => {
  const { Image, Title, Bodytext, Link, Id } = props;
  return (
    <>
      <div className="card">
        <img src={Image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">{Bodytext}</p>
          <a href="#">{Link}</a>
        </div>
      </div>
    </>
  );
};

export const CardMapping = () => {
  return (
    <div className="contianer">
      <div className="row d-flex justify-content-center">
        {CardDetails.ourServiceCards.map((Carditem) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-12" key={Carditem.Id}>
              <MusingCard {...Carditem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
