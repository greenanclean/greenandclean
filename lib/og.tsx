import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "./site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** Branded 1200×630 social-share image used by every route's opengraph-image. */
export async function renderOg(eyebrow: string, title: string) {
  const [emblem, bold, extra, medium] = await Promise.all([
    readFile(join(process.cwd(), "assets", "emblem.png")),
    readFile(join(process.cwd(), "assets", "fonts", "poppins-latin-700-normal.woff")),
    readFile(join(process.cwd(), "assets", "fonts", "poppins-latin-800-normal.woff")),
    readFile(join(process.cwd(), "assets", "fonts", "poppins-latin-500-normal.woff")),
  ]);
  const emblemSrc = `data:image/png;base64,${emblem.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "Poppins",
          background: "linear-gradient(135deg, #06231a 0%, #0b3326 55%, #1a5a41 100%)",
        }}
      >
        {/* soft brand glows */}
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -140,
            width: 640,
            height: 640,
            borderRadius: 640,
            display: "flex",
            background: "radial-gradient(circle, rgba(84,180,53,0.45) 0%, rgba(84,180,53,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -160,
            bottom: -220,
            width: 560,
            height: 560,
            borderRadius: 560,
            display: "flex",
            background: "radial-gradient(circle, rgba(28,125,193,0.30) 0%, rgba(28,125,193,0) 70%)",
          }}
        />
        {/* big emblem */}
        <div
          style={{
            position: "absolute",
            right: 70,
            top: 150,
            width: 300,
            height: 300,
            borderRadius: 300,
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 0 18px rgba(201,236,122,0.18)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={emblemSrc} width={276} height={276} style={{ borderRadius: 276 }} />
        </div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ display: "flex", width: 84, height: 84, borderRadius: 84, background: "#fff", alignItems: "center", justifyContent: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
              <img src={emblemSrc} width={78} height={78} style={{ borderRadius: 78 }} />
            </div>
            <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
              <span style={{ color: "#c9ec7a" }}>Green</span>
              <span style={{ color: "rgba(255,255,255,0.7)", margin: "0 10px" }}>&amp;</span>
              <span style={{ color: "#ffffff" }}>Clean</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
            <div style={{ display: "flex", color: "#c9ec7a", fontSize: 24, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase" }}>
              {eyebrow}
            </div>
            <div style={{ display: "flex", color: "#fff", fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, marginTop: 18 }}>
              {title}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 18, color: "rgba(255,255,255,0.85)", fontSize: 26, fontWeight: 500 }}>
            <span>greenanclean.com</span>
            <span style={{ color: "#54b435" }}>•</span>
            <span>{site.phoneDisplay}</span>
            <span style={{ color: "#54b435" }}>•</span>
            <span style={{ color: "#c9ec7a" }}>&ldquo;{site.motto}&rdquo;</span>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Poppins", data: medium, weight: 500, style: "normal" },
        { name: "Poppins", data: bold, weight: 700, style: "normal" },
        { name: "Poppins", data: extra, weight: 800, style: "normal" },
      ],
    },
  );
}
