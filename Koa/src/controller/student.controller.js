const Student = require("../models/student.model");
const Course = require("../models/course.model");

const addStudent = async (ctx) => {
    try{
        const{ name, nic, age, courseID} = ctx.request.body;

        const student = await Student.create({
            name,
            nic,
            age,
            courseID,
        })
        await Course.findByIdAndUpdate(courseID,{$push:{students:student._id}});
        return (ctx.body = student);

    } catch(error){
        return (ctx.body = {message: error.message});
    }
   
};
const getStudent = async (ctx) =>{
    try{
        const students = await Student.find({});
        return (ctx.body = students);
    }catch(error){
        return (ctx.body = {message: error.message});
    }
};
const updateStudent = async (ctx) =>{
    try{
        const studentID = ctx.params.id;
        const{ name, nic, age, courseID} = ctx.request.body;
        const student = await Student.findByIdAndUpdate(studentID,{
            name,
            nic,
            age,
            courseID,
        });
        return (ctx.body = student);
    }catch(error){
        return (ctx.body = {message: error.message});
    }
};
const DeleteStudent = async (ctx) =>{
    try{
        const studentID = ctx.params.id;
        const student = await Student.findByIdAndDelete(studentID);
        return (ctx.body = student);
    }catch(error){
        return (ctx.body = {message: error.message});
    }
};
module.exports={
    addStudent, 
    getStudent,
    updateStudent,
    DeleteStudent,
}