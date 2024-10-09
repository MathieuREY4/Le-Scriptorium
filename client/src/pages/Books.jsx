import { useState } from "react";
import BookModal from "../components/BookModal";
import "../styles/Book.css";
import chimère from "../assets/images/chimère.jpg";

const booksData = [
  {
    id: "1",
    title: "Chimère",
    coverImage: chimère,
    genre: "Thriller, Science-fiction, Horreur",
    synopsis:
      "Dans l’obscurité de la ville de Golza, la nuit devient le théâtre de l'horreur...",
    link: "/books/chimere",
    author: "Auteur 1",
  },
  {
    id: "1",
    title: "Chimère",
    coverImage: chimère,
    genre: "Thriller, Science-fiction, Horreur",
    synopsis:
      "Dans l’obscurité de la ville de Golza, la nuit devient le théâtre de l'horreur...",
    link: "/books/chimere",
    author: "Auteur 1",
  },
  {
    id: "1",
    title: "Chimère",
    coverImage: chimère,
    genre: "Thriller, Science-fiction, Horreur",
    synopsis:
      "Dans l’obscurité de la ville de Golza, la nuit devient le théâtre de l'horreur...",
    link: "/books/chimere",
    author: "Auteur 1",
  },
  {
    id: "1",
    title: "Chimère",
    coverImage: chimère,
    genre: "Thriller, Science-fiction, Horreur",
    synopsis:
      "Dans l’obscurité de la ville de Golza, la nuit devient le théâtre de l'horreur...",
    link: "/books/chimere",
    author: "Auteur 1",
  },
  {
    id: "1",
    title: "Chimère",
    coverImage: chimère,
    genre: "Thriller, Science-fiction, Horreur",
    synopsis:
      "Dans l’obscurité de la ville de Golza, la nuit devient le théâtre de l'horreur...",
    link: "/books/chimere",
    author: "Auteur 1",
  },
  {
    id: "1",
    title: "Chimère",
    coverImage: chimère,
    genre: "Thriller, Science-fiction, Horreur",
    synopsis:
      "Dans l’obscurité de la ville de Golza, la nuit devient le théâtre de l'horreur...",
    link: "/books/chimere",
    author: "Auteur 1",
  },
  {
    id: "1",
    title: "Chimère",
    coverImage: chimère,
    genre: "Thriller, Science-fiction, Horreur",
    synopsis:
      "Dans l’obscurité de la ville de Golza, la nuit devient le théâtre de l'horreur...",
    link: "/books/chimere",
    author: "Auteur 1",
  },
  {
    id: "1",
    title: "Chimère",
    coverImage: chimère,
    genre: "Thriller, Science-fiction, Horreur",
    synopsis:
      "Dans l’obscurité de la ville de Golza, la nuit devient le théâtre de l'horreur...",
    link: "/books/chimere",
    author: "Auteur 1",
  },
  {
    id: "1",
    title: "Chimère",
    coverImage: chimère,
    genre: "Thriller, Science-fiction, Horreur",
    synopsis:
      "Dans l’obscurité de la ville de Golza, la nuit devient le théâtre de l'horreur...",
    link: "/books/chimere",
    author: "Auteur 1",
  },
  {
    id: "1",
    title: "Chimère",
    coverImage: chimère,
    genre: "Thriller, Science-fiction, Horreur",
    synopsis:
      "Dans l’obscurité de la ville de Golza, la nuit devient le théâtre de l'horreur...",
    link: "/books/chimere",
    author: "Auteur 1",
  },
  {
    id: "1",
    title: "Chimère",
    coverImage: chimère,
    genre: "Thriller, Science-fiction, Horreur",
    synopsis:
      "Dans l’obscurité de la ville de Golza, la nuit devient le théâtre de l'horreur...",
    link: "/books/chimere",
    author: "Auteur 1",
  },
  {
    id: "1",
    title: "Chimère",
    coverImage: chimère,
    genre: "Thriller, Science-fiction, Horreur",
    synopsis:
      "Dans l’obscurité de la ville de Golza, la nuit devient le théâtre de l'horreur...",
    link: "/books/chimere",
    author: "Auteur 1",
  },

  // ...autres livres
];

export default function BooksPage() {
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="books-page-container">
      {booksData.map((book) => (
        <div className="book-card-container" key={book.id}>
          <h3 className="book-title-text">{book.title}</h3>
          <img
            className="book-cover-image"
            src={book.coverImage || "https://via.placeholder.com/150"}
            alt={`Couverture de ${book.title}`}
          />
          <p className="book-genre-text">{book.genre}</p>
          <p className="book-synopsis-text">{book.synopsis}</p>
          <p className="book-author-text">- {book.author}</p>

          <button
            type="button"
            onClick={() => openModal(book)}
            className="book-detail-button"
          >
            Lire plus
          </button>
        </div>
      ))}

      {selectedBook && (
        <BookModal book={selectedBook} closeModal={closeModal} />
      )}
    </div>
  );
}
