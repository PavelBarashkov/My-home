import classes from "./servicesAndProducts.module.css";
import { data1, data2, data3 } from "./data";
import photo1 from "../../assets/main/photo_2024-01-23_12-01-28.jpg";
import photo2 from "../../assets/main/chertezhi-domov (1).jpg";
import photo3 from "../../assets/catalog/photo_2024-01-23_12-05-31.jpg";

import { Section } from "../Section/Section";
import { ServicesAndProductsItem } from "../ServicesAndProductsItem/ServicesAndProductsItem";

export const ServicesAndProducts = () => {
  return (
    <Section title="Товары и Услуги" isContainer={true} idName="ServicesAndProducts">
      <div className={classes.list}>
        <ServicesAndProductsItem
          number="01"
          isReverse={false}
          title="Готовые дома с отделкой, 1- и 2-х этажные"
          subTitle="Техническое описание дома:"
          data={data1}
          img={photo1}
        />
        <ServicesAndProductsItem
          number="02"
          isReverse={true}
          title="Строительство домов « под ключ» на участке Заказчика"
          data={data2}
          img={photo2}
        />
        <ServicesAndProductsItem
          number="03"
          isReverse={false}
          title="Ремонт квартир, офисов"
          img={photo3}
          data={data3}
        />
      </div>
    </Section>
  );
};
