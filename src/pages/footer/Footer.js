import styles from "./Footer.module.scss";
import { Element, Link } from "react-scroll";
import certificates from "../../assets/pdf/Certifikati.pdf";
import methods from "../../assets/pdf/Metode.pdf";
import { Container } from "react-bootstrap";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Element className={styles.footer} name="kontakt">
      <Container className={styles.info}>
        <div className={styles.contact}>
          <h4>Kontakt</h4>
          <ul>
            <li>Mustafe Bajića 19, 71000 Sarajevo</li>
            <li>Bosna i Hercegovina</li>
            <li>Tel: 033/862-002; 033/425-020</li>
            <li>Fax: 033/425-021</li>
            <li>ID broj: (4)201594130006</li>
            <li>
              Email: <span>geolab@bih.net.ba</span>
            </li>
          </ul>
        </div>
        <div className={styles.navigation}>
          <h4>
            GEO <span>lab</span>
          </h4>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Naslovnica
              </Link>
            </li>
            <li>O nama</li>
            <li>
              <a href={certificates} download>
                Certifikati
              </a>
            </li>
            <li>
              <a href={methods} download>
                Metode
              </a>
            </li>
            <li>
              <Link
                activeClass="active"
                to="reference"
                spy={true}
                smooth={true}
                duration={500}
              >
                Reference
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <Container className={styles.rights}>
        <p>© {year} GEOlab - Sva prava zadržana</p>
      </Container>
    </Element>
  );
}

export default Footer;
