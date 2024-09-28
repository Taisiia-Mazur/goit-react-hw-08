const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontWeight: 500,
    fontSize: 36,
    textAlign: "center",
  },
  text: {
    margin: "16px",
  },
};

export default function HomePage() {
  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.title}>Phone Book welcome page</h2>
        <p style={styles.text}>Please to register or log in.</p>
      </div>
    </>
  );
}
