import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

const PORT = 3000;

export type AppointmentStatus = "pending" | "confirmed" | "cancelled" | "completed";

export interface AppointmentRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  status: AppointmentStatus;
  createdAt: string;
}

// In-memory store with clear abstraction for future database / Google Calendar / Supabase swap
const appointmentsStore: AppointmentRecord[] = [];

// Basic rate limiting store (IP -> timestamps)
const rateLimitMap = new Map<string, number[]>();

function sanitizeString(input: unknown, maxLength = 300): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: "32kb" }));

  // Health & Config Check Endpoint
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      clinic: "Shookra Aesthetics & Academy",
      timestamp: new Date().toISOString(),
    });
  });

  // Get Appointments (extensible for future Admin Dashboard)
  app.get("/api/appointments", (_req, res) => {
    res.json({
      appointments: appointmentsStore,
      count: appointmentsStore.length,
    });
  });

  // Create Appointment Request with validation, sanitization, and rate-limiting
  app.post("/api/appointments", (req, res) => {
    const clientIp = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress || "unknown";
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute window
    const maxRequests = 10;

    const recentTimestamps = (rateLimitMap.get(clientIp) || []).filter((ts) => now - ts < windowMs);
    if (recentTimestamps.length >= maxRequests) {
      return res.status(429).json({
        error: "Too many booking requests. Please wait a moment or contact us on WhatsApp.",
      });
    }
    recentTimestamps.push(now);
    rateLimitMap.set(clientIp, recentTimestamps);

    const name = sanitizeString(req.body?.name, 100);
    const phone = sanitizeString(req.body?.phone, 30);
    const email = sanitizeString(req.body?.email, 120);
    const service = sanitizeString(req.body?.service, 100);
    const date = sanitizeString(req.body?.date, 30);
    const time = sanitizeString(req.body?.time, 30);
    const message = sanitizeString(req.body?.message, 500);

    if (!name || name.length < 2) {
      return res.status(400).json({ error: "Please provide your full name." });
    }
    if (!phone || phone.length < 7) {
      return res.status(400).json({ error: "Please provide a valid phone number." });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }
    if (!service) {
      return res.status(400).json({ error: "Please select a preferred treatment." });
    }
    if (!date || !time) {
      return res.status(400).json({ error: "Please select both a preferred date and time slot." });
    }

    const newAppointment: AppointmentRecord = {
      id: `SHK-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
      name,
      phone,
      email,
      service,
      date,
      time,
      message,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    appointmentsStore.unshift(newAppointment);

    return res.status(201).json({
      success: true,
      appointment: newAppointment,
    });
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    const assetsImagesPath = path.join(process.cwd(), "src", "assets", "images");
    app.use("/src/assets/images", express.static(assetsImagesPath, { maxAge: "7d" }));
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Shookra Aesthetics & Academy server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
