import classes from "./servicesAndProductsItem.module.css";
import { Col, Row } from "react-bootstrap";
import iconItem from "../../assets/main/Rectangle 33.png";
import { MyList } from "../../UI/MyListItem/MyList";

interface IServicesAndProductsItemProps {
  isReverse: boolean;
  title: string;
  img?: string;
  number?: string;
  data?: string[];
  subTitle?: string;
  IsTermOfSale?: boolean;
}

export const ServicesAndProductsItem = ({
  number,
  isReverse,
  title,
  subTitle,
  data,
  img,
  IsTermOfSale,
}: IServicesAndProductsItemProps) => {
  if (IsTermOfSale) {
    return (
      <Row className="align-items-start justify-content-between g-3">
        <Col lg={5}>
          <h3 className={classes.productTitle}>{title}</h3>
        </Col>
        <Col lg={5}>
          <div>
            <h5 className={classes.productSubTitle}>{subTitle}</h5>
            <MyList data={data ? data : []}/>
          </div>
        </Col>
      </Row>
    );
  }
  return (
    <Row className="align-items-start justify-content-between g-3">
      {isReverse ? (
        <>
          <Col lg={5}></Col>
          <Col lg={5}>
            <div className={classes.productNumber}>{number}</div>
          </Col>
          <Col lg={5}></Col>
          <Col lg={5}>
            <h3 className={classes.productTitle}>{title}</h3>
          </Col>
          <Col lg={5}>
            <div className={classes.productImg}>
              <img src={img} alt="" />
            </div>
          </Col>
          <Col lg={5}>
            <div>
              <h5 className={classes.productSubTitle}>{subTitle}</h5>
              <MyList data={data ? data : []}/>
            </div>
          </Col>
        </>
      ) : (
        <>
          <Col lg={5}>
            <div className={classes.productNumber}>{number}</div>
          </Col>
          <Col lg={5}></Col>
          <Col lg={5}>
            <h3 className={classes.productTitle}>{title}</h3>
          </Col>
          <Col lg={5}></Col>
          <Col lg={5}>
            <div>
              <h5 className={classes.productSubTitle}>{subTitle}</h5>
              <MyList data={data ? data : []}/>
            </div>
          </Col>
          <Col lg={5}>
            <div className={classes.productImg}>
              <img src={img} alt="" />
            </div>
          </Col>
        </>
      )}
    </Row>
  );
};
