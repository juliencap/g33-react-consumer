import { useEffect, useState } from "react";
import { decodeHtml } from "../utils/html";
import "./LatestNewsGrid.css";

type News = {
  id: number;
  title: {
    rendered: string;
  };
  link: string;
  date: string;
  yoast_head_json: {
    og_description?: string;
    og_image?: {
      url: string;
    }[];
  };
};

const NEWS_LIMIT = 6;

export function LatestNewsGrid() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    fetch(
      `https://www.girondins33.com/wp-json/wp/v2/actualite?per_page=${NEWS_LIMIT}&orderby=date&order=desc`,
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
      })
      .catch((error) => {
        console.error("Erreur API WordPress", error);
      });
  }, []);

  if (!news.length) {
    return <p>Chargement...</p>;
  }

  return (
    <section>
      <h2>Dernières actualités</h2>

      <div className="news-grid">
        {news.map((item) => (
          <g33-article-card
            key={item.id}
            post-title={decodeHtml(item.title.rendered)}
            category="Actualités"
            excerpt={decodeHtml(item.yoast_head_json?.og_description || "")}
            image-url={item.yoast_head_json?.og_image?.[0]?.url || ""}
            image-alt={item.title.rendered}
            author="Girondins33"
            published-at={new Date(item.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            published-date-time={item.date.split("T")[0]}
            post-url={item.link}
          />
        ))}
      </div>
    </section>
  );
}
