import { useId } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addContact, editContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "To short!")
    .max(50, "To long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, "Must be XXX-XXX-XXXX")
    .required("Required"),
});

export default function ContactForm({ currentContact, onCloseModal }) {
  const dispatch = useDispatch();
  const fieldNameId = useId();
  const fieldNumberId = useId();

  function handleSubmit(values, actions) {
    const newContact = { ...values };

    if (currentContact) {
      dispatch(editContact({ ...values, id: currentContact.id }));
      onCloseModal();
    } else {
      dispatch(addContact(newContact));
      currentContact = null;
      actions.resetForm();
    }
  }

  return (
    <Formik
      initialValues={currentContact ? currentContact : { name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div className={css.box}>
          <label htmlFor={fieldNameId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={fieldNameId}
            autoComplete="off"
          />
          <ErrorMessage className={css.errorText} name="name" component="p" />
        </div>
        <div className={css.box}>
          <label htmlFor={fieldNumberId}>Number</label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={fieldNumberId}
            placeholder="XXX-XXX-XXXX"
            autoComplete="off"
          />
          <ErrorMessage className={css.errorText} name="number" component="p" />
        </div>
        <button className={css.formaBtn} type="submit">
          {currentContact ? "Edit contact" : "Add contact"}
        </button>
      </Form>
    </Formik>
  );
}
