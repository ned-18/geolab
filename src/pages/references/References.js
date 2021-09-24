import styles from "./References.module.scss";
import euroasfalt from "../../assets/images/euroasfalt.png";
import autoceste from "../../assets/images/autoceste.png";
import elektroprivreda from "../../assets/images/elektroprivreda.jpg";
import strabag from "../../assets/images/strabag.png";
import jpceste from "../../assets/images/jpceste.jpg";
import { Element } from "react-scroll";
import { Container } from "react-bootstrap";

function References() {
  return (
    <Container>
      <Element className={styles.references} name="reference">
        <h3>Reference i partneri</h3>
        <p>
          Ponosimo se uspješnom saradnjom s mnogim poslovnim subjektima na
          području građevinarstva i sudjelovanjem u realizaciji nekih od
          najvećih projekata u BiH. Imali smo zadovoljstvo sudjelovati u
          izgradnji autoceste na koridoru Vc, na trasi autoceste, ali i prilikom
          izgradnje kapitalnih objekata, poput tunela "1. mart". Posebno se
          ponosimo radom na izgradnji obilaznice Sarajeva i važnijih
          saobraćajnica u samom gradu (gradska južna longitudinala, I. i IX.
          transferzala). Također smo vršili usluge prilikom izgradnje brojnih
          dionica magistralnih cesta s pratećim objektima, kao i prilikom
          sanacije klizišta širom BiH. Vršili smo i ispitivanja prilikom
          izgradnje elektrana i elektroenergetskih postrojenja, poput "MHE Kotor
          Varoš", "KTG Zenica" i vjetroparka "Podveležje". Istaći ćemo i svoj
          angažman na Međunarodnom aerodromu Sarajevo i zgradi Ambasade SAD-a u
          Sarajevu.
        </p>
        <div>
          <img src={strabag} alt="strabag" />
          <img src={euroasfalt} alt="euroasfalt" />
          <img src={elektroprivreda} alt="elektroprivreda" />
          <img src={autoceste} alt="autoceste" />
          <img src={jpceste} alt="jpceste" />
        </div>
      </Element>
    </Container>
  );
}

export default References;
