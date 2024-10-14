import PropTypes from "prop-types";

export default function BookModal({ book, closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{book.title}</h2>
        <img
          src={
            `${import.meta.env.VITE_API_URL}/${book.cover_image}` ||
            "https://via.placeholder.com/150"
          }
          alt={`Couverture de ${book.title}`}
        />
        <p>{book.synopsis}</p>
        <button
          type="button"
          className="close-modal-button"
          onClick={closeModal}
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

BookModal.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover_image: PropTypes.string,
    synopsis: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};
