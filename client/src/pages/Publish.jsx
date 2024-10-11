import { useState } from "react";
import "../styles/Publish.css";
import iconbook from "../assets/images/icon-book.png";
import iconPoem from "../assets/images/icon-poem.png";
import iconCitation from "../assets/images/icon-citation.png";

const genresList = [
  "Science-fiction",
  "Fantasy",
  "Horreur",
  "Romance",
  "Thriller",
  "Drame",
  "Aventure",
  "Mystère",
  "Historique",
  "Biographie",
  "Dystopie",
  "Polar",
  "Comédie",
  "Young Adult (YA)",
  "Contemporain",
  "Surnaturel",
  "Western",
  "Essai",
  "Guerre",
  "Chick Lit",
  "Mémoires",
];

export default function Publish() {
  const [selectedType, setSelectedType] = useState("roman");
  const [formData, setFormData] = useState({
    title: "",
    genres: [],
    synopsis: "",
    text: "",
    link: "",
    coverImage: null,
  });

  const [genreInput, setGenreInput] = useState("");

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleImageUpload = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      coverImage: event.target.files[0],
    }));
  };

  const handleGenreChange = (event) => {
    setGenreInput(event.target.value);
  };

  const handleGenreSelect = (genre) => {
    const newGenres = formData.genres.includes(genre)
      ? formData.genres.filter((g) => g !== genre) // Retire le genre
      : [...formData.genres, genre]; // Ajoute le genre

    updateFormData("genres", newGenres);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && genreInput.trim() !== "") {
      const newGenre = genreInput.trim();
      if (!formData.genres.includes(newGenre)) {
        updateFormData("genres", [...formData.genres, newGenre]);
      }
      setGenreInput(""); // Réinitialise la barre de recherche
    }
  };

  const handleGenreRemove = (genre) => {
    const newGenres = formData.genres.filter((g) => g !== genre);
    updateFormData("genres", newGenres);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique pour soumettre le formulaire
  };

  return (
    <div className="publish-container">
      <h2>Choisis ta plume, Scribliard!</h2>
      <form className="publish-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cover" className="centered-label">
            Importe ton image
          </label>
          <input type="file" id="cover" onChange={handleImageUpload} />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <div className="publish-type-options">
            <div className="publish-type">
              <button
                type="button"
                className={`publish-type-button ${selectedType === "roman" ? "selected" : ""}`}
                onClick={() => setSelectedType("roman")}
              >
                <img src={iconbook} alt="Roman" className="icon" />
              </button>
              <p>Roman</p>
            </div>

            <div className="publish-type">
              <button
                type="button"
                className={`publish-type-button ${selectedType === "poem" ? "selected" : ""}`}
                onClick={() => setSelectedType("poem")}
              >
                <img src={iconPoem} alt="Poème" className="icon" />
              </button>
              <p>Poème</p>
            </div>

            <div className="publish-type">
              <button
                type="button"
                className={`publish-type-button ${selectedType === "citation" ? "selected" : ""}`}
                onClick={() => setSelectedType("citation")}
              >
                <img src={iconCitation} alt="Citation" className="icon" />
              </button>
              <p>Citation</p>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            value={genreInput}
            onChange={handleGenreChange}
            onKeyPress={handleKeyPress} // Ajout de l'écouteur pour la touche "Entrée"
            placeholder="Cherchez un genre..."
          />
          {genreInput && ( // Affiche uniquement si la barre de recherche n'est pas vide
            <ul className="genre-suggestions">
              {genresList
                .filter((genre) =>
                  genre.toLowerCase().includes(genreInput.toLowerCase())
                )
                .map((genre) => (
                  <li key={genre}>
                    <label>
                      <input
                        type="checkbox"
                        checked={formData.genres.includes(genre)}
                        onChange={() => handleGenreSelect(genre)}
                      />
                      {genre}
                    </label>
                  </li>
                ))}
            </ul>
          )}
          <div className="selected-genres">
            {formData.genres.map((genre) => (
              <span key={genre} className="selected-genre">
                {genre}
                <span
                  onClick={() => handleGenreRemove(genre)} // Ajout de la fonction pour supprimer un genre
                  className="remove-genre-icon" // Classe CSS pour styliser l'icône de suppression
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleGenreRemove(genre)
                  } // Support clavier
                >
                  ✖️
                </span>
              </span>
            ))}
          </div>
        </div>

        {selectedType === "roman" && (
          <>
            <div className="form-group">
              <label htmlFor="title">Titre</label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => updateFormData("title", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="synopsis">Synopsis</label>
              <textarea
                id="synopsis"
                value={formData.synopsis}
                onChange={(e) => updateFormData("synopsis", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="link">Lien vers le livre</label>
              <input
                type="text"
                id="link"
                value={formData.link}
                onChange={(e) => updateFormData("link", e.target.value)}
              />
            </div>
          </>
        )}

        {(selectedType === "poem" || selectedType === "citation") && (
          <>
            <div className="form-group">
              <label htmlFor="title">Titre</label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => updateFormData("title", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="text">
                {selectedType === "poem" ? "Poème" : "Citation"}
              </label>
              <textarea
                id="text"
                value={formData.text}
                onChange={(e) => updateFormData("text", e.target.value)}
              />
            </div>
          </>
        )}

        <button className="btn-publish" type="submit">
          Publier
        </button>
      </form>
    </div>
  );
}
