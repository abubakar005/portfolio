import { siteContent } from "@/lib/site-content";

export type ChatbotEntry = (typeof siteContent.chatbot.entries)[number];

export const chatbotEntries = siteContent.chatbot.entries;
export const chatbotFallbackAnswer = siteContent.chatbot.fallbackAnswer;
export const chatbotStarterMessage = siteContent.chatbot.starterMessage;

export const chatbotQuickQuestions = chatbotEntries
  .slice(0, siteContent.chatbot.quickQuestionLimit)
  .map((entry) => entry.question);

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function getQuestionTokens(question: string) {
  return normalize(question)
    .split(" ")
    .filter((token) => token.length > 3);
}

function getEntryScore(input: string, entry: ChatbotEntry) {
  const normalizedInput = normalize(input);
  const uniqueTerms = new Set([
    ...getQuestionTokens(entry.question),
    ...(entry.keywords ?? []).map((item) => normalize(item)),
  ]);

  let score = 0;

  for (const term of uniqueTerms) {
    if (!term) {
      continue;
    }

    if (normalizedInput.includes(term)) {
      score += term.includes(" ") ? 3 : 2;
    }
  }

  if (normalize(entry.question) === normalizedInput) {
    score += 4;
  }

  return score;
}

export function resolveChatbotAnswer(input: string) {
  const normalizedInput = normalize(input);

  if (!normalizedInput) {
    return chatbotFallbackAnswer;
  }

  let bestMatch: ChatbotEntry | null = null;
  let bestScore = 0;

  for (const entry of chatbotEntries) {
    const score = getEntryScore(normalizedInput, entry);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestScore > 0 && bestMatch ? bestMatch.answer : chatbotFallbackAnswer;
}
