import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import NavigationBar from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import BrutalistCursor from "@/components/brutalist-cursor";
import PageTransition from "@/components/page-transition";
// import CommandPalette from "@/components/layout/command-palette";

import "./globals.css";
import { inter, roboto, ceraRoundPro } from "@/utils/fonts";
// import { useCommandPaletteStore } from "@/store/store";

const siteUrl = new URL("https://rcortiz.dev");

export const metadata = {
  title: {
    default: "Ralph Ortiz — AI & Software Engineer",
    template: "%s — Ralph Ortiz",
  },
  description:
    "Portfolio of Ralph Ortiz, an AI and software engineer building performant, accessible products with AI, React, Next.js, Node.js, and Shopify.",
  metadataBase: siteUrl,
  applicationName: "Ralph Ortiz Portfolio",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Frontend",
    "Artificial Intelligence",
    "AI Engineer",
    "Full Stack",
    "Software Engineer",
    "Web Developer",
  ],
  authors: [
    {
      name: "Ralph Ortiz",
      url: "https://github.com/ralph-ortiz",
    },
  ],
  creator: "Ralph Ortiz",
  publisher: "Ralph Ortiz",
  category: "technology",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Ralph Ortiz Portfolio",
    title: "Ralph Ortiz — AI & Software Engineer",
    description:
      "AI and software engineer building performant, accessible products with AI, React, Next.js, Node.js, and Shopify.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ralph Ortiz, AI and Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ralph Ortiz — AI & Software Engineer",
    description:
      "AI and software engineer building performant, accessible products with AI, React, Next.js, Node.js, and Shopify.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ralph Ortiz",
  url: siteUrl.toString(),
  image: new URL("/hero-img-transparent.png", siteUrl).toString(),
  jobTitle: "AI & Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "VISEO",
    url: "https://asia.viseo.com/",
  },
  sameAs: [
    "https://github.com/rcortiz",
    "https://www.linkedin.com/in/ralphortiz/",
    "https://codepen.io/rcortiz",
    "https://dribbble.com/_rcortiz",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Shopify",
    "Artificial intelligence",
    "Frontend development",
    "Full stack development",
  ],
};

export default function RootLayout({ children }) {
  // const { toggle } = useCommandPaletteStore();

  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (
  //       ((e.metaKey || e.ctrlKey) && e.key === "k") ||
  //       ((e.metaKey || e.ctrlKey) && e.key === "K")
  //     ) {
  //       e.preventDefault();
  //       toggle();
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => window.removeEventListener("keydown", handleKeyDown);
  // }, [toggle]);
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter} ${roboto} ${ceraRoundPro}`}>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[10000] -translate-y-24 border-2 border-primary bg-background px-4 py-2 font-cera font-bold focus:translate-y-0"
        >
          Skip to content
        </a>
        <BrutalistCursor />
        <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
          <NavigationBar />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Toaster />
          {/* <CommandPalette /> */}
          {/* <div className="flex justify-center pb-6">
            <motion.div
              className="cursor-pointer rounded-full bg-background/80 px-4 py-2 backdrop-blur-sm"
              onClick={toggle}
              initial={{ opacity: 1, y: 10 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.04, opacity: 1, duration: 0.8 }}
            >
              <p className="text-xs text-primary">
                Press
                <code className="mx-2 rounded bg-gray-200 px-2 py-1 text-gray-800">
                  ⌘ + K
                </code>
                to open command palette
              </p>
            </motion.div>
          </div> */}
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
