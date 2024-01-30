import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./favoriteVillage.module.css";
import photo1 from "../../assets/main/photo_2024-01-24_15-19-50.jpg";
import photo2 from "../../assets/main/photo_2024-01-24_15-20-01.jpg";
import { Section } from "../Section/Section";

export const FavoriteVillage = () => {
  return (

    <Section isContainer={true} idName="FavoriteVillage">
      <Row className="align-items-center justify-content-between g-3">
        <Col lg={5}>
          <h3 className={classes.blockTitle}>
            Дома в коттеджном посёлке у реки - деревня Жебреи
          </h3>
        </Col>

        <Col lg={5}>
          <div className={classes.blockInfo}>
            <p>
              коттеджный поселок Виктория, внутрипоселковые дороги. Рядом
              прекрасные пляжи, река, лес, развитая инфраструктура.
            </p>
            <p className={classes.blockInfoExtra}>
              <span>20 мин</span><br></br> до города
            </p>
          </div>
        </Col>
        <Col lg={5}>
          <div className={classes.blockImg}>
            <p>Коттеджный поселок "Виктория"</p>
            <img src={photo1} alt="Виктория"/>
          </div>
        </Col>
        <Col lg={5}>
          <div className={classes.blockImg}>
            <p>Коттеджный поселок "Виктория" 1 очередь</p>
            <img src={photo2} alt="'Виктория' 1 очередь"/>
          </div>
        </Col>
      </Row>
    </Section>
  );
};
