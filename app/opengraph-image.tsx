import { ImageResponse } from "next/og";

export const alt = "Mumbai Place — Modern Indian in Brooklyn";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #1a1714 0%, #241d18 55%, #2b221b 100%)",
          color: "#fffdf8",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "6px",
              height: "56px",
              background: "#c9a15b",
            }}
          />
          <div
            style={{
              fontSize: "20px",
              letterSpacing: "14px",
              textTransform: "uppercase",
              color: "#c9a15b",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Brooklyn
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <div
            style={{
              fontSize: "132px",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              fontWeight: 500,
            }}
          >
            Mumbai Place
          </div>
          <div
            style={{
              fontSize: "30px",
              lineHeight: 1.4,
              color: "#a39585",
              maxWidth: "880px",
              fontFamily: "system-ui, sans-serif",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            Modern interpretations of classic Indian dishes, served in two
            rooms — Prospect Heights and Williamsburg.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "18px",
            color: "#a39585",
            borderTop: "1px solid rgba(255, 253, 248, 0.12)",
            paddingTop: "28px",
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          <div>mumbaiplacenyc.com</div>
          <div>Prospect Heights · Williamsburg</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
