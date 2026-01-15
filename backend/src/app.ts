import express from "express";
import cors from "cors";
import authRoutes from "./route/authRoutes";
import urlRoutes from "./route/urlRoutes";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import { swaggerSpecs } from "./config/swagger";

const app = express();

// CORS configuration
app.use(cors({
    origin: [
        process.env.FRONTEND_URL || "http://localhost:5173",
        "http://localhost:5174", // Alternative Vite port
        "http://localhost:5175"  // Another alternative
    ],
    credentials: true, // Allow cookies
}));

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

// Redirect route - must be before health check
// Import redirect controller
import { RedirectUrlController } from "./controller/url/redirectUrlController";
const redirectController = new RedirectUrlController();
app.get("/:shortCode", redirectController.redirect);

// Health check
app.get("/", (req, res) => {
    res.json({ 
        message: "URL Shortener API",
        version: "1.0.0",
        documentation: "/api-docs"
    });
});

export default app;
