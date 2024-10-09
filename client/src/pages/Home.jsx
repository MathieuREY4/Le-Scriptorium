import Header from "../components/Header";
import SectionButtons from "../components/SectionButtons";
import ArticleScrib from "../components/ArticleScrib";
import BookCarousel from "../components/BookCarousel";

import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <SectionButtons />
      <ArticleScrib />
      <BookCarousel />
    </div>
  );
}
