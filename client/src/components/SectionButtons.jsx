import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/SectionButtons.css";

import romansImage from "../assets/images/romansImage.png";
import poemsImage from "../assets/images/poemsImage.png";
import quotesImage from "../assets/images/quotesImage.png";
import accountImage from "../assets/images/accountImage.png";
import settingsImage from "../assets/images/settingsImage.png";

export default function SectionButtons() {
  const navigate = useNavigate();

  const goToPoemsPage = () => {
    navigate("/poems");
  };
  const goToBooksPage = () => {
    navigate("/books");
  };
  const goToAccountsPage = () => {
    navigate("/account");
  };
  const goToAdminPage = () => {
    navigate("/admin");
  };

  return (
    <section className="section-buttons">
      <motion.div className="button-card" drag>
        <img src={romansImage} alt="Romans" />
        <button type="button" onClick={goToBooksPage}>
          Romans
        </button>
      </motion.div>
      <motion.div className="button-card" drag>
        <img src={poemsImage} alt="Poèmes" />
        <button type="button" onClick={goToPoemsPage}>
          Poèmes
        </button>{" "}
      </motion.div>
      <motion.div className="button-card" drag>
        <img src={quotesImage} alt="Citations" />
        <button type="button">Citations</button>
      </motion.div>
      <motion.div className="button-card" drag>
        <img src={accountImage} alt="Mon compte" />
        <button type="button" onClick={goToAccountsPage}>
          Mon compte
        </button>
      </motion.div>
      <motion.div className="button-card" drag>
        <img src={settingsImage} alt="Admin" />
        <button type="button" onClick={goToAdminPage}>
          Admin
        </button>
      </motion.div>
    </section>
  );
}
