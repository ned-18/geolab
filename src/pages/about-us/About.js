import styles from "./About.module.scss";
import about1 from "../../assets/images/about_1.jpeg";
import about2 from "../../assets/images/about_2.jpeg";
import about3 from "../../assets/images/about_4.jpeg";
import { Element } from "react-scroll";
import { Container } from "react-bootstrap";

function About() {
  return (
    <Element name="labaratorija" className={styles.about}>
      <Container>
        <h3>Laboratorija</h3>
        <div className={`${styles.content} col-md-12`}>
          <div className={`${styles.text} col-md-6`}>
            <h4>O nama</h4>
            <p>
              GEOlab d.o.o je geološko-građevinska firma koja u sektoru
              građevinarstva uspješno posluje od 2010. godine i na tržištu nudi
              poslove laboratorijskih i terenskih ispitivanja ulaznih parametara
              za projektovanje u geotehnici, kao i kontrolu kvaliteta radova.
              Laboratorija GEOlab je postala prva akreditovana laboratorija za
              geomehaniku tla na teritoriji BiH od strane Instituta za
              akreditiranje BiH (BATA-e) po standardu BAS EN ISO/IEC 170025.
            </p>
            <h4>Misija i vizija</h4>
            <p>
              Uposlenci firme su kroz dugi niz godina uspješno realizovali
              nekoliko hiljada projekata iz oblasti geomehanike tla i
              geomehanike stijena. Izgrađen je jedan savremen objekat po uzoru
              na velike europske laboratorije u kome su efikasnost rada,
              kvalitet obavljanja laboratorijskih aktivnosti i uslovi
              ispitivanja podignuti na još viši nivo. Sve ovo pokazuje da u doba
              pandemije COVID-a u kome su mnoge oblasti doživjele svoj pad mi
              smo nastavili s ostvarivanjem naših razvojnih ciljeva još
              ubrzanijim tempom.
            </p>
          </div>
          <div className={`${styles.images} col-md-6`}>
            <img
              src={about1}
              className={`${styles.photo} ${styles.photo1}`}
              alt="about"
            />
            <img
              src={about2}
              className={`${styles.photo} ${styles.photo2}`}
              alt="about"
            />
            <img
              src={about3}
              className={`${styles.photo} ${styles.photo3}`}
              alt="about"
            />
          </div>
        </div>
        {/* <div className={`${styles.more} col-md-8`}>
        <span>Pročitaj više...</span>
      </div> */}
      </Container>
    </Element>
  );
}

export default About;
