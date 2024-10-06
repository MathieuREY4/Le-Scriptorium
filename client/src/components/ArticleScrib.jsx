import "../styles/ArticleScrib.css";
import bookArticle1 from "../assets/images/bookArticle1.png";
import bookArticle2 from "../assets/images/bookArticle2.png";

export default function ArticleScrib() {
  return (
    <div className="article-scrib">
      <h1 className="title">Nos coups de coeur:</h1>
      <div className="content">
        <img
          src={bookArticle1}
          alt="Illustration de gauche"
          className="side-image"
        />
        <p className="text">
          Ceci est le texte au milieu de l'article. Il peut contenir des
          informations importantes.
        </p>
        <img
          src={bookArticle2}
          alt="Illustration de droite"
          className="side-image"
        />
      </div>
      <button type="button" className="action-button">
        Cliquez ici
      </button>
    </div>
  );
}
