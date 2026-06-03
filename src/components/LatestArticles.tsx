import { useEffect, useState } from "react";

type Article = {
  id: number;
  title: {
    rendered: string;
  };
  link: string;
  date: string;
};

export function LatestArticles() {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch(
      "https://www.girondins33.com/wp-json/wp/v2/actualite?per_page=1&orderby=date&order=desc&_embed",
    )
      .then((response) => response.json())
      .then((data) => {
        setArticle(data[0]);
      })
      .catch((error) => {
        console.error("Erreur API WordPress", error);
      });
  }, []);

  if (!article) {
    return <p>Chargement...</p>;
  }

  return (
    <section>
      <h2>Dernière actualité</h2>

      <g33-article-card
        post-title={article.title.rendered}
        category="Actualités"
        excerpt={article.yoast_head_json.og_description}
        image-url={article.yoast_head_json.og_image?.[0]?.url}
        image-alt={article.title.rendered}
        author={article._embedded.author[0].name}
        published-at={new Date(article.date).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
        published-date-time={article.date.split("T")[0]}
        post-url={article.link}
      />
    </section>
  );
}
