import Link from "next/link";
import styles from "./_navbar.module.scss";
import { socialsIcon, navLinks } from "./navData";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

/**
 * @description renders a navigation bar with social icons, logo, and links to various
 * pages on the site.
 * 
 * @returns { HTML division element (). } a React component that renders a navigation
 * bar with social media icons, a logo, and links to various pages.
 * 
 * 		- `div.container`: This element represents the container for all the navigation
 * links and icons. It has the class `container`, which is defined in the `styles` object.
 * 		- `div.container__socials`: This element contains a list of social media icons.
 * The icons are displayed as unordered list (`ul`) elements, with each icon represented
 * by an `<li>` element. Each `<li>` element has a class of ` socials`, which is also
 * defined in the `styles` object.
 * 		- `div.container__logo`: This element displays the logo of the website. It has
 * the class `container__logo`, which is also defined in the `styles` object.
 * 		- `div.container__links`: This element contains a list of navigation links. The
 * links are displayed as an unordered list (`ul`) elements, with each link represented
 * by a `<li>` element. Each `<li>` element has a class of `link`, which is also
 * defined in the `styles` object.
 * 		- `ThemeToggle`: This element is a link to the theme toggle function, which
 * changes the site's theme. It has the class `ThemeToggle`, which is also defined
 * in the `styles` object.
 * 		- `AuthLinks`: This element is a list of links to various authentication pages
 * on the website. Each link is represented by an `<li>` element, with a class of
 * `auth-link`, which is also defined in the `styles` object.
 */
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__socials}>
        {/**
         * @description generates a list of icons for social media platforms based on a
         * configuration object `socialsIcon`. Each icon is represented as an element `<Icon
         * />` in the list.
         */}
        <ul>
          {socialsIcon.map((e, k) => {
            const Icon = e.icon;
            return (
              <li key={k}>
                <Icon />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.container__logo}>eddieblog</div>
      <div className={styles.container__links}>
        <ThemeToggle />
        {/**
         * @description generates a list of navigation links based on the `navLinks` array.
         * Each link is created with a `Link` component, displaying the name of the link and
         * navigating to its associated path.
         */}
        <ul>
          {navLinks.map((item) => {
            return (
              <li key={item.id}>
                <Link href={item.path}>{item.name}</Link>{" "}
              </li>
            );
          })}
        </ul>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
