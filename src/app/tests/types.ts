import * as React from "react";

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
  // нэмэлтүүд (хэрэглэх бол)
  | "wink"
  | "shy"
  | "cool"
  | "cry"
  | "dizzy"
  | "proud";

export type TestItem = {
  id: number;
  key: string;
  title: string;
  icon: React.ReactNode;
  bg: string;
  accent: string;
  face: EmotionType;
};

export type TestGridProps = {
  onSelect?: (t: TestItem) => void;
};
