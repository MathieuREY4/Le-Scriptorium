import SectionButtons from "../components/SectionButtons";
import ArticleScrib from "../components/ArticleScrib";
import BookCarousel from "../components/BookCarousel";

import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <SectionButtons />
      <ArticleScrib />
      <BookCarousel />
    </div>
  );
}
