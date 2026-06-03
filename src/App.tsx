import { LatestArticles } from "./components/LatestArticles";

function App() {
  return (
    <main>
      <h1>React Consumer</h1>

      <g33-hero-banner
        title-text="Girondins33 Design System"
        subtitle="Consommé depuis React"
        image-url="https://www.girondins33.com/storage/2024/02/matmut-atlantique-girondins-sc-1-800x445.webp"
        image-alt="Logo Girondins33"
        cta-label="Découvrir"
        cta-url="https://www.girondins33.com"
      />

      <LatestArticles />
    </main>
  );
}

export default App;
