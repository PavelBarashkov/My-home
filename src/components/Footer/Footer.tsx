import React from "react";
import classes from "./footer.module.css";
import { Col, Container, Row } from "react-bootstrap";
import iconLogo from "../../assets/footer/House (1).png";
export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container id="contacts">
        <Row className="align-items-center justify-content-between g-3">
          <Col lg={3}>
            <a href="#header" className={classes.footerTitle}>
              {" "}
              <span>Мой</span> <img src={iconLogo} alt="" /> <span>Дом</span>
            </a>
            <div className={classes.footerList}>
              <div className={classes.footerItem}><a href="#FavoriteVillage">Жебреи</a></div>
              <div className={classes.footerItem}><a href="#ServicesAndProducts">Товары и Услуги</a></div>
              <div className={classes.footerItem}><a href="#Catalog">Каталог</a></div>
              <div className={classes.footerItem}><a href="#TermsOfSale">Условия продажи</a></div>
            </div>
          </Col>
          <Col lg={2}>
            <div className={classes.footerSubTitle}>Контакты:</div>
            <div>
              <div className={classes.footerItem}><a href="tel: 259-29-10">259-29-10</a></div>
              <div className={classes.footerItem}><a href="tel: 8-922-312-67-11">8-922-312-67-11</a></div>
              <div className={classes.footerItem}>ИНН 590401557390</div>

            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
