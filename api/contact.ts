// api/contact.ts
import { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";
import { insertContactMessageSchema } from "../shared/schema";
import { randomUUID } from "crypto";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = {
        ...validatedData,
        id: randomUUID(),
        createdAt: new Date(),
      };
      res.status(200).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input", errors: err.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
