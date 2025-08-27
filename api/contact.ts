import { VercelRequest, VercelResponse } from "@vercel/node";
import { insertContactMessageSchema } from "../shared/schema";
import { storage } from "../server/storage";
import { z } from "zod";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      return res.status(200).json(message);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  if (req.method === "GET") {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
