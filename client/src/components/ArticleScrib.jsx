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
          <span>E</span>lle est mon exutoire, mon premier amour, mon ami
          <span>E</span>
          <br />
          <span>C</span>riée par l'encre d'une plume forgée dans le plus bel
          arbre d'un par<span>C</span>
          <br />
          <span>R</span>ire et pleurer à en vider l'encrier, écrire c'est ma
          façon de prie<span>R</span>
          <br />
          <span>I</span>mmaculée à l'image de la neige, la feuille c'est mon
          esprit qui se noirc<span>I</span>
          <br />
          <span>R</span>assurante et enivrante comme la chaleur d'un innocent
          premier baise<span>R</span>
          <br />
          <span>E</span>lle m'ait si précieuse que je ne saurai le dire mieux
          que l'<span>ECRIRE</span>
          <br />
          <br />
          <span>C</span>endres nacrées à l'odeur de miel, l'encre vient d'un
          feutre blan<span>C</span>
          <br />
          <span>E</span>nlaçant le diable dans l'espoir de goûter le fruit et
          d'être libr<span>E</span>
          <br />
          <span>S</span>alvatrice pourtant, elle me rend meilleur et expie mes
          péché<span>S</span>
          <br />
          <span>T</span>out ce que j'écris et cris à ma feuille m'apaise, tu
          sais ce que <span>C'EST</span>
          <br />
          <br />
          <span>T</span>enir sa plume comme le scalpel d'un chirurgien, opérer
          son âme e<span>T</span>
          <br />
          <span>O</span>uvrir sa boite de Pandore sans en brider le contenu,
          sans étouffer l'éch<span>O</span>
          <br />
          <span>U</span>ne pensée véritable, un geste pur comme tendre la main à
          un enfant perd<span>U</span>
          <br />
          <span>T</span>ravailler sa lame, affuter la mine, car savoir manier
          les mots est un a<span>TOUT</span>
          <br />
          <br />
          <span>U</span>n savoir qui se perd, malgré le nombre de pages pour
          alimenter le fe<span>U</span>
          <br />
          <span>N</span>on je ne serai pas comme eux, nous avons tant en comm
          <span>UN</span>
          <br />
          <br />
          <span>A</span>rtificier dans l'âme, mon bouquet de lettres fleurit et
          avec le temps s'épaissir<span>A</span>
          <br />
          <span>R</span>ien ne m'en coupera l'envie, j'ai été mordu et le venin
          n'a de cesse de circule<span>R</span>
          <br />
          <span>T</span>andis que l'art est nié tisse sa toile pour en faire son
          plume-<span>ART</span>
          <br />
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
