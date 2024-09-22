import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SectionButtons from "./components/SectionButtons";
import BookCarousel from "./components/BookCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <SectionButtons />
      <BookCarousel />
      <Footer />
    </div>
  );
}

export default App;
