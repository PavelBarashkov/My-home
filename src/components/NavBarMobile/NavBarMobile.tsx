import { useState, useEffect } from "react";
import classes from "./navBarMobile.module.css";
import { Container, Dropdown, Navbar, Offcanvas } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import iconLogo from "../../assets/header/House.png";
import React from "react";

export const NavBarMobile = () => {
  const CustomToggle = React.forwardRef<HTMLButtonElement>(
    ({ children, onClick }: any, ref) => (
      <button
        className={classes.btnMenu}
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        <RxHamburgerMenu />
        <span>{children}</span>
      </button>
    )
  );

  return (
    <Navbar className={classes.navBar}>
      <Container>
        <Navbar.Brand className={classes.brand}>
          <span>Мой</span> <img src={iconLogo} alt="" /> <span>Дом</span>
        </Navbar.Brand>
        <Dropdown drop="start">
          <Dropdown.Toggle as={CustomToggle}>Меню</Dropdown.Toggle>
          <Dropdown.Menu className={classes.menu}>
            <Dropdown.Item className={classes.menuItem} href="#FavoriteVillage1">
              Жебреи. КП Виктория
            </Dropdown.Item>
            <Dropdown.Item className={classes.menuItem} href="#FavoriteVillage2">
            Култаево. КП Новая Высота
            </Dropdown.Item>
            <Dropdown.Item
              className={classes.menuItem}
              href="#ServicesAndProducts"
            >
              Товары и Услуги
            </Dropdown.Item>
            <Dropdown.Item className={classes.menuItem} href="#ourSubject">
              Наши объекты
            </Dropdown.Item>
            <Dropdown.Item className={classes.menuItem} href="#Catalog">
              Каталог
            </Dropdown.Item>
            <Dropdown.Item className={classes.menuItem} href="#TermsOfSale">
              Условия продажи
            </Dropdown.Item>
            <Dropdown.Item className={classes.menuItem} href="#contacts">
              Контакты
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};
