import logoPlume from "../assets/images/logoPlume.png";

import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#home">Accueil</a>
        <a href="#publish">Publier</a>
      </div>
      <div className="nav-logo">
        <img src={logoPlume} alt="Logo" />
      </div>
      <div className="nav-right">
        <a href="#signup">Inscription</a>
      </div>
    </nav>
  );
}
