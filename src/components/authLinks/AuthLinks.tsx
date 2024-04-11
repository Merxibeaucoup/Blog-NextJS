import Link from "next/link";
import styles from "./_authlinks.module.scss";

/**
 * @description returns an HTML element that displays different links based on the
 * user's authentication status.
 * 
 * @returns { HTML division element with a set of links and logout button. } a container
 * element with either a "Login" link or a "Logout" link, depending on the value of
 * the `status` variable.
 * 
 * 		- The `div` element is wrapped in a `<span>` element to make the links more
 * visually appealing.
 * 		- The `className` attribute sets the styles for the outermost container div.
 * 		- The `status` variable is defined as a constant and set to "notAuth" initially.
 * This will be used to determine which link to render when the function is called.
 * 		- The ternary operator is used to conditionally render either the "Login" or
 * "Write" links based on the value of `status`. If `status` is equal to "notAuth",
 * then the "Login" link is rendered. Otherwise, both the "Login" and "Write" links
 * are rendered using the `(<>` syntax.
 * 		- The `<Link>` elements are used to create hyperlinks for each link. The `href`
 * attribute sets the URL of the link, while the `style`, `margin`, `padding`,
 * `borderRadius`, and `color` attributes are used to customize the appearance of
 * each link.
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
