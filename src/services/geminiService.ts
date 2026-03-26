import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function chatWithTutor(message: string, history: { role: string, text: string }[]) {
  const model = "gemini-3-flash-preview";
  
  const contents = [
    {
      role: "user",
      parts: [{ text: "Siz Turk tili o'qituvchisisiz. Ismingiz 'Asli'. Foydalanuvchilarga turk tilini o'rganishda yordam berasiz. Javoblaringizni o'zbek tilida bering, lekin turkcha misollar keltiring. Foydalanuvchi bilan turkcha gaplashishga harakat qiling va xatolarini to'g'rilang." }]
    },
    ...history.map(h => ({
      role: h.role === 'user' ? 'user' : 'model',
      parts: [{ text: h.text }]
    })),
    {
      role: "user",
      parts: [{ text: message }]
    }
  ];

  try {
    const response = await ai.models.generateContent({
      model,
      contents: contents as any,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Kechirasiz, hozircha javob bera olmayman. Iltimos, keyinroq urinib ko'ring.";
  }
}
