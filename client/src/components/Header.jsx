import { useState } from "react";
import { useAuth } from "../context/authContext";
import "../styles/Header.css";

export default function Header() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useAuth();

  const handleLogin = async () => {
    if (authContext?.login) {
      try {
        await authContext.login(pseudo, password);
      } catch (err) {
        console.error("Erreur lors de la connexion:", err);
      }
    }
  };

  return (
    <header className="header">
      <div className="login-card">
        <div className="login-field">
          <h2>Connexion</h2>
        </div>
        <div className="login-field">
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="text"
            id="pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
        </div>
        <div className="login-field">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" type="button" onClick={handleLogin}>
          Go
        </button>
      </div>
      <div className="header-text">
        <div className="header-title">
          <h1>LE SCRIBLIUM</h1>
        </div>
        <p>
          Le Scribliard est un amoureux des mots. La plume est le prolongement
          de son âme. Il l'utilise comme un scalpel pour inciser les consciences
          et opérer son subconscient. En ce lieu, vous deviendrez un Scribliard.
        </p>
        <div className="HeaderSearch-bar">
          <input type="text" placeholder="Rechercher..." />
          <button type="button">Go</button>
        </div>
      </div>
    </header>
  );
}
