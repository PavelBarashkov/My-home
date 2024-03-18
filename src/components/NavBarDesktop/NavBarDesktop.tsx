import classes from "./navBarDesktop.module.css";
import { Container, Dropdown, Nav, Navbar, Offcanvas } from "react-bootstrap";
import iconPhone from "../../assets/header/Telephone.png";
import iconLogo from "../../assets/header/House.png";
import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";

export const NavBarDesktop = () => {
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
    <Navbar expand="lg" className={classes.navBar}>
      <Container className="justify-content-between" id="header">
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle}>Меню</Dropdown.Toggle>
          <Dropdown.Menu className={classes.menu}>
            <Dropdown.Item className={classes.menuItem} href="#FavoriteVillage">
              Жебреи
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

        <Navbar.Brand className={classes.brand}>
          <span>Мой</span> <img src={iconLogo} alt="" /> <span>Дом</span>
        </Navbar.Brand>

        <Nav>
          <div className={classes.navLink}>
            <img src={iconPhone} alt="" /> <span>+7 (922) 312-67-11</span>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};
