import React from "react";
import classes from "./cardItem.module.css";
import { Card, Carousel, ListGroup } from "react-bootstrap";

export const CardItem = ({ data }: any) => {
  return (
    <Card className={classes.card}>
      <Carousel interval={null}>
        {data.images &&
          data?.images.map((item: any) => (
            <Carousel.Item className={classes.carouselItem}>
              <Card.Img className={classes.img} variant="top" src={item} />
            </Carousel.Item>
          ))}
      </Carousel>
      <Card.Body>
        <Card.Title>{data.village}</Card.Title>
        <Card.Text>
          {data.street} <br></br>
          {data.date}
        </Card.Text>
      </Card.Body>
      {data.description && (
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{data.description}</ListGroup.Item>
        </ListGroup>
      )}
    </Card>
  );
};
