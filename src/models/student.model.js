
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        course: {
            type: String,
            required: true
        },

        age: {
            type: Number,
            min: 1,
            max: 100
        }
    },
    {
        timestamps: true
    }
);

const Student = mongoose.model(
    "Student",
    studentSchema
);

export default Student;
