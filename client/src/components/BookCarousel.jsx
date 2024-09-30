import "../styles/BookCarousel.css";
import Chimère from "../assets/images/chimère.jpg";

export default function BookCarousel() {
  const books = ["book-1", "book-2", "book-3", "book-4", "book-5"];

  return (
    <section className="book-carousel">
      <div className="carousel-arrow left-arrow">&lt;</div>
      <div className="carousel-container">
        {books.map((book) => (
          <div className="book-card" key={book}>
            <img
              src={Chimère}
              alt="Couverture du livre Chimère"
              className="book-image"
            />
          </div>
        ))}
      </div>
      <div className="carousel-arrow right-arrow">&gt;</div>
    </section>
  );
}
