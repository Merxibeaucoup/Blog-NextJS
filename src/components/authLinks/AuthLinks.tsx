import Link from "next/link";
import styles from "./_authlinks.module.scss";

/**
 * @description determines if the user is authenticated and renders a "Login" or
 * "Logout" link based on their status.
 * 
 * @returns { HTML div element. } a React component that displays a login or logout
 * link based on the user's authentication status.
 * 
 * 		- The `div` element is classified with the CSS style `container`.
 * 		- The `const status` variable stores the value `"notAuth"`. This value determines
 * which link to display.
 * 		- The ternary operator (`?:`) is used to display either the `/login` or `/write`
 * links based on the value of `status`.
 * 		- The `<Link>` elements are wrapped in a span element with CSS styles that include
 * font size, margin, background color, padding, and border radius. These styles vary
 * depending on whether the link should be displayed as "Login" or "Logout".
 * 
 * 	In summary, the `AuthLinks` function returns an HTML element that displays either
 * a login or logout link based on the user's authentication status.
 */
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
