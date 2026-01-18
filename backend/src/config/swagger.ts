import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "URL Shortener API",
      version: "1.0.0",
      description: "API documentation for the URL Shortener service",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "token",
          description: "Authentication token stored in cookies",
        },
      },
      schemas: {
        User: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "12345",
              description: "Unique identifier for the user",
            },
            email: {
              type: "string",
              format: "email",
              example: "user@example.com",
              description: "Email address of the user",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Timestamp when the user was created",
            },
          },
        },
        Url: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "abcde",
              description: "Unique identifier for the shortened URL",
            },
            originalUrl: {
              type: "string",
              format: "uri",
              example: "https://www.example.com/some/long/url",
              description: "The original long URL",
            },
            shortUrl: {
              type: "string",
              example: "http://short.ly/abcde",
              description: "The shortened URL",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Timestamp when the URL was shortened",
            },
            userId: {
              type: "string",
              example: "12345",
              description:
                "Identifier of the user who created the shortened URL",
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: false,
            },
            message: {
              type: "string",
              example: "Error message describing what went wrong",
            },
          },
        },
        SuccessResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            message: {
              type: "string",
              example: "Operation completed successfully",
            },
          },
        },
      },
    },
  },
  apis: ["./src/route/*.ts"], // Path ke file routes
};

export const swaggerSpecs = swaggerJSDoc(options);