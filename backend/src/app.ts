import express from "express";
import authRoutes from "./route/authRoutes";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);

// Health check
app.get("/", (req, res) => {
    res.json({ message: "URL Shortener API" });
});

export default app;
