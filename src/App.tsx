import "./App.css";
import { HeroStoryblok } from "./components/HeroStoryblok";
import { LatestArticles } from "./components/LatestArticles";

function App() {
  return (
    <main>
      <h1>React Consumer</h1>
      <div className="hero-section">
        <g33-hero-banner
          title-text="Girondins33 Design System"
          subtitle="Consommé depuis React"
          image-url="https://raw.githubusercontent.com/petermikitsh/stencil-react/HEAD/hero.png"
          image-alt="Stencil + React"
          cta-label="Découvrir"
          cta-url="https://github.com/juliencap/g33-stencil-design-system"
        />
      </div>

      <div className="hero-section">
        <HeroStoryblok />
      </div>

      <LatestArticles />
    </main>
  );
}

export default App;
