import { Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleLogin = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
      >
        <Form className={css.form}>
          <label htmlFor={emailFieldId} className={css.label}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            autoComplete="off"
            id={emailFieldId}
            className={css.input}
          />

          <label htmlFor={passwordFieldId} className={css.label}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            id={passwordFieldId}
            className={css.input}
          />

          <button type="submit" className={css.submitButton}>
            LogIn
          </button>
        </Form>
      </Formik>
      <p>Does&apos;t have an account yet?</p>
      <Link to={"/register"}>Registration</Link>
    </>
  );
}
