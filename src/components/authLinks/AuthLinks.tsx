import Link from "next/link";
import styles from "./_authlinks.module.scss";

const AuthLinks = () => {
  const status = "notAuth";
  return (
    <div className={styles.container}>
      {status === "notAuth" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span
            style={{
              fontSize: "2rem",
              marginLeft: "1.2rem",
              backgroundColor: "orange",
              padding: "0.4rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              borderRadius: "0.5rem",
              color: "#fff",
            }}
          >
            Logout
          </span>
        </>
      )}
    </div>
  );
};

export default AuthLinks;
