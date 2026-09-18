import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#ffefbb",
          color: "#000000",
          fontFamily: "sans-serif",
          border: "24px solid #ffc107",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 900, color: "#000000" }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 72,
            fontWeight: 900,
            fontStyle: "italic",
            lineHeight: 1.05,
          }}
        >
          Sell USDT & Get INR
        </div>
        <div style={{ marginTop: 20, fontSize: 28, color: "#ffc107" }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    size,
  );
}
