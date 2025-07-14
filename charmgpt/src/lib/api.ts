import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // true if cookies; false for JWT via header
});

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export const fetchAIResponse = async (
  messageHistory: ChatMessage[],
  userInput: string,
  tone: string
): Promise<string> => {
  const systemPrompt: ChatMessage = {
    role: "system",
    content: `You are CharmGPT, an AI texting coach. Your job is to help users craft confident, playful, and charismatic responses to text messages. Match the tone: ${tone}.`
  };

  const messages = [
    systemPrompt,
    ...messageHistory,
    { role: "user", content: userInput }
  ];

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "deepseek/deepseek-chat-v3-0324:free",
      messages
    })
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a reply.";
};

export default api;