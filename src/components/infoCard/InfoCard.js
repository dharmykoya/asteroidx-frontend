import React from "react";
import { Card } from "react-bootstrap";

const InfoCard = (props) => {
    const {title, data} = props
  return (
    <div className="">
      <Card
        bg="light"
        text="dark"
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Header className="text-center">Header</Card.Header>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InfoCard;
