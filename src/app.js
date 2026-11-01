
import express from "express";
import studentRoutes from "./routes/student.routes.js";

const app = express();

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Student Management API is running"
    });
});

// Student API routes
app.use("/api/v1/students", studentRoutes);

// Unknown route
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

export default app;
