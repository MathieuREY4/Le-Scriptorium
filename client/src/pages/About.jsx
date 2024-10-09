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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              magnam, itaque modi soluta deserunt, nemo reprehenderit ipsam
              voluptas iure vero quod aperiam eaque delectus iusto rerum id!
              Libero architecto, eos consequatur placeat maxime quas distinctio
              blanditiis esse incidunt, explicabo ipsum quos exercitationem...
            </p>
            <button className="btn" type="button">
              Read More
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
