import { r as registerInstance, h, E as Env } from './index-DjZtJWUp.js';

const g33AlertCss = () => `:host{display:block}.alert{padding:12px 16px;border-radius:6px;margin-bottom:12px;font-weight:500}.alert--info{background:#e8f4fd;color:#0c4a6e}.alert--success{background:#dcfce7;color:#166534}.alert--warning{background:#fef3c7;color:#92400e}.alert--error{background:#fee2e2;color:#991b1b}`;

const G33Alert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    type = 'info';
    render() {
        return (h("div", { key: '8cd9b2c749dcfde1c194bcdc179b49912270a2ac', class: `alert alert--${this.type}` }, h("slot", { key: '18cd88151df6804848b4bec05b81c16ad5398817' })));
    }
};
G33Alert.style = g33AlertCss();

const g33ArticleCardCss = () => `:host{display:block;font-family:var(--g33-font-family)}.entry-title{font-weight:var(--g33-title-weight);line-height:1.2}.entry-content{line-height:var(--g33-line-height-default);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.entry-content p{margin-top:inherit}.post{max-width:720px}.featured-image img{width:100%;display:block}.cat-links::after{content:' · '}.entry-title a{color:var(--g33-color-secondary);text-decoration:none}.above-entry-meta{color:var(--g33-color-text-light);margin-top:var(--g33-spacing-md)}.button:focus-visible{outline:2px solid var(--g33-color-info);outline-offset:2px}.above-entry-meta{margin-bottom:0.75rem}.entry-header{margin-bottom:0.5rem}.entry-title{margin-bottom:0}`;

const G33ArticleCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    postTitle;
    category;
    excerpt;
    imageUrl;
    author;
    publishedAt;
    publishedDateTime;
    showCta = false;
    postUrl = '#';
    render() {
        return (h("article", { key: '70d26f727ca34728bb687dd0ad6a205cb43c29cf', class: "post actualite" }, h("div", { key: 'e2d076bac72d1fbd4aaed245253b6abaa183e743', class: "featured-image" }, h("a", { key: 'dc0d7c04ef0d5a84f042fc6c7e79ce8b5665f16e', href: this.postUrl }, h("img", { key: 'addbe7e68d5cdbe2cb0b38a1e7e571f364cee1e4', src: this.imageUrl, alt: this.postTitle }))), h("div", { key: 'c0bf1c1c2f73e8ae9aa07915d5628d43d4b2eeac', class: "article-content" }, h("div", { key: 'ca0e6fbecea3755c83c60c203854feef129beeb9', class: "above-entry-meta" }, h("span", { key: '760744d46d6964510dcbe0356b209ccb2289ad82', class: "cat-links" }, this.category), h("span", { key: '32c088e6c585c5013f8d26345af9df532720201c', class: "posted-on" }, h("time", { key: '616627cd4ca3ef1262bf4538b91e4499ec5f42da', class: "entry-date", dateTime: this.publishedDateTime }, this.publishedAt))), h("header", { key: '754184ec06ca4f6bb8083692f07fe08cc5839ab5', class: "entry-header" }, h("h2", { key: 'fabdcad27be3ff0c1e6c6ea346bb5aef7c3f11d3', class: "entry-title" }, h("a", { key: '2e46c208f972235c2925b93ee3b822eb81d1aee3', href: this.postUrl }, this.postTitle))), h("div", { key: '8bd9967e8a299a8e823e648cccb190081f68ce7f', class: "entry-content clearfix" }, this.excerpt && h("p", { key: '7c8b0ebdcc4f27e6f5d3e6d4d2dc5e1c28039faf' }, this.excerpt), this.showCta && (h("a", { key: 'a67b38e0204d8b914ec0355e02d0ca956c61d6d5', href: this.postUrl, "aria-label": `Lire la suite : ${this.postTitle}`, target: "_blank", rel: "noopener noreferrer" }, h("g33-button", { key: '2e817e291fe672ce7bb952fa66ea9a4baf2e7335', variant: "secondary" }, "Lire la suite")))))));
    }
};
G33ArticleCard.style = g33ArticleCardCss();

