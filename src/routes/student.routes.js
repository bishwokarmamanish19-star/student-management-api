
import express from "express";

import {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} from "../controllers/student.controller.js";

const router = express.Router();

// CREATE
router.post("/", createStudent);

// READ ALL
router.get("/", getStudents);

// READ SINGLE
router.get("/:id", getStudentById);

// UPDATE
router.put("/:id", updateStudent);

// DELETE
router.delete("/:id", deleteStudent);

export default router;
