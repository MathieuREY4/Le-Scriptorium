import { useState } from "react";
import "../styles/Admin.css";

export default function Admin() {
  const [activeSection, setActiveSection] = useState("utilisateurs");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  // Exemples de données
  const users = [
    { id: 1, pseudo: "Nexx" },
    { id: 2, pseudo: "BoGossDeLiège" },
    { id: 3, pseudo: "Harmonia Granger" },
    { id: 4, pseudo: "VaFairTouNoirToogle" },
    { id: 5, pseudo: "RoiDuJavaScriptEtDuJambonBeurre" },
  ];

  const works = {
    romans: [
      { id: 1, titre: "Chimère" },
      {
        id: 2,
        titre:
          "BO Gosse de Liège Autobiographie: Dans la peau d'un dev qui code proprement",
      },
    ],
    poemes: [
      { id: 1, titre: "Ornithorynque " },
      { id: 2, titre: "Le Castor le plus utile au barrage" },
    ],
    citations: [
      {
        id: 1,
        contenu:
          "Qui se couche avec le cul qui gratte se lève avec le doigt qui pu",
      },
      {
        id: 2,
        contenu:
          "Je cuisine toujours avec du vin. Parfois je l'ajoute même aux aliments",
      },
    ],
  };

  const onlineUsers = [
    { id: 1, pseudo: "Harmonia Granger" },
    { id: 2, pseudo: "VaFairTouNoirToogle" },
  ];

  const handleDeleteUser = (id) => {
    console.info(`Suppression de l'utilisateur avec l'ID: ${id}`);
  };

  const handleAddBlogPost = (event) => {
    event.preventDefault();
    console.info("Ajout d'un article de blog:", blogTitle, blogContent);
    // Réinitialiser les champs du formulaire après l'ajout
    setBlogTitle("");
    setBlogContent("");
  };

  const renderCardContent = () => {
    switch (activeSection) {
      case "utilisateurs":
        return (
          <div>
            <h3>Liste des Utilisateurs</h3>
            <div className="table">
              {users.map((user) => (
                <div className="table-row" key={user.id}>
                  <div className="table-cell">{user.pseudo}</div>
                  <button
                    type="button"
                    onClick={() => handleDeleteUser(user.id)}
                    className="delete-button"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "romans":
        return (
          <div>
            <h3>Liste des Romans</h3>
            <div className="table">
              {works.romans.map((roman) => (
                <div className="table-row" key={roman.id}>
                  <div className="table-cell">{roman.titre}</div>
                  <button
                    type="button"
                    onClick={() =>
                      console.info(
                        `Suppression du roman avec l'ID: ${roman.id}`
                      )
                    }
                    className="delete-button"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "poemes":
        return (
          <div>
            <h3>Liste des Poèmes</h3>
            <div className="table">
              {works.poemes.map((poeme) => (
                <div className="table-row" key={poeme.id}>
                  <div className="table-cell">{poeme.titre}</div>
                  <button
                    type="button"
                    onClick={() =>
                      console.info(
                        `Suppression du poème avec l'ID: ${poeme.id}`
                      )
                    }
                    className="delete-button"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "citations":
        return (
          <div>
            <h3>Liste des Citations</h3>
            <div className="table">
              {works.citations.map((citation) => (
                <div className="table-row" key={citation.id}>
                  <div className="table-cell">{citation.contenu}</div>
                  <button
                    type="button"
                    onClick={() =>
                      console.info(
                        `Suppression de la citation avec l'ID: ${citation.id}`
                      )
                    }
                    className="delete-button"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "enLigne":
        return (
          <div>
            <h3>Utilisateurs En Ligne</h3>
            <div className="table">
              {onlineUsers.map((user) => (
                <div className="table-row" key={user.id}>
                  <div className="table-cell">{user.pseudo}</div>
                  <div className="online-indicator">●</div>
                </div>
              ))}
            </div>
          </div>
        );
      case "blog":
        return (
          <div>
            <h3>Ajouter un Article de Blog</h3>
            <form onSubmit={handleAddBlogPost}>
              <input
                type="text"
                placeholder="Titre de l'article"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
                required
              />
              <textarea
                placeholder="Contenu de l'article"
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)}
                required
              />
              <button type="submit" className="blog-button">
                Ajouter
              </button>
            </form>
          </div>
        );
      case "messages":
        return (
          <div>
            <h3>Messages</h3>
            <p>Aucun message pour le moment</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin-container">
      <nav className="admin-menu">
        <ul>
          <button
            type="button"
            onClick={() => setActiveSection("utilisateurs")}
          >
            Utilisateurs
          </button>
          <button type="button" onClick={() => setActiveSection("romans")}>
            Romans
          </button>
          <button type="button" onClick={() => setActiveSection("poemes")}>
            Poèmes
          </button>
          <button type="button" onClick={() => setActiveSection("citations")}>
            Citations
          </button>
          <button type="button" onClick={() => setActiveSection("enLigne")}>
            En ligne
          </button>
          <button type="button" onClick={() => setActiveSection("blog")}>
            Blog
          </button>
          <button type="button" onClick={() => setActiveSection("messages")}>
            Messages
          </button>
        </ul>
      </nav>
      <div className="admin-content">{renderCardContent()}</div>
    </div>
  );
}
