import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import { TooltipAnchor } from "@/components/ui/link-tooltip";
import NavigationBar from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import InteractiveGridBackground from "@/components/interactive-grid-background";
import CommandPalette from "@/components/layout/command-palette";

import "./globals.css";
import { inter, spaceGrotesk } from "@/utils/fonts";
import { siteConfig } from "@/utils/site";

const siteUrl = new URL(siteConfig.url);

export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: siteUrl,
  applicationName: siteConfig.name,
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
      url: "https://github.com/rcortiz",
    },
  ],
  creator: "Ralph Ortiz",
  publisher: "Ralph Ortiz",
  category: "technology",
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
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
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      {
        url: "/hero-img-transparent.png",
        type: "image/png",
        sizes: "2400x2400",
      },
    ],
    shortcut: "/hero-img-transparent.png",
    apple: "/hero-img-transparent.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter} ${spaceGrotesk}`}>
        <InteractiveGridBackground />
        <div className="fixed left-4 top-4 z-[10000]">
          <TooltipAnchor
            href="#main-content"
            tooltip="Skip to main content"
            className="inline-flex -translate-y-24 border-2 border-primary bg-background px-4 py-2 font-space font-bold focus:translate-y-0"
          >
            Skip to content
          </TooltipAnchor>
        </div>
        <div className="relative grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
          <NavigationBar />
          <main id="main-content" className="relative z-10">
            {children}
          </main>
          <Toaster />
          <CommandPalette />
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
