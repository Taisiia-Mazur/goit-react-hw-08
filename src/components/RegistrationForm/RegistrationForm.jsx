import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId} className={css.label}>
          Name
        </label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          autoComplete="off"
          className={css.input}
        />
        <ErrorMessage className={css.errorText} name="name" component="p" />

        <label htmlFor={emailFieldId} className={css.label}>
          Email
        </label>
        <Field
          type="email"
          name="email"
          id={emailFieldId}
          autoComplete="off"
          className={css.input}
        />
        <ErrorMessage className={css.errorText} name="email" component="p" />

        <label htmlFor={passwordFieldId} className={css.label}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          id={passwordFieldId}
          className={css.input}
        />
        <ErrorMessage className={css.errorText} name="password" component="p" />
        <button type="submit" className={css.submitButton}>
          Registration
        </button>
      </Form>
    </Formik>
  );
}
