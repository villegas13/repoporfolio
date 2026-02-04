
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";
import { SYSTEM_INSTRUCTION } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const sendMessageToAssistant = async (history: Message[], userInput: string): Promise<string> => {
  try {
    const chat = ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const response = await chat;
    return response.text || "I'm sorry, I couldn't process that. Please contact me directly.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error communicating with my AI. Please use the contact form below.";
  }
};
