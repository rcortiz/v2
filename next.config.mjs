/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons"],
  },
  async headers() {
    return [
      {
        source: "/:path*.pdf",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
