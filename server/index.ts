import express2 from "express";

// ✅ must include .js extensions for local files
import { registerRoutes } from "./routes.js";
import { setupVite, serveStatic, log } from "./vite.js";

const app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse: any;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });
  next();
});

// API routes
registerRoutes(app);

// Error middleware
app.use((err: any, _req: any, res: any, _next: any) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// In dev: Vite middleware; in prod: serve built client
if (app.get("env") === "development") {
  setupVite(app, undefined);
} else {
  serveStatic(app);
}

// --- Run standalone (local dev), OR just export for serverless ---
if (process.env.VERCEL !== "1") {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    log(`Server running at http://localhost:${port}`);
  });
}

export default app;
