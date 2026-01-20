"use client";

import * as React from "react";
import { Box, alpha } from "@mui/material";

export type EmotionType =
  | "joy"
  | "happy"
  | "excited"
  | "anxious"
  | "confused"
  | "sad"
  | "angry"
  | "calm"
  | "sleepy"
  | "love"
  | "surprised"
  | "stressed"
  | "wink"
  | "shy"
  | "cool"
  | "cry"
  | "dizzy"
  | "proud";

type StickerType =
  | "sparkle"
  | "zzz"
  | "stars"
  | "music"
  | "heart"
  | "flower"
  | "fire"
  | "ice"
  | "cloud"
  | "lightning"
  | "idea"
  | "check"
  | "warning"
  | "question"
  | "exclaim"
  | "crown"
  | "butterfly"
  | "leaf"; // ✅ 18

type Props = {
  type: EmotionType;
  size?: number; // default 112
};

export default function KawaiiFace({ type, size = 112 }: Props) {
  const base = {
    width: size,
    height: Math.round(size * 0.82),
    borderRadius: "50%",
    position: "relative" as const,
    background: `
      radial-gradient(140px 90px at 30% 25%, ${alpha("#fff", 0.65)} 0%, transparent 60%),
      radial-gradient(120px 90px at 75% 30%, ${alpha("#fff", 0.45)} 0%, transparent 62%),
      ${alpha("#fff", 0.26)}
    `,
    border: `1px solid ${alpha("#fff", 0.62)}`,
    boxShadow: `0 18px 40px ${alpha("#000", 0.10)}`,
    backdropFilter: "blur(10px)",
    overflow: "hidden",
  };

  const cheeks = (variant: "soft" | "shy" | "none") => {
    if (variant === "none") return null;
    const opacity = variant === "shy" ? 0.55 : 0.42;
    const sizeC = Math.round(size * 0.13);

    return (
      <>
        <Box
          sx={{
            width: sizeC,
            height: sizeC,
            borderRadius: "100%",
            background: alpha("#FF6FA3", opacity),
            position: "absolute",
            top: Math.round(size * 0.50),
            left: Math.round(size * 0.16),
            filter: "blur(0.2px)",
          }}
        />
        <Box
          sx={{
            width: sizeC,
            height: sizeC,
            borderRadius: "100%",
            background: alpha("#FF6FA3", opacity),
            position: "absolute",
            top: Math.round(size * 0.50),
            right: Math.round(size * 0.16),
            filter: "blur(0.2px)",
          }}
        />
      </>
    );
  };

  const eyeDot = (side: "l" | "r") => ({
    width: Math.round(size * 0.095),
    height: Math.round(size * 0.095),
    borderRadius: "100%",
    background: alpha("#1a1a1a", 0.62),
    position: "absolute" as const,
    top: Math.round(size * 0.28),
    left: side === "l" ? Math.round(size * 0.27) : "auto",
    right: side === "r" ? Math.round(size * 0.27) : "auto",
    boxShadow: `0 8px 14px ${alpha("#000", 0.12)}`,
  });

  const eyeShine = (side: "l" | "r") => ({
    width: Math.round(size * 0.035),
    height: Math.round(size * 0.035),
    borderRadius: "100%",
    background: alpha("#fff", 0.85),
    position: "absolute" as const,
    top: Math.round(size * 0.30),
    left: side === "l" ? Math.round(size * 0.30) : "auto",
    right: side === "r" ? Math.round(size * 0.30) : "auto",
  });

  const eyeClosed = (side: "l" | "r") => ({
    width: Math.round(size * 0.17),
    height: Math.round(size * 0.10),
    borderBottom: `4px solid ${alpha("#1a1a1a", 0.55)}`,
    borderRadius: "0 0 18px 18px",
    position: "absolute" as const,
    top: Math.round(size * 0.28),
    left: side === "l" ? Math.round(size * 0.22) : "auto",
    right: side === "r" ? Math.round(size * 0.22) : "auto",
  });

  const eyeWink = (side: "l" | "r") => ({
    width: Math.round(size * 0.17),
    height: 0,
    borderTop: `4px solid ${alpha("#1a1a1a", 0.55)}`,
    borderRadius: 10,
    position: "absolute" as const,
    top: Math.round(size * 0.32),
    left: side === "l" ? Math.round(size * 0.22) : "auto",
    right: side === "r" ? Math.round(size * 0.22) : "auto",
  });

  const eyeHeart = (side: "l" | "r") => ({
    position: "absolute" as const,
    top: Math.round(size * 0.22),
    left: side === "l" ? Math.round(size * 0.22) : "auto",
    right: side === "r" ? Math.round(size * 0.22) : "auto",
    fontSize: Math.round(size * 0.18),
    lineHeight: 1,
    color: alpha("#F52900", 0.88),
    filter: "drop-shadow(0 8px 14px rgba(0,0,0,0.10))",
  });

  const eyeStar = (side: "l" | "r") => ({
    position: "absolute" as const,
    top: Math.round(size * 0.21),
    left: side === "l" ? Math.round(size * 0.22) : "auto",
    right: side === "r" ? Math.round(size * 0.22) : "auto",
    fontSize: Math.round(size * 0.28),
    lineHeight: 1,
    color: alpha("#F2E830", 0.62),
  });

  const spiral = (side: "l" | "r") => ({
    position: "absolute" as const,
    top: Math.round(size * 0.23),
    left: side === "l" ? Math.round(size * 0.22) : "auto",
    right: side === "r" ? Math.round(size * 0.22) : "auto",
    fontSize: Math.round(size * 0.18),
    lineHeight: 1,
    color: alpha("#1a1a1a", 0.55),
  });

  const browAngry = (side: "l" | "r") => ({
    position: "absolute" as const,
    top: Math.round(size * 0.16),
    left: side === "l" ? Math.round(size * 0.24) : "auto",
    right: side === "r" ? Math.round(size * 0.24) : "auto",
    width: Math.round(size * 0.18),
    borderTop: `4px solid ${alpha("#1a1a1a", 0.50)}`,
    transform: side === "l" ? "rotate(18deg)" : "rotate(-18deg)",
    borderRadius: 8,
  });

  const tear = (side: "l" | "r") => ({
    position: "absolute" as const,
    top: Math.round(size * 0.41),
    left: side === "l" ? Math.round(size * 0.33) : "auto",
    right: side === "r" ? Math.round(size * 0.33) : "auto",
    width: Math.round(size * 0.07),
    height: Math.round(size * 0.11),
    borderRadius: "0 0 12px 12px",
    background: alpha("#5AAEFF", 0.65),
  });

  const sweat = {
    position: "absolute" as const,
    top: Math.round(size * 0.16),
    right: Math.round(size * 0.14),
    width: Math.round(size * 0.08),
    height: Math.round(size * 0.12),
    borderRadius: "0 0 12px 12px",
    background: alpha("#5AAEFF", 0.55),
    transform: "rotate(18deg)",
  };

  const mouth = (style: "smile" | "o" | "wave" | "flat" | "tiny" | "grin") => {
    const common = {
      position: "absolute" as const,
      left: "50%",
      transform: "translateX(-50%)",
      top: Math.round(size * 0.52),
    };

    if (style === "smile")
      return {
        ...common,
        width: Math.round(size * 0.25),
        height: Math.round(size * 0.12),
        borderBottom: `4px solid ${alpha("#1a1a1a", 0.58)}`,
        borderRadius: "0 0 18px 18px",
      };

    if (style === "grin")
      return {
        ...common,
        width: Math.round(size * 0.26),
        height: Math.round(size * 0.10),
        borderBottom: `4px solid ${alpha("#1a1a1a", 0.58)}`,
        borderRadius: "0 0 18px 18px",
        boxShadow: `0 10px 18px ${alpha("#000", 0.08)}`,
      };

    if (style === "o")
      return {
        ...common,
        width: Math.round(size * 0.12),
        height: Math.round(size * 0.12),
        borderRadius: "100%",
        background: alpha("#1a1a1a", 0.52),
      };

    if (style === "wave")
      return {
        ...common,
        width: Math.round(size * 0.22),
        height: Math.round(size * 0.10),
        borderTop: `4px solid ${alpha("#1a1a1a", 0.55)}`,
        borderRadius: "16px 16px 0 0",
      };

    if (style === "flat")
      return {
        ...common,
        width: Math.round(size * 0.18),
        height: 0,
        borderTop: `4px solid ${alpha("#1a1a1a", 0.55)}`,
        borderRadius: 8,
      };

    return {
      ...common,
      width: Math.round(size * 0.10),
      height: Math.round(size * 0.10),
      borderRadius: "100%",
      background: alpha("#1a1a1a", 0.48),
    };
  };

  // ✅ type бүрийн preset
  const preset = (() => {
    switch (type) {
      case "love":
        return {
          cheeks: "soft" as const,
          eyes: "heart" as const,
          mouth: "smile" as const,
          extras: [] as const,
          stickers: ["heart", "sparkle", "flower"] as const,
        };
      case "excited":
        return {
          cheeks: "soft" as const,
          eyes: "star" as const,
          mouth: "grin" as const,
          extras: [] as const,
          stickers: ["sparkle", "stars", "music"] as const,
        };
      case "calm":
        return {
          cheeks: "soft" as const,
          eyes: "closed" as const,
          mouth: "smile" as const,
          extras: [] as const,
          stickers: ["leaf", "cloud"] as const,
        };
      case "sleepy":
        return {
          cheeks: "none" as const,
          eyes: "closed" as const,
          mouth: "tiny" as const,
          extras: ["zzz"] as const,
          stickers: ["zzz", "cloud"] as const,
        };
      case "angry":
        return {
          cheeks: "none" as const,
          eyes: "dot" as const,
          mouth: "flat" as const,
          extras: ["brow"] as const,
          stickers: ["fire", "lightning"] as const,
        };
      case "sad":
        return {
          cheeks: "soft" as const,
          eyes: "dot" as const,
          mouth: "wave" as const,
          extras: ["tear"] as const,
          stickers: ["cloud"] as const,
        };
      case "anxious":
      case "stressed":
        return {
          cheeks: "none" as const,
          eyes: "dot" as const,
          mouth: "flat" as const,
          extras: ["sweat"] as const,
          stickers: ["warning", "exclaim"] as const,
        };
      case "confused":
        return {
          cheeks: "soft" as const,
          eyes: "dot" as const,
          mouth: "flat" as const,
          extras: ["tilt"] as const,
          stickers: ["question"] as const,
        };
      case "surprised":
        return {
          cheeks: "soft" as const,
          eyes: "dot" as const,
          mouth: "o" as const,
          extras: [] as const,
          stickers: ["question", "sparkle"] as const,
        };

      // ✅ нэмэлтүүд
      case "wink":
        return {
          cheeks: "soft" as const,
          eyes: "wink" as const,
          mouth: "smile" as const,
          extras: [] as const,
          stickers: ["sparkle", "check"] as const,
        };
      case "shy":
        return {
          cheeks: "shy" as const,
          eyes: "dot" as const,
          mouth: "tiny" as const,
          extras: ["blushLines"] as const,
          stickers: ["flower"] as const,
        };
      case "cool":
        return {
          cheeks: "none" as const,
          eyes: "dot" as const,
          mouth: "grin" as const,
          extras: ["glasses"] as const,
          stickers: ["crown"] as const,
        };
      case "cry":
        return {
          cheeks: "soft" as const,
          eyes: "dot" as const,
          mouth: "wave" as const,
          extras: ["tearHeavy"] as const,
          stickers: ["cloud"] as const,
        };
      case "dizzy":
        return {
          cheeks: "none" as const,
          eyes: "spiral" as const,
          mouth: "tiny" as const,
          extras: ["stars"] as const,
          stickers: ["stars", "question"] as const,
        };
      case "proud":
        return {
          cheeks: "soft" as const,
          eyes: "dot" as const,
          mouth: "grin" as const,
          extras: [] as const,
          stickers: ["crown", "sparkle"] as const,
        };

      default:
        return {
          cheeks: "soft" as const,
          eyes: "dot" as const,
          mouth: "smile" as const,
          extras: [] as const,
          stickers: ["sparkle"] as const,
        };
    }
  })();

  const renderEyes = () => {
    switch (preset.eyes) {
      case "heart":
        return (
          <>
            <Box sx={eyeHeart("l")}>♥</Box>
            <Box sx={eyeHeart("r")}>♥</Box>
          </>
        );
      case "star":
        return (
          <>
            <Box sx={eyeStar("l")}>✦</Box>
            <Box sx={eyeStar("r")}>✦</Box>
          </>
        );
      case "closed":
        return (
          <>
            <Box sx={eyeClosed("l")} />
            <Box sx={eyeClosed("r")} />
          </>
        );
      case "wink":
        return (
          <>
            <Box sx={eyeWink("l")} />
            <Box sx={eyeDot("r")} />
            <Box sx={eyeShine("r")} />
          </>
        );
      case "spiral":
        return (
          <>
            <Box sx={spiral("l")}>＠</Box>
            <Box sx={spiral("r")}>＠</Box>
          </>
        );
      default:
        return (
          <>
            <Box sx={eyeDot("l")} />
            <Box sx={eyeDot("r")} />
            <Box sx={eyeShine("l")} />
            <Box sx={eyeShine("r")} />
          </>
        );
    }
  };

  const mouthStyle =
    type === "confused"
      ? { ...mouth("flat"), transform: "translateX(-50%) rotate(-6deg)" }
      : mouth(preset.mouth);

  // ✅ extras (өмнөх систем — хүсвэл устгаж болно)
  const extras = {
    zzz: (
      <Box
        sx={{
          position: "absolute",
          right: 50,
          top: 50,
          fontSize: Math.round(size * 0.14),
          opacity: 0.55,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        zZ
      </Box>
    ),
    brow: (
      <>
        <Box sx={browAngry("l")} />
        <Box sx={browAngry("r")} />
      </>
    ),
    tear: (
      <>
        <Box sx={tear("l")} />
        <Box sx={tear("r")} />
      </>
    ),
    tearHeavy: (
      <>
        <Box sx={{ ...tear("l"), height: Math.round(size * 0.15) }} />
        <Box sx={{ ...tear("r"), height: Math.round(size * 0.15) }} />
      </>
    ),
    sweat: <Box sx={sweat} />,
    tilt: (
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          transform: "rotate(-3deg)",
          opacity: 0.06,
          background: alpha("#000", 0.25),
          pointerEvents: "none",
        }}
      />
    ),
    blushLines: (
      <>
        <Box
          sx={{
            position: "absolute",
            top: Math.round(size * 0.54),
            left: Math.round(size * 0.10),
            width: Math.round(size * 0.16),
            height: 0,
            borderTop: `3px solid ${alpha("#FF6FA3", 0.38)}`,
            borderRadius: 8,
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: Math.round(size * 0.54),
            right: Math.round(size * 0.10),
            width: Math.round(size * 0.16),
            height: 0,
            borderTop: `3px solid ${alpha("#FF6FA3", 0.38)}`,
            borderRadius: 8,
            pointerEvents: "none",
          }}
        />
      </>
    ),
    glasses: (
      <Box
        sx={{
          position: "absolute",
          top: Math.round(size * 0.24),
          left: "50%",
          transform: "translateX(-50%)",
          width: Math.round(size * 0.72),
          height: Math.round(size * 0.20),
          borderRadius: "50% / 25%",
          border: `3px solid ${alpha("#1a1a1a", 0.35)}`,
          background: alpha("#fff", 0.12),
          pointerEvents: "none",
        }}
      />
    ),
    stars: (
      <Box
        sx={{
          position: "absolute",
          left: 50,
          bottom: 50,
          fontSize: Math.round(size * 0.12),
          opacity: 0.55,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        ✦✧
      </Box>
    ),
  } as const;

  // ✅ sticker system (18-аас ихгүй)
  const stickerMap: Record<StickerType, { text: string; color?: string }> = {
    sparkle: { text: "✧" },
    zzz: { text: "zZ" },
    stars: { text: "✦✧" },
    music: { text: "♪" },
    heart: { text: "♥", color: alpha("#FF4D86", 0.9) },
    flower: { text: "✿" },
    fire: { text: "🔥" },
    ice: { text: "❄" },
    cloud: { text: "☁" },
    lightning: { text: "⚡" },
    idea: { text: "💡" },
    check: { text: "✓" },
    warning: { text: "⚠" },
    question: { text: "?" },
    exclaim: { text: "!" },
    crown: { text: "♕" },
    butterfly: { text: "🦋" },
    leaf: { text: "🍃" },
  };

  const stickerSlots = [
    { top: 8, left: 10, bottom: undefined, right: undefined, rotate: -8, scale: 1.0, opacity: 0.70 },
    { top: 10, right: 10, bottom: undefined, left: undefined, rotate: 10, scale: 1.05, opacity: 0.62 },
    { bottom: 10, left: 12, top: undefined, right: undefined, rotate: -6, scale: 0.95, opacity: 0.58 },
  ] as const;

  const renderStickers = (stickers?: readonly StickerType[]) => {
    if (!stickers?.length) return null;

    // ✅ нүүрний цэвэрхэн байдлын төлөө 3-аас хэтрүүлэхгүй
    const take = stickers.slice(0, 3);

    return (
      <>
        {take.map((k, i) => {
          const slot = stickerSlots[i] ?? stickerSlots[0];
          const s = stickerMap[k];

          return (
            <Box
              key={`${k}-${i}`}
              sx={{
                position: "absolute",
                ...(slot.top != null ? { top: slot.top } : {}),
                ...(slot.bottom != null ? { bottom: slot.bottom } : {}),
                ...(slot.left != null ? { left: slot.left } : {}),
                ...(slot.right != null ? { right: slot.right } : {}),
                fontSize: Math.round(size * 0.13),
                lineHeight: 1,
                opacity: slot.opacity,
                transform: `rotate(${slot.rotate}deg) scale(${slot.scale})`,
                color: s.color ?? alpha("#1a1a1a", 0.60),
                textShadow: "0 10px 18px rgba(0,0,0,0.10)",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {s.text}
            </Box>
          );
        })}
      </>
    );
  };

  return (
    <Box sx={base}>
      {/* cheeks */}
      {cheeks(preset.cheeks)}

      {/* eyes */}
      {renderEyes()}

      {/* stickers */}
      {renderStickers(preset.stickers)}

      {/* extras */}
      {preset.extras.map((k) => (
        <React.Fragment key={k}>{extras[k]}</React.Fragment>
      ))}

      {/* mouth */}
      <Box sx={mouthStyle} />
    </Box>
  );
}
