// Batu & Sepeda — topic pages framework.
// 33 distinct guide topics, each in Indonesian (id) and English (en).
// Operational facts (prices, hours, venue status) are framed as "confirm on site"
// and attributed to public sources; nothing here is presented as live or guaranteed.

export interface TopicSection {
  heading: string;
  body: string[];
  note?: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicSource {
  label: string;
  url: string;
}

export interface TopicContent {
  slug: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: TopicSection[];
  faq: TopicFaq[];
  sources: TopicSource[];
  updated: string;
  checked: string;
}

export interface Topic {
  key: string;
  group: string;
  id: TopicContent;
  en: TopicContent;
  related: string[];
}

export const TOPIC_GROUPS: { id: string; idLabel: string; enLabel: string }[] = [
  { id: "visit", idLabel: "Kunjungan & Akses", enLabel: "Visit & Access" },
  { id: "history", idLabel: "Tempat & Sejarah", enLabel: "Place & History" },
  { id: "food", idLabel: "Makan & Minum", enLabel: "Food & Drink" },
  { id: "nearby", idLabel: "Wisata Sekitar", enLabel: "Nearby Sights" },
  { id: "routes", idLabel: "Rute & Itinerari", enLabel: "Routes & Itineraries" },
];

import { visitTopics } from "./topics-visit";
import { placeTopics } from "./topics-place";
import { foodTopics } from "./topics-food";
import { nearbyTopics } from "./topics-nearby";
import { routeTopics } from "./topics-routes";

export const TOPICS: Topic[] = [
  ...visitTopics,
  ...placeTopics,
  ...foodTopics,
  ...nearbyTopics,
  ...routeTopics,
];

export const topicKeys: string[] = TOPICS.map((t) => t.key);

export function getTopic(key: string, lang: "id" | "en"): TopicContent | undefined {
  const t = TOPICS.find((x) => x.key === key);
  return t ? t[lang] : undefined;
}

export function getTopicBySlug(slug: string, lang: "id" | "en"): { topic: Topic; content: TopicContent } | undefined {
  const t = TOPICS.find((x) => x[lang].slug === slug);
  return t ? { topic: t, content: t[lang] } : undefined;
}
