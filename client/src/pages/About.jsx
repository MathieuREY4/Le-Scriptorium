import { useEffect, useState } from "react";
import sanctuaire from "../assets/images/sanctuaire.jpg";
import man from "../assets/images/man.png";
import sky from "../assets/images/sky.jpg";
import pyramid from "../assets/images/pyramid.png";
import stone from "../assets/images/stone.png";
import text from "../assets/images/text.png";
import "../styles/About.css";

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="banner">
        <img
          src={sky}
          alt="sky"
          className="layer"
          id="sky"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <img
          src={pyramid}
          alt="pyramid"
          className="layer"
          id="pyramid"
          style={{ transform: `translateX(${scrollY * 0.25}px)` }}
        />
        <img
          src={text}
          alt="text"
          className="layer"
          id="text"
          style={{ transform: `translateX(-${scrollY * 0.5}px)` }}
        />
        <img
          src={man}
          alt="man"
          className="layer"
          id="man"
          style={{ transform: `translateX(${scrollY * 1}px)` }}
        />
        <img
          src={stone}
          alt="stone"
          className="layer"
          id="stone"
          style={{ transform: `translateX(-${scrollY * 0.1}px)` }}
        />
      </section>

      <section id="about">
        <div className="container">
          <div className="textBx">
            <h2 className="title">Bienvenue dans le SCRIBTORIUM</h2>
            <p>
              Plongez dans l’univers mystique du Scriptorium, où les mots
              dansent sur le papyrus comme les ombres des pharaons sur les
              fresques des temples. Ici, chaque lettre devient une clé, ouvrant
              les portes de l’imaginaire et révélant les secrets enfouis dans
              les méandres de l’écriture. L’Égypte, terre des ancêtres, nous
              murmure des histoires millénaires. Ses hiéroglyphes, témoins d’une
              sagesse perdue, nous invitent à explorer l'art de raconter. Au
              Scriptorium, nous célébrons cette communion entre passé et
              présent, entre le mystère et la création. Que vous soyez écrivain
              en herbe ou poète aguerri, laissez votre plume s’envoler vers de
              nouveaux horizons. Rejoignez-nous dans cette quête littéraire, où
              chaque mot compte et où chaque histoire mérite d’être partagée.
            </p>
            <button className="btn" type="button">
              Le Blog
            </button>
          </div>
          <div className="imgBx">
            <img src={sanctuaire} alt="About me" />
          </div>
        </div>
      </section>
    </div>
  );
}
