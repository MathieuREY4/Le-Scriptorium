import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Logo from "../assets/images/Logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const authContext = useAuth();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    if (authContext?.logout) {
      try {
        await authContext.logout();
        navigate("/");
      } catch (err) {
        console.error("Erreur lors de la déconnexion:", err);
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Accueil</Link>
        {authContext?.user && <Link to="/publish">Publier</Link>}
      </div>
      <div className="nav-logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-right">
        {authContext?.user ? (
          <>
            <button
              type="button"
              onClick={handleLogout}
              className="logout-button"
            >
              Déconnexion
            </button>
            <Link to="/user">
              <img
                src={`https://api.dicebear.com/6.x/initials/svg?seed=${authContext.user.pseudo}`}
                alt={authContext.user.pseudo}
                className="user-avatar"
              />
            </Link>
          </>
        ) : (
          <>
            <Link to="/register">Inscription</Link>
            <button type="button" onClick={handleLogin}>
              Connexion
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
