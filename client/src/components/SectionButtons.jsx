import { motion } from "framer-motion";
import "../styles/SectionButtons.css";

import romansImage from "../assets/images/romansImage.png";
import poemsImage from "../assets/images/poemsImage.png";
import quotesImage from "../assets/images/quotesImage.png";
import accountImage from "../assets/images/accountImage.png";
import settingsImage from "../assets/images/settingsImage.png";

export default function SectionButtons() {
  return (
    <section className="section-buttons">
      <motion.div className="button-card" drag>
        <img src={romansImage} alt="Romans" />
        <button type="button">Romans</button>
      </motion.div>
      <motion.div className="button-card" drag>
        <img src={poemsImage} alt="Poèmes" />
        <button type="button">Poèmes</button>
      </motion.div>
      <motion.div className="button-card" drag>
        <img src={quotesImage} alt="Citations" />
        <button type="button">Citations</button>
      </motion.div>
      <motion.div className="button-card" drag>
        <img src={accountImage} alt="Mon compte" />
        <button type="button">Mon compte</button>
      </motion.div>
      <motion.div className="button-card" drag>
        <img src={settingsImage} alt="Paramètres" />
        <button type="button">Paramètres</button>
      </motion.div>
    </section>
  );
}
