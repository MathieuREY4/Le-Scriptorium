import { useState } from "react";
import "../styles/Poem.css";
import PoemModal from "../components/PoemModal";

const poemsData = [
  {
    id: "1",
    title: "Poème 1",
    content: "Voici le texte du premier poème...",
    author: "Auteur 1",
    avatar: "https://via.placeholder.com/150",
    comments: 3,
  },
  {
    id: "2",
    title: "Poème 2",
    content: "Voici le texte du deuxième poème...",
    author: "Auteur 2",
    avatar: "https://via.placeholder.com/150",
    comments: 5,
  },
  {
    id: "3",
    title: "Poème 2",
    content: "Voici le texte du deuxième poème...",
    author: "Auteur 2",
    avatar: "https://via.placeholder.com/150",
    comments: 5,
  },
  {
    id: "4",
    title: "Poème 2",
    content: "Voici le texte du deuxième poème...",
    author: "Auteur 2",
    avatar: "https://via.placeholder.com/150",
    comments: 5,
  },
  {
    id: "5",
    title: "Poème 2",
    content: "Voici le texte du deuxième poème...",
    author: "Auteur 2",
    avatar: "https://via.placeholder.com/150",
    comments: 5,
  },
  {
    id: "6",
    title: "Poème 2",
    content: "Voici le texte du deuxième poème...",
    author: "Auteur 2",
    avatar: "https://via.placeholder.com/150",
    comments: 5,
  },
  {
    id: "7",
    title: "Poème 2",
    content: "Voici le texte du deuxième poème...",
    author: "Auteur 2",
    avatar: "https://via.placeholder.com/150",
    comments: 5,
  },
  {
    id: "8",
    title: "Poème 2",
    content: "Voici le texte du deuxième poème...",
    author: "Auteur 2",
    avatar: "https://via.placeholder.com/150",
    comments: 5,
  },
  {
    id: "9",
    title: "Poème 2",
    content: "Voici le texte du deuxième poème...",
    author: "Auteur 2",
    avatar: "https://via.placeholder.com/150",
    comments: 5,
  },
  {
    id: "10",
    title: "Poème 2",
    content: "Voici le texte du deuxième poème...",
    author: "Auteur 2",
    avatar: "https://via.placeholder.com/150",
    comments: 5,
  },
  {
    id: "11",
    title: "Poème 2",
    content: "Voici le texte du deuxième poème...",
    author: "Auteur 2",
    avatar: "https://via.placeholder.com/150",
    comments: 5,
  },
  {
    id: "12",
    title: "Poème 2",
    content: "Voici le texte du deuxième poème...",
    author: "Auteur 2",
    avatar: "https://via.placeholder.com/150",
    comments: 5,
  },
];

export default function PoemsPage() {
  const [selectedPoem, setSelectedPoem] = useState(null);
  const [commentsCount, setCommentsCount] = useState(
    poemsData.reduce((acc, poem) => {
      acc[poem.id] = poem.comments;
      return acc;
    }, {})
  );

  const openModal = (poem) => {
    setSelectedPoem(poem);
  };

  const closeModal = () => {
    setSelectedPoem(null);
  };

  return (
    <div className="poems-container">
      {poemsData.map((poem) => (
        <div className="poem-card" key={poem.id}>
          <h3 className="poem-title">{poem.title}</h3>
          <img
            className="poem-avatar"
            src={poem.avatar || "https://via.placeholder.com/150"}
            alt="Avatar"
          />
          <button
            type="button"
            className="read-more"
            onClick={() => openModal(poem)}
          >
            Lire le poème
          </button>
          <p className="poem-author">- {poem.author}</p>
          <div className="comment-info">
            <span>{commentsCount[poem.id] || 0} commentaires</span>
            <img src="comment-icon.svg" alt="Icone commentaire" />
          </div>
        </div>
      ))}

      {selectedPoem && (
        <PoemModal
          poem={selectedPoem}
          closeModal={closeModal}
          setCommentsCount={setCommentsCount}
        />
      )}
    </div>
  );
}
