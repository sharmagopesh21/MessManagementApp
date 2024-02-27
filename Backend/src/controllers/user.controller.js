import { Student } from "../models/student.model.js";
import asyncHandler from "../utils/asyncHandler.js"

const addStudent = asyncHandler(async (req, res) => {
    const { hostel, userid, name, batch, email } = req.body;

    const user = await Student.create({
        userid,
        email,
        hostel,
        name,
        batch
    })

    return res.status(201).json({ data: user })
})

const deleteStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const user = await Student.deleteOne({
        _id: id
    })

    return res.status(201).json({ data: user })
})

const getStudents = asyncHandler(async (req, res) => {
    const allStudents = await Student.find({});
    return res.status(200).json({ allStudents })
});

export { addStudent, getStudents, deleteStudent }