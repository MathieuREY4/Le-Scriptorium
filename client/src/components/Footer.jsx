import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Copyright tous droits réservés</p>
      <p>Le Scriblium</p>
      <div className="newsletter">
        <input type="email" placeholder="Adresse e-mail" />
        <button type="button">Go</button>
      </div>
    </footer>
  );
}
