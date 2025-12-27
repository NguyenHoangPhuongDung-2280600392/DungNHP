
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async summarizePost(title: string, content: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Tóm tắt ngắn gọn bài viết sau trong khoảng 2-3 câu bằng tiếng Việt: 
        Tiêu đề: ${title}
        Nội dung: ${content}`,
      });
      return response.text || "Không thể tạo tóm tắt vào lúc này.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Có lỗi xảy ra khi kết nối với AI.";
    }
  }

  async explainConcept(concept: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Giải thích khái niệm lập trình sau một cách đơn giản cho người mới bắt đầu: ${concept}. Trả lời bằng tiếng Việt.`,
      });
      return response.text || "Không tìm thấy thông tin giải thích.";
    } catch (error) {
       console.error("Gemini Error:", error);
       return "Có lỗi xảy ra khi kết nối với AI.";
    }
  }
}
