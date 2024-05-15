import { useState } from "react";
import classes from "./feedbackForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import emailjs from "@emailjs/browser";

export const FeedbackForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, seIsSuccessful] = useState<boolean | null>(null);

  const serviceId= process.env.REACT_APP_SERVICEID ? process.env.REACT_APP_SERVICEID : ''
  const tempLateId = process.env.REACT_APP_TEMPLATEID ? process.env.REACT_APP_TEMPLATEID : ''
  const publicKey = process.env.REACT_APP_PUBLICKEY ? process.env.REACT_APP_PUBLICKEY : ''

  const initialValues = {
    firstName: "",
    phoneNumber: "",
    email: "",
    typeInterested: "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Напишите ваше имя"),
          phoneNumber: Yup.string().phone("RU").required("Напишите ваш номер"),
          email: Yup.string().email().required("Напишите ваш Email"),
        })}
        onSubmit={(values) => {
          setIsLoading(true);
          seIsSuccessful(null);
          const templateParams = {
            from_name: values.firstName,
            numberPhone: values.phoneNumber,
            email: values.email,
            type: values.typeInterested,
          };
          emailjs
            .send(serviceId, tempLateId, templateParams, publicKey)
            .then((response) => {
              setIsLoading(false);
              seIsSuccessful(true);
              console.log("Email sent successfully!", response);
            })
            .catch((error: string) => {
              console.log("Error sending email:", error);
              setIsLoading(false);
              seIsSuccessful(false);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form className={classes.formSection}>
            <div className={classes.form}>
              <div className={classes.title}>
                <h3>Форма обратной связи</h3>
                <p>Заполните данные и мы свяжемся с Вами в ближайшее время</p>
              </div>
              <Field
                name="firstName"
                type="text"
                placeholder="Ваше имя"
                className={`${classes.input} ${
                  errors.firstName && touched.firstName ? classes.inValid : ""
                }`}
              />
              <Field
                name="phoneNumber"
                type="tel"
                placeholder="Телефон"
                className={`${classes.input} ${
                  errors.phoneNumber && touched.phoneNumber
                    ? classes.inValid
                    : ""
                }`}
              />

              <Field
                name="email"
                type="email"
                placeholder="Адрес электронной почты"
                className={`${classes.input} ${
                  errors.email && touched.email ? classes.inValid : ""
                }`}
              />

              <div role="group" className={classes.radioList}>
               <label className={classes.radio}>
                  <Field
                    type="radio"
                    name="typeInterested"
                    value="Покупка участка"
                    id={classes.radioExample}
                  />
                  Покупка участка
                </label>
                <label className={classes.radio}>
                  <Field
                    type="radio"
                    name="typeInterested"
                    value="Покупка дома"
                    id={classes.radioExample}
                  />
                  Покупка дома
                </label>
                <label className={classes.radio}>
                  <Field
                    type="radio"
                    name="typeInterested"
                    value="Экскурсия"
                    id={classes.radioExample}
                  />
                  Экскурсия
                </label>
              </div>

              <button type="submit" className={classes.button}>
                Отправить
              </button>
              {isLoading && <div>Отправка...</div>}
              {isSuccessful && (
                <div style={{ color: "green" }}>
                  &#10003; Заявка отправлена!
                </div>
              )}
              {isSuccessful === false && (
                <div style={{ color: "red" }}>&#10060; Попробуйте еще раз!</div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
