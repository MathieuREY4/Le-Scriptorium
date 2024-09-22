import "../styles/BookCarousel.css";

export default function BookCarousel() {
  return (
    <section className="book-carousel">
      <div className="carousel-arrow left-arrow">&lt;</div>
      <div className="carousel-container">
        <div className="book-card">Book 1</div>
        <div className="book-card">Book 2</div>
        <div className="book-card">Book 3</div>
        <div className="book-card">Book 4</div>
        <div className="book-card">Book 5</div>
      </div>
      <div className="carousel-arrow right-arrow">&gt;</div>
    </section>
  );
}
