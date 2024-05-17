import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./main.module.css";
import { FavoriteVillage } from "../FavoriteVillage/FavoriteVillage";
import { ServicesAndProducts } from "../ServicesAndProducts/ServicesAndProducts";
import { Catalog } from "../Catalog/Catalog";
import { TermsOfSale } from "../TermsOfSale/TermsOfSale";
import { CardList } from "../CardList/CardList";
import { FeedbackForm } from "../../modules";

export const Main = () => {
  return (
    <main>
      <Container>
        <FavoriteVillage/>
        <ServicesAndProducts />
        <CardList/>
        <Catalog/>
        <TermsOfSale/>
        <FeedbackForm/>
      </Container>
    </main>
  );
};
