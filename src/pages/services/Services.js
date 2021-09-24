import styles from "./Services.module.scss";
import { Element } from "react-scroll";
import { Carousel, Container } from "react-bootstrap";
import methods from "../../assets/pdf/Metode.pdf";
import vlaga from "../../assets/images/vlaga_1.jpeg";
import granulacija from "../../assets/images/granulometrija_1.jpeg";
import slika from "../../assets/images/slika.jpeg";

function Services() {
  return (
    <div className={styles.services}>
      <Container>
        <Element name="usluge">
          <h3>Usluge</h3>
          <p>
            Slijedeći svoju viziju, kontinuiranim procesom rasta, laboratorija
            je investirala u nabavku nove opreme za proširivanje oblasti
            ispitivanja na građevinske materijale: prirodni kamen, agregat,
            cement, injekcione smjese, beton, estrsi, bitumenske mješavine. Na
            <a href={methods} download>
              &nbsp;linku&nbsp;
            </a>
            možete pogledati sva ispitivanja koja vršimo.
          </p>
        </Element>

        <Carousel>
          <Carousel.Item>
            <div className={styles.image}>
              <img className="d-bloc w-100" src={vlaga} alt="First slide" />
            </div>
            <Carousel.Caption className={styles.caption}>
              <h5>Ispitivanje vlažnosti tla</h5>
              <p>
                Predstavlja omjer mase vode u tlu prema masi isušenog tla ili
                stijene, navodi se u procentima (%). Navedena vrijednost dobiva
                se metodom koja odgovara standardu BAS EN ISO 17892-1:2016.
                Uzorak koji reprezentira cjelinu, standardno se suši pri
                temperaturi 100-110°C do stalne mase.
              </p>
              <p>
                Oprema: sušnica, vaga tačnosti 0,01 g, petrijeva posuda,
                lopatica.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.image}>
              <img
                className="d-bloc w-100"
                src={granulacija}
                alt="First slide"
              />
            </div>
            <Carousel.Caption className={styles.caption}>
              <h5>Ispitivanje zapreminske mase tla</h5>
              <p>
                Izražava masu svih komponenti tla (čvrste čestice i pore
                ispunjene vodom ili zrakom) sadržanu u jedinici zapremine.
                Zapreminska masa može se odrediti na sljedeće načine zavisno od
                oblika uzorka: a. linerana metoda (kocke, prizme, cilindri),
                gdje se uzorak utiskuje u kalup poznate zapremine, b. metoda
                hidrostatske ravnoteže, pomoću istisnute vode nakon potapanja
                uzorka, c. vaganje opitnog tijela obloženog parafinom - vaganje
                opitnog tijela bez parafina, a zatim vaganje u vodi sa
                parafinom. Zapreminska masa tla se izražava u Mg/m<sup>3</sup>
                &nbsp;prema BAS EN ISO 17892-2:2016.
              </p>
              <p>
                Oprema: vaga, prsten, pomično mjerilo, hidrostatska vaga,
                parafin.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.image}>
              <img className="d-bloc w-100" src={slika} alt="First slide" />
            </div>
            <Carousel.Caption className={styles.caption}>
              <h5>Ispitivanje gustoće čvrstih čestica tla</h5>
              <p>
                Definisana je kao masa čvrstih čestica podijeljena njihovom
                zapreminom i prikazuje se u Mg/m3 za tlo. Prema standardu BAS EN
                ISO 17892-3:2017 određuje se po metodi piknometra.
              </p>
              <p>
                Oprema: piknometar 50 ml, vaga tačnosti 0,001 g, sušnica, tučak,
                sito 0,5 mm.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Services;
