import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Section } from "../Section/Section";
import { CardItem } from "../CardItem/CardItem";
import imgOne1 from "../../assets/readyObjects/one/фото 1.jpg";
import imgOne2 from "../../assets/readyObjects/one/фото 2.jpg";
import imgOne3 from "../../assets/readyObjects/one/фото 3.jpg";
import imgOne4 from "../../assets/readyObjects/one/фото 4.jpg";
import imgOne5 from "../../assets/readyObjects/one/ajnj 5.jpg";
import imgTwo1 from "../../assets/readyObjects/two/фото.jpg";
import imgTwo2 from "../../assets/readyObjects/two/photo_2024-03-15_16-16-26.jpg";
import imgTwo3 from "../../assets/readyObjects/two/photo_2024-03-15_16-15-14.jpg";
import imgTwo4 from "../../assets/readyObjects/two/photo_2024-01-23_12-59-33.jpg";
import imgTwo5 from "../../assets/readyObjects/two/photo_2024-01-23_12-59-32.jpg";
import imgThree1 from "../../assets/readyObjects/three/фото.jpg"
import imgThree2 from "../../assets/readyObjects/three/фото 2.jpg"
import imgThree3 from "../../assets/readyObjects/three/ФОТО 3.jpg"
import imgFour1 from "../../assets/readyObjects/four/обзор.jpg"
import imgFour2 from "../../assets/readyObjects/four/лобаново ул. Малахитовая.jpg"
import imgFour3 from "../../assets/readyObjects/four/photo_2024-03-15_16-18-00.jpg"
import imgFour4 from "../../assets/readyObjects/four/photo_2024-03-15_16-17-51.jpg"
import imgFour5 from "../../assets/readyObjects/four/photo_2024-03-15_16-17-32.jpg"
import imgFour6 from "../../assets/readyObjects/four/photo_2024-03-15_16-15-55.jpg"
import imgFour7 from "../../assets/readyObjects/four/photo_2024-03-15_15-29-22.jpg"







const data = [
  {
    village: "Култаево",
    street: "улица Радужная",
    date: "Апрель-июль 2023",
    images: [imgOne1, imgOne2, imgOne3, imgOne4, imgOne5],
  },
  {
    village: "Култаевское поселение, поселок Объект КРП",
    street: "улица Луговая",
    date: "Июль-ноябрь 2023",
    images: [imgTwo1, imgTwo2, imgTwo3, imgTwo4, imgTwo5],
  },
  {
    village: "село Лобаново",
    street: "улица Набережная",
    date: "Июль-ноябрь 2023",
    images: [imgThree1, imgThree2, imgThree3],
    description: '1-Этажный дом с облицовкой кирпичом'

  },
  {
    village: "село Лобаново",
    street: "улица Малахитовая",
    date: "Фпрель-ноябрь 2023",
    images: [imgFour1, imgFour2, imgFour3, imgFour4, imgFour5, imgFour6, imgFour7],
    description: 'Построены и сданы в эксплуатацию 3 дома, облицованы кирпичом'
  },
];

export const CardList = () => {
  return (
    <Section title="Наши объекты" isContainer={false} idName="Catalog">
      <Row xs={1} className="justify-content-between g-4">
        {data.map((item: any) => (
          <Col md={5}>
            <CardItem key={item.street} data={item} />
          </Col>
        ))}
      </Row>
    </Section>
  );
};
