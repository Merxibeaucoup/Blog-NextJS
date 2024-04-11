import Link from "next/link";
import styles from "./_navbar.module.scss";
import { socialsIcon, navLinks } from "./navData";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

/**
 * @description renders a navigation bar with icons, logo, and links to different
 * pages on the website.
 * 
 * @returns { HTMLDivElement. } a container element containing socials icons, a logo,
 * links to navigation items, and an Auth Links component.
 * 
 * 		- `className`: A string representing the CSS class name for the container element.
 * 		- `div`: An HTML `div` element that contains the social icons, logo, and links.
 * 		- `container`: The main container element for the navbar.
 * 		- `styles`: An object representing the CSS styles applied to the navbar elements.
 * 		- `icon`: A JavaScript function that returns an icon component.
 * 		- `navLinks`: An array of objects representing the nav links. Each object has a
 * `path` property and a `name` property.
 * 		- `ThemeToggle`: A JavaScript function that returns a theme toggle component.
 * 		- `AuthLinks`: An array of objects representing the authentication links. Each
 * object has a `path` property and a `text` property.
 */
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__socials}>
        {/**
         * @description generates a list of icons, each represented by an icon element with
         * the specified Icon prop.
         */}
        <ul>
          {socialsIcon.map((e) => {
            const Icon = e.icon;
            return (
              <li>
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
         * @description maps `navLinks` array and renders an unordered list of links to
         * respective destinations.
         */}
        <ul>
          {navLinks.map((item) => {
            return (
              <li>
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
