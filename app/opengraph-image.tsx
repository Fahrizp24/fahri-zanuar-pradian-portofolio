import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fahri Zanuar Pradian — Full-Stack Developer & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "80px",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle background glow */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.09) 0%, rgba(0,0,0,0) 70%)",
          }}
        />

        {/* Top bar: name & domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000000",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              F
            </div>
            <span
              style={{
                fontSize: "26px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#f5f5f5",
              }}
            >
              Fahri Zanuar Pradian
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "#a3a3a3",
              fontSize: "18px",
            }}
          >
            fahrizanuarpradian.tech
          </div>
        </div>

        {/* Middle: Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              fontSize: "62px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Full-Stack Developer &amp; AI Engineer
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#a1a1aa",
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Building real-world web apps, ESP32 IoT systems, and practical AI/Computer Vision solutions.
          </div>
        </div>

        {/* Bottom tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {[
            "Next.js",
            "TypeScript",
            "Python",
            "Computer Vision",
            "ESP32 IoT",
            "Polinema",
          ].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "10px 20px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                fontSize: "18px",
                color: "#e4e4e7",
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
