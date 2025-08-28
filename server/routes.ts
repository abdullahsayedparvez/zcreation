// server/routes.ts
import { Express } from "express";
import { z } from "zod";
import { randomUUID } from "crypto";
import { insertContactMessageSchema } from "../shared/schema.js"; // note .js for ESM after build

export async function registerRoutes(app: Express): Promise<void> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);

      const message = {
        ...validatedData,
        id: randomUUID(),
        createdAt: new Date(),
      };

      res.json(message);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });
}
