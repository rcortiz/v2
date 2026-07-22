import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ralph Ortiz, AI and Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#ffffff",
          backgroundImage:
            "linear-gradient(to right, rgba(10,10,10,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          color: "#0a0a0a",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "5px solid #0a0a0a",
            boxShadow: "14px 14px 0 #0a0a0a",
            display: "flex",
            flexDirection: "column",
            padding: "58px 70px",
            width: "900px",
          }}
        >
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800 }}>
            Ralph Ortiz
          </div>
          <div style={{ display: "flex", fontSize: 36, marginTop: 12 }}>
            AI &amp; Software Engineer
          </div>
          <div
            style={{
              borderTop: "4px solid #0a0a0a",
              display: "flex",
              fontSize: 25,
              marginTop: 36,
              paddingTop: 24,
            }}
          >
            AI | React | Next.js | Shopify
          </div>
        </div>
      </div>
    ),
    size,
  );
}
