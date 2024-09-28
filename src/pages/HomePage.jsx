const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontWeight: 500,
    fontSize: 36,
    textAlign: "center",
  },
  text: {
    fontWeight: 600,
    fontSize: 24,
  },
};

export default function HomePage() {
  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.title}>Are you ready to start with your PhoneBook?</h2>
        <p style={styles.text}>Please register or log in.</p>
      </div>
    </>
  );
}