const g33ButtonCss = () => `:host{display:inline-block;font-family:var(--g33-font-family)}.button{border:0;border-radius:var(--g33-radius-md);padding:var(--g33-spacing-sm) var(--g33-spacing-md);font-weight:var(--g33-font-weight-semibold);cursor:pointer;transition:background-color 0.2s ease,     border-color 0.2s ease,     color 0.2s ease}.button--primary{background:var(--g33-color-primary);color:var(--g33-color-white)}.button--primary:hover:not(:disabled){background:var(--g33-color-primary-hover)}.button--secondary{background:var(--g33-color-secondary);color:var(--g33-color-white);border:var(--g33-border-width) solid var(--g33-color-secondary)}.button--secondary:hover:not(:disabled){opacity:0.9}.button--ghost{background:transparent;color:var(--g33-color-white);border:var(--g33-border-width) solid var(--g33-color-white)}.button--ghost:hover:not(:disabled){background:var(--g33-color-white);color:var(--g33-color-primary)}.button:disabled{opacity:0.5;cursor:not-allowed}.button--sm{padding:var(--g33-spacing-xs) var(--g33-spacing-sm);font-size:var(--g33-font-size-xs)}.button--md{padding:var(--g33-spacing-sm) var(--g33-spacing-md);font-size:var(--g33-font-size-sm)}.button--lg{padding:var(--g33-spacing-md) var(--g33-spacing-lg);font-size:var(--g33-font-size-md)}.button:focus-visible{outline:2px solid var(--g33-color-info);outline-offset:2px}`;

const G33Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    variant = 'primary';
    size = 'md';
    disabled = false;
    render() {
        return (h("button", { key: '3eb297e3881c8672104ae672496db2bcbb41f16a', class: `button button--${this.variant} button--${this.size}`, disabled: this.disabled }, h("slot", { key: 'd2a1d748abf998770a960d6f0a419c0de8edc60c' })));
    }
};
G33Button.style = g33ButtonCss();

const g33HeroBannerCss = () => `:host{display:block;font-family:var(--g33-font-family)}.hero-banner{position:relative;min-height:400px;display:flex;align-items:center;overflow:hidden;border-radius:var(--g33-radius-lg)}.hero-banner__image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.hero-banner__overlay{position:absolute;inset:0;background:rgba(0, 0, 0, 0.45)}.hero-banner__content{position:relative;z-index:1;padding:var(--g33-spacing-xl);color:var(--g33-color-white);max-width:700px}.hero-banner__content h1{margin:0 0 var(--g33-spacing-md);font-size:var(--g33-font-size-xl);font-weight:var(--g33-font-weight-black);line-height:1.1}.hero-banner__content p{margin:0 0 var(--g33-spacing-lg);font-size:var(--g33-font-size-md);line-height:var(--g33-line-height-default)}.hero-banner__content a{text-decoration:none}.button:focus-visible{outline:2px solid var(--g33-color-info);outline-offset:2px}`;

const G33HeroBanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    titleText;
    subtitle;
    imageUrl;
    imageAlt;
    ctaLabel;
    ctaUrl;
    ctaTarget;
    render() {
        return (h("section", { key: '81ea532d36b0c87909a173b86373062a8a40f694', class: "hero-banner" }, this.imageUrl && h("img", { key: 'd041ba6a6508962ac004db4028e395b43e4e4d9c', class: "hero-banner__image", src: this.imageUrl, alt: this.imageAlt || '' }), h("div", { key: '33c8bd024f9793b088dee7cb867b54a16af8816f', class: "hero-banner__overlay" }), h("div", { key: 'ad1c60725d6ea526a29c430e8deacceff1a07921', class: "hero-banner__content" }, h("h1", { key: 'c13f71654173eec8dd96bc87ca7a6f62047c43d2' }, this.titleText), this.subtitle && h("p", { key: 'b8ba9c1fa69bc4aaaaa703935c82d98b5d9077ce' }, this.subtitle), this.ctaUrl && this.ctaLabel && (h("a", { key: '56ce9cba06a3660d6a4a32352d1a4bec5613a6de', href: this.ctaUrl, target: this.ctaTarget, rel: this.ctaTarget === '_blank' ? 'noopener noreferrer' : undefined }, h("g33-button", { key: '7992f296c918e0c1899189ebbd953adb6d7d90db', variant: "ghost" }, this.ctaLabel))))));
    }
};
G33HeroBanner.style = g33HeroBannerCss();

const g33ShowcaseCss = () => `:host{display:block;font-family:var(--g33-font-family)}main{padding:32px}section{margin-top:32px}.demo-row{display:flex;gap:12px;margin-bottom:12px}g33-button{margin-right:12px}`;

