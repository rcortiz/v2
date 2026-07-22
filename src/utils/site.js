export const siteConfig = {
  name: "Ralph Ortiz",
  alternateName: "rcortiz.dev",
  title: "Ralph Ortiz — AI & Software Engineer",
  url: "https://rcortiz.dev",
  description:
    "I'm Ralph Ortiz, an AI & Software Engineer at VISEO Asia building accessible web products, Shopify storefronts, custom apps, and practical AI experiences.",
  image: "/opengraph-image",
};

export const createPageMetadata = ({ title, description, path }) => {
  const isHome = path === "/";
  const fullTitle = isHome ? siteConfig.title : `${title} — ${siteConfig.name}`;

  return {
    title: isHome ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: siteConfig.image,
          width: 1200,
          height: 630,
          alt: "Ralph Ortiz, AI and Software Engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.image],
    },
  };
};
