import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="login-card">
        <div className="login-field">
          <h2>Connexion</h2>
        </div>
        <div className="login-field">
          <label htmlFor="pseudo">Pseudo</label>
          <input type="text" />
        </div>
        <div className="login-field">
          <label htmlFor="mot de passe">Mot de passe</label>
          <input type="password" />
        </div>
        <button className="login-button" type="button">
          Go
        </button>
      </div>
      <div className="header-text">
        <div className="header-title">
          <h1>LE SCRIBLIUM</h1>
        </div>
        <p>Lorem</p>
        <div className="search-bar">
          <input type="text" placeholder="Rechercher..." />
          <button type="button">Go</button>
        </div>
      </div>
    </header>
  );
}
