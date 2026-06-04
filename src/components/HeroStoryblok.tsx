import { useEffect, useState } from "react";

export function HeroStoryblok() {
  const [hero, setHero] = useState<any>(null);

  useEffect(() => {
    async function loadHero() {
      const token = import.meta.env.VITE_STORYBLOK_TOKEN;

      const response = await fetch(
        `https://api.storyblok.com/v2/cdn/stories/home?version=draft&token=${token}`,
      );

      const data = await response.json();

      const heroBlock = data.story.content.body.find(
        (block: any) => block.component === "HeroBanner",
      );

      setHero(heroBlock);
    }

    loadHero();
  }, []);

  if (!hero) {
    return <p>Chargement...</p>;
  }

  return (
    <g33-hero-banner
      title-text={hero.titleText}
      subtitle={hero.subtitle}
      image-url={hero.image?.filename}
      image-alt={hero.image?.alt}
      cta-label={hero.ctaLabel}
      cta-url={hero.ctaUrl?.url || "#"}
      cta-target={hero.ctaUrl?.target}
    />
  );
}
