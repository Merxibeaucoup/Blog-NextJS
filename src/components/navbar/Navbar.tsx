import Link from "next/link";
import styles from "./_navbar.module.scss";
import { socialsIcon, navLinks } from "./navData";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__socials}>
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
