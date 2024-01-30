import React from "react";
import classes from "./section.module.css";
import { Container } from "react-bootstrap";

interface ISectionProps {
  isContainer: boolean;
  children: React.ReactNode;
  title?: string;
  idName?: string
}

export const Section = ({ title, isContainer, children, idName }: ISectionProps) => {
  return (
    <section className={classes.section} id={idName}>
      {title && <h2 className={classes.sectionTitle}>{title}</h2>}
      {isContainer ? <Container>{children}</Container> : <>{children}</>}
    </section>
  );
};
