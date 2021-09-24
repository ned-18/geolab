import React from "react";
import styles from "./Navbar.module.scss";
import { Element, Link } from "react-scroll";

function Navbar() {
  const input = React.createRef();
  const hideNavbar = () => {
    input.current.checked = false;
  };

  return (
    <Element className={styles.container} name="home">
      <div className={styles.navigation}>
        <input
          type="checkbox"
          ref={input}
          className={styles.checkbox}
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className={styles.button}>
          <span className={styles.icon}>&nbsp;</span>
        </label>

        <div className={styles.background}>&nbsp;</div>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link
                to="labaratorija"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.link}
                onClick={hideNavbar}
              >
                <span>01</span>Labaratorija
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                to="reference"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.link}
                onClick={hideNavbar}
              >
                <span>02</span>Reference
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                to="usluge"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.link}
                onClick={hideNavbar}
              >
                <span>03</span>Usluge
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                to="tim"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.link}
                onClick={hideNavbar}
              >
                <span>04</span>Tim
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                to="kontakt"
                spy={true}
                smooth={true}
                duration={500}
                className={styles.link}
                onClick={hideNavbar}
              >
                <span>05</span>Kontak
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Element>
  );
}

export default Navbar;
