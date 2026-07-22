import Hero from "@/components/sections/hero";
import Layout from "@/components/layout/layout";

export const metadata = {
  title: { absolute: "Ralph Ortiz — AI & Software Engineer" },
  description:
    "Meet Ralph Ortiz, an AI and software engineer at VISEO specializing in AI, React, Next.js, Node.js, Shopify, and accessible product experiences.",
  alternates: { canonical: "/" },
};

export default function About() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}
