import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

import "../styles/Publish.css";
import iconbook from "../assets/images/icon-book.png";
import iconPoem from "../assets/images/icon-poem.png";
import iconCitation from "../assets/images/icon-citation.png";

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
  const { genres } = useLoaderData();
  console.info(genres);

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
      ? formData.genres.filter((g) => g !== genre)
      : [...formData.genres, genre];

    updateFormData("genres", newGenres);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && genreInput.trim() !== "") {
      const newGenre = genreInput.trim();
      if (!formData.genres.includes(newGenre)) {
        updateFormData("genres", [...formData.genres, newGenre]);
      }
      setGenreInput("");
    }
  };

  const handleGenreRemove = (genre) => {
    const newGenres = formData.genres.filter((g) => g !== genre);
    updateFormData("genres", newGenres);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.info(formData);
    const form = new FormData();

    form.append("title", formData.title);
    form.append("text", formData.text);
    form.append("synopsis", formData.synopsis);
    form.append("genre", JSON.stringify(formData.genres));
    form.append("file", formData.coverImage);

    const translateObject = {
      roman: "book",
      poem: "poem",
      citation: "rating",
    };

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/${translateObject[selectedType]}`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    console.info(response);

    console.info("Form: ", form);
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
            onKeyPress={handleKeyPress}
            placeholder="Cherchez un genre..."
          />
          {genreInput && (
            <ul className="genre-suggestions">
              {genres
                .filter((genre) =>
                  genre.name.toLowerCase().includes(genreInput.toLowerCase())
                )
                .map((genre) => (
                  <li key={genre.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={formData.genres.includes(genre.name)}
                        onChange={() => handleGenreSelect(genre.name)}
                      />
                      {genre.name}
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
                  onClick={() => handleGenreRemove(genre)}
                  className="remove-genre-icon"
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
