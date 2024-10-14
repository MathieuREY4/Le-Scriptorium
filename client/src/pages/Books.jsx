import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import BookModal from "../components/BookModal";
import "../styles/Book.css";

export default function Books() {
  const books = useLoaderData();
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="books-page-container">
      {books.length === 0 ? (
        <p>Aucun livre trouvé.</p>
      ) : (
        books.map((book) => (
          <div className="book-card-container" key={book.id || book.title}>
            <h3 className="book-title-text">{book.title}</h3>
            <img
              className="book-cover-image"
              src={
                `${import.meta.env.VITE_API_URL}/${book.cover_image}` ||
                "https://via.placeholder.com/150"
              }
              alt={`Couverture de ${book.title}`}
            />
            <p className="book-genre-text">{book.genres}</p>
            <p className="book-synopsis-text">{book.synopsis}</p>
            <p className="book-author-text">
              - {book.author || "Auteur inconnu"}
            </p>

            <button
              type="button"
              onClick={() => openModal(book)}
              className="book-detail-button"
            >
              Lire plus
            </button>
          </div>
        ))
      )}

      {selectedBook && (
        <BookModal book={selectedBook} closeModal={closeModal} />
      )}
    </div>
  );
}
