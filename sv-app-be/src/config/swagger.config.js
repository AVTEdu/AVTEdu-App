const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AVTEdu API",
      version: "1.0.0",
      description:
        "API backend hệ thống quản lý sinh viên AVTEdu. Yêu cầu header Authorization: Bearer <accessToken> cho các endpoint có khóa 🔒.",
    },
    servers: [
      { url: "http://localhost:4000", description: "Local development" },
      { url: "https://api.avtedu.cloud", description: "Production" },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        ErrorResponse: {
          type: "object",
          properties: {
            error: {
              type: "object",
              properties: {
                message: { type: "string" },
              },
            },
          },
        },
        LoginRequest: {
          type: "object",
          required: ["ma", "password"],
          properties: {
            ma: { type: "number", example: 31200001 },
            password: { type: "string", example: "student123" },
          },
        },
        LoginResponse: {
          type: "object",
          properties: {
            success: { type: "boolean", example: true },
            accessToken: { type: "string" },
            refreshToken: { type: "string" },
          },
        },
        RefreshTokenRequest: {
          type: "object",
          required: ["refreshToken"],
          properties: {
            refreshToken: { type: "string" },
          },
        },
        AuthEmailRequest: {
          type: "object",
          required: ["ma", "email"],
          properties: {
            ma: { type: "number" },
            email: { type: "string" },
          },
        },
        ChangePasswordRequest: {
          type: "object",
          required: ["password", "newPassword"],
          properties: {
            password: { type: "string" },
            reEnterPassword: { type: "string" },
            newPassword: { type: "string" },
          },
        },
      },
      responses: {
        BadRequest: {
          description: "Thiếu hoặc sai dữ liệu đầu vào",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ErrorResponse" },
            },
          },
        },
        UnauthorizedError: {
          description: "Token không hợp lệ hoặc đã hết hạn",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ErrorResponse" },
            },
          },
        },
        ForbiddenError: {
          description: "Không có quyền truy cập",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ErrorResponse" },
            },
          },
        },
        NotFoundError: {
          description: "Không tìm thấy tài nguyên",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ErrorResponse" },
            },
          },
        },
        ServerError: {
          description: "Lỗi máy chủ",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ErrorResponse" },
            },
          },
        },
      },
    },
    security: [],
  },
  apis: ["./src/router/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