const G33Showcase = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    hero;
    async componentWillLoad() {
        const token = Env.STORYBLOK_TOKEN;
        const response = await fetch(`https://api.storyblok.com/v2/cdn/stories/home?version=draft&token=${token}`);
        const data = await response.json();
        this.hero = data.story.content.body.find(block => block.component === 'HeroBanner');
    }
    render() {
        return (h("main", { key: 'a5b4f33f5f9183ce0a9c5552cdaa58acddcebc9a' }, h("h1", { key: '72f9582e7492398a000b51904f4c0cb2de956c9d' }, "G33 Design System"), h("section", { key: '81705e85f49b0a5bd0b19329b7bd7cc3d94e6a1f' }, h("h2", { key: '19887059e26683abf3998a10ca88d6a9fbd175f2' }, "Buttons"), h("div", { key: 'c21983a3c8dc49a8058847d02bab034e84fca7ab', class: "demo-row" }, h("g33-button", { key: '8f72d35436487dd202ff9d2e8b8ac71dc45df8da', size: "sm" }, "Petit"), h("g33-button", { key: 'be7c4253915436d9c9b69bc131950695e55dfbe6', size: "md" }, "Moyen"), h("g33-button", { key: 'bcf5a9c9e82b339b9c42e28740661edf4eff7ba4', size: "lg" }, "Grand")), h("div", { key: '3136fb9fe1c139d1be2d625135462f9ca04771a1', class: "demo-row" }, h("g33-button", { key: '578c766423d88dbfe4e7b104633b08e0e326506d', variant: "secondary" }, "Secondaire"), h("g33-button", { key: 'b4316e2b784ab6aaa2d7bfe01af234e96a028e91', variant: "secondary", disabled: true }, "D\u00E9sactiv\u00E9"))), h("section", { key: '660e30182bcc160014bd5569d2b22d572d6c01ac' }, h("h2", { key: '7ed9c247e9495f02880d813048ae1557deb69097' }, "Alerts"), h("g33-alert", { key: 'c3901395fbf682c587c46c98a65f99e16aec3d44', type: "success" }, "Article publi\u00E9 avec succ\u00E8s"), h("g33-alert", { key: 'fbd09d5ee0d76ceb82e66492cedf0ddcb05c8df4', type: "warning" }, "Article en cours d'\u00E9dition"), h("g33-alert", { key: 'a2d76c8cef94866c31973d2af684f95e43b27aa6', type: "error" }, "Article supprim\u00E9")), h("section", { key: 'de2029e6fe72aa776d8c92011599341aaa3beb28' }, h("h2", { key: '76ef4f4a2f4946c07fea7b884e58bbd03eaf0b6d' }, "Article card"), h("g33-article-card", { key: '9e9a8cf83d7d4d458a6b88f03d5113667e99d096', postTitle: "Christophe Dugarry : \u00AB On a un pr\u00E9sident, un actionnaire, qui est transparent. Il n\u2019y a rien d\u2019humain dans ce club. \u00BB", category: "M\u00E9dias", excerpt: "Dans l\u2019\u00E9mission Rothen s\u2019enflamme (RMC), Christophe Dugarry a donn\u00E9 son avis sur le sujet Cannes, Bordeaux, les clubs historiques sont-ils...", imageUrl: "https://www.girondins33.com/storage/2024/02/logo-girondins-bordeaux-sc-1-800x445.webp", author: "Julien", publishedAt: "27 f\u00E9vrier 2025", publishedDateTime: "2025-02-27", postUrl: "https://www.girondins33.com/Actualites/72512-christophe-dugarry-on-a-un-president-un-actionnaire-qui-est-transparent-il-ny-a-rien-dhumain-dans-ce-club" })), h("section", { key: '89625e94a670d114a9591a3711ba7f5b01ced65a' }, h("h2", { key: 'df16a5d1569d3754a43b263eafa4d883715577f2' }, "Hero simple"), h("g33-hero-banner", { key: '3740eb834d996c666d36b2c7b659c72e0d0b0394', titleText: this.hero.titleText, imageUrl: this.hero.image?.filename }), h("h2", { key: '5a7d8ae77f6f03601f5aa204bf532d88090e1324' }, "Hero avec sous-titre"), h("g33-hero-banner", { key: '98eb8175bd42a9f8f0c2582b36d9c2d9ce3e0e5b', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename }), h("h2", { key: '5de366589a97e28ed87743c465e262465b217d1a' }, "Hero"), h("g33-hero-banner", { key: 'd60b15cc99649fa2241cb0c0fd63f6301135262e', titleText: this.hero.titleText, subtitle: this.hero.subtitle, imageUrl: this.hero.image?.filename, imageAlt: this.hero.image?.alt, ctaLabel: this.hero.ctaLabel, ctaUrl: this.hero.ctaUrl?.url || '#', ctaTarget: this.hero.ctaUrl?.target }))));
    }
};
G33Showcase.style = g33ShowcaseCss();

export { G33Alert as g33_alert, G33ArticleCard as g33_article_card, G33Button as g33_button, G33HeroBanner as g33_hero_banner, G33Showcase as g33_showcase };
