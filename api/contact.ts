import { VercelRequest, VercelResponse } from "@vercel/node";
import { insertContactMessageSchema } from "../shared/schema";
import { z } from "zod";
import { randomUUID } from "crypto";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);

      // Just return the message, don’t store it
      const message = {
        ...validatedData,
        id: randomUUID(),
        createdAt: new Date(),
      };

      return res.status(200).json(message);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // No GET route anymore since nothing is stored
  return res.status(405).json({ message: "Method not allowed" });
}
