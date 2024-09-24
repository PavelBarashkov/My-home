import classes from "./header.module.css";
import map from "../../assets/header/map.svg";
import iconStart from "../../assets/header/free-icon-star-medal-8146767.png";
import { NavBar } from "../NavBar/NavBar";
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
            {/* <div className={classes.info_bank}>
              <p>Аккредитованы в Сбербанке. Опыт работы с 2014 года.</p>
              <img alt="" src={iconStart}/>
            </div> */}
          </div>
          <div className={classes.map}>
            <img src={map} />
          </div>
        </Container>
      </div>
    </header>
  );
};




