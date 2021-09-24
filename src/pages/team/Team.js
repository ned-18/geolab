import styles from "./Team.module.scss";
import { EnvelopeFill, Linkedin } from "react-bootstrap-icons";
import { presons } from "./persons";
import { Element } from "react-scroll";
import { Container } from "react-bootstrap";

function Team() {
  const team = presons;
  const listOfPersons = team.map(person => (
    <div className={`${styles.person} ${person.position}`} key={person.id}>
      <img src={person.image} alt="Anel" />
      <div className={styles.info}>
        <p className={styles.position}>{person.description}</p>
        <p className={styles.name}>{person.name}</p>
        <div>
          <EnvelopeFill className={styles.icon} />
          <Linkedin className={styles.icon} />
        </div>
      </div>
    </div>
  ));
  return (
    <Element className={styles.team} name="tim">
      <Container>
        <h3>Naš kreativni tim</h3>

        <p>
          GEOlab upošljava mlad, ali stručan i kompetentan kadar iz oblasti
          geologije i građevine što čini okosnicu naše firme. Uposlenci firme su
          kroz dugi niz godina uspješno realizovali nekoliko hiljada projekata
          iz oblasti geomehanike tla i geomehanike stijena.
        </p>
        <div className={styles.persons}>{listOfPersons}</div>
      </Container>
    </Element>
  );
}

export default Team;
