import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./main.module.css";
import { FavoriteVillage } from "../FavoriteVillage/FavoriteVillage";
import { ServicesAndProducts } from "../ServicesAndProducts/ServicesAndProducts";
import { Catalog } from "../Catalog/Catalog";
import { TermsOfSale } from "../TermsOfSale/TermsOfSale";

export const Main = () => {
  return (
    <main>
      <Container>
        <FavoriteVillage/>
        <ServicesAndProducts />
        <Catalog/>
        <TermsOfSale/>
      </Container>
    </main>
  );
};
