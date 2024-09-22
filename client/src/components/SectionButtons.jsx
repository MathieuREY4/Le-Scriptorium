import "../styles/SectionButtons.css";

import romansImage from "../assets/images/romansImage.png";
import poemsImage from "../assets/images/poemsImage.png";
import quotesImage from "../assets/images/quotesImage.png";
import accountImage from "../assets/images/accountImage.png";
import settingsImage from "../assets/images/settingsImage.png";

export default function SectionButtons() {
  return (
    <section className="section-buttons">
      <div className="button-card">
        <img src={romansImage} alt="Romans" />
        <button type="button">Romans</button>
      </div>
      <div className="button-card">
        <img src={poemsImage} alt="Poèmes" />
        <button type="button">Poèmes</button>
      </div>
      <div className="button-card">
        <img src={quotesImage} alt="Citations" />
        <button type="button">Citations</button>
      </div>
      <div className="button-card">
        <img src={accountImage} alt="Mon compte" />
        <button type="button">Mon compte</button>
      </div>
      <div className="button-card">
        <img src={settingsImage} alt="Paramètres" />
        <button type="button">Paramètres</button>
      </div>
    </section>
  );
}
