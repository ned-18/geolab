import styles from "./Home.module.scss";
import video from "../../assets/images/background2.mp4";
import { Container } from "react-bootstrap";
import { Element } from "react-scroll";

function HomePage() {
  return (
    <Element className={styles.container} name="home">
      <Container className={styles.logo}>
        GEO <span>lab</span>
      </Container>
      <div className={styles.content}>
        <video className={styles.backgroundVideo} autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <Container className={styles.text}>
          <h2>Lorem Ipsum is simply dummy text</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </Container>
      </div>
    </Element>
  );
}

export default HomePage;
