import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./favoriteVillage.module.css";
import photo1 from "../../assets/main/photo_2024-01-24_15-19-50.jpg";
import photo2 from "../../assets/main/photo_2024-01-24_15-20-01.jpg";
import photo3 from "../../assets/main/map_new_village.jpg";

import { Section } from "../Section/Section";
import { MyList } from "../../UI/MyListItem/MyList";

export const FavoriteVillage = () => {
  const data = [
    "60 домовладений",
    "Участки 8-12 соток",
    "Закрытая территория с детской площадкой и зоной отдыха"
  ]

  return (
    <>
      <Section isContainer={true} idName="FavoriteVillage1">
        <Row className="align-items-center justify-content-between g-3">
          <Col lg={5}>
            <h3 className={classes.blockTitle}>
              Дома в коттеджном посёлке у реки - деревня Жебреи
            </h3>
          </Col>

          <Col lg={5}>
            <div className={classes.blockInfo}>
              <p>
                <span>к</span>оттеджный поселок Виктория, внутрипоселковые
                дороги. Рядом прекрасные пляжи, река, лес, развитая
                инфраструктура.
              </p>
              <p className={classes.blockInfoExtra}>
                <span>20 мин</span>
                <br></br> до города
              </p>
            </div>
          </Col>
          <Col lg={5}>
            <div className={classes.blockImg}>
              <p>Коттеджный поселок "Виктория"</p>
              <img src={photo1} alt="Виктория" />
            </div>
          </Col>
          <Col lg={5}>
            <div className={classes.blockImg}>
              <p>Коттеджный поселок "Виктория" 1 очередь</p>
              <img src={photo2} alt="'Виктория' 1 очередь" />
            </div>
          </Col>
        </Row>
      </Section>

      <Section isContainer={true} idName="FavoriteVillage2">
        <Row className="align-items-center justify-content-between g-3">
          <Col lg={5}>
            <h3 className={classes.blockTitle}>
              Коттеджный поселок <br></br>"Новая Высота"
            </h3>
            <p></p>
            <MyList data={data}/>
          </Col>

       
          
          <Col lg={5}>
            <div className={classes.blockImg}>
              <img src={photo3} alt="Виктория" />
            </div>
          </Col>
        </Row>
      </Section>
    </>
  );
};
