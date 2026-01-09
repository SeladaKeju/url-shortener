import express from "express";
import authRoutes from "./route/authRoutes";
import urlRoutes from "./route/urlRoutes";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import { swaggerSpecs } from "./config/swagger";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// swagger doc
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "URL Shortener API Docs",
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/urls", urlRoutes);

// Health check
app.get("/", (req, res) => {
    res.json({ 
        message: "URL Shortener API",
        version: "1.0.0",
        documentation: "/api-docs"
    });
});

export default app;
