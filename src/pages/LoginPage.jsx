import LoginForm from "../components/LoginForm/LoginForm";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
};

export default function LoginPage() {
    return (
        <div style={styles.container}>
            <h2>Login</h2>
            <LoginForm />
        </div>
    )

};
