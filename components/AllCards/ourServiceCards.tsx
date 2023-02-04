import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardInfo from "../../pages/api/serviceCard.json";
import styles from "@/styles/generalstyles//colors.module.scss";

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
      <Card style={{ width: "auto" }} className={`${styles.ServiceCardBG}`}>
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
    <div className="container-fluid  ">
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
