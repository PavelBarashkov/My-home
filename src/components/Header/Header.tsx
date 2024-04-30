import classes from "./header.module.css";
import { NavBar } from "../NavBar/NavBar";
import map from "../../assets/header/Group 9.png";
import { Container } from "react-bootstrap";

export const Header = () => {
  return (
    <header className={classes.header}>
      <NavBar />
      <div className={classes.intro}>
        <Container>
          <div className={classes.introContainer}>
            <h1 className={classes.title}>
              Строим мечты.<br></br>Создаем дома.
            </h1>
            <p>Доверьте нам свои мечты, и мы сделаем их реальностью!</p>
            <p>Аккредитованы в Сбербанк</p>

          </div>
          <div className={classes.map}>
            <img src={map} />
          </div>
        </Container>
      </div>
    </header>
  );
};
