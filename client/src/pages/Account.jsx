import { useState } from "react";
import "../styles/Account.css";
import MathieuScrib from "../assets/images/MathieuScrib.png";

export default function Account() {
  const user = {
    avatar: MathieuScrib,
    pseudo: "Nexx",
    nom: "REY",
    prenom: "Mathieu",
    email: "IlikeTrain@gmail.com",
    works: [
      { id: 1, titre: "Chimère", type: "roman" },
      { id: 2, titre: "L'art est nié", type: "poeme" },
      {
        id: 3,
        contenu:
          "Qui se couche avec le cul qui gratte se lève avec le doigt qui pu",
        type: "citation",
      },
      {
        id: 4,
        contenu:
          "Je cuisine toujours avec du vin. Parfois je l'ajoute même aux aliments",
        type: "citation",
      },
    ],
  };

  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.info(`Nouveau mot de passe pour ${user.pseudo}: ${newPassword}`);
    setNewPassword("");
    setIsEditingPassword(false);
  };

  return (
    <div className="account-container">
      <div className="user-profile">
        <img src={user.avatar} alt="Avatar" className="user-avatar" />
        <h2>{user.pseudo}</h2>
        <p>
          <strong>Nom:</strong> {user.nom}
        </p>
        <p>
          <strong>Prénom:</strong> {user.prenom}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        {!isEditingPassword ? (
          <button type="button" onClick={() => setIsEditingPassword(true)}>
            Modifier le mot de passe
          </button>
        ) : (
          <form onSubmit={handlePasswordChange}>
            <input
              type="password"
              placeholder="Nouveau mot de passe"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button type="submit">Enregistrer</button>
            <button type="button" onClick={() => setIsEditingPassword(false)}>
              Annuler
            </button>
          </form>
        )}
      </div>

      <div className="user-works">
        <h3>Mes Œuvres</h3>
        <div className="works-category">
          <h4>Romans</h4>
          <ul>
            {user.works
              .filter((work) => work.type === "roman")
              .map((roman) => (
                <li key={roman.id}>{roman.titre}</li>
              ))}
          </ul>
        </div>
        <div className="works-category">
          <h4>Poèmes</h4>
          <ul>
            {user.works
              .filter((work) => work.type === "poeme")
              .map((poeme) => (
                <li key={poeme.id}>{poeme.titre}</li>
              ))}
          </ul>
        </div>
        <div className="works-category">
          <h4>Citations</h4>
          <ul>
            {user.works
              .filter((work) => work.type === "citation")
              .map((citation) => (
                <li key={citation.id}>{citation.contenu}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
