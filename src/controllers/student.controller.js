
import mongoose from "mongoose";
import Student from "../models/student.model.js";

// 1. CREATE STUDENT
export const createStudent = async (req, res) => {
    try {
        const { name, email, course, age } = req.body;

        if (!name || !email || !course) {
            return res.status(400).json({
                message: "Name, email and course are required"
            });
        }

        const student = await Student.create({
            name,
            email,
            course,
            age
        });

        res.status(201).json({
            message: "Student created successfully",
            data: student
        });

    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                message: "Email already exists"
            });
        }

        res.status(500).json({
            message: error.message
        });
    }
};


// 2. READ ALL STUDENTS
export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json({
            message: "Students fetched successfully",
            data: students
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// 3. READ SINGLE STUDENT
export const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Invalid student ID"
            });
        }

        const student = await Student.findById(id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student found successfully",
            data: student
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// 4. UPDATE STUDENT
export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Invalid student ID"
            });
        }

        const student = await Student.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student updated successfully",
            data: student
        });

    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                message: "Email already exists"
            });
        }

        res.status(500).json({
            message: error.message
        });
    }
};


// 5. DELETE STUDENT
export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Invalid student ID"
            });
        }

        const student = await Student.findByIdAndDelete(id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
