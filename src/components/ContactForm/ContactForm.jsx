import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

import css from "../ContactForm/ContactForm.module.css";

const UserShema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Please, enter your full name and last name")
    .max(50, "To much symbols")
    .required("*required"),
  number: Yup.string()
    .min(5, "Please, enter the correct number")
    .max(50, "To much symbols")
    .required("*required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = (values, actions) => {
 dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={UserShema}
    >
      <Form className={css.form}>
        <div className={css.box}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field className={css.field} type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.box}>
          <label className={css.label} htmlFor={numberId}>
            Number
          </label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            id={numberId}
            placeholder="_ _ _-_ _-_ _"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
