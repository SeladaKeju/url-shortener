import express from "express";
import authRoutes from "./route/authRoutes";
import urlRoutes from "./route/urlRoutes";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/urls", urlRoutes);

// Health check
app.get("/", (req, res) => {
    res.json({ message: "URL Shortener API" });
});

export default app;
