const Course = require("../models/course.model");

const addCourse = async (ctx) => {
    try{
        const{ courseName, courseFee, students} = ctx.request.body;

        const course = await Course.create({
            courseName: courseName,
            courseFee: courseFee,
            students: students,
        })
        return (ctx.body = course);

    } catch(error){
        return (ctx.body = {message: error.message});
    }
   
};
const getCourses = async (ctx) =>{
    try{
        const courses = await Course.find().populate({
            path : "students",
            select : "name nic age"
        });
        return (ctx.body = courses);
    }catch(error){
        return (ctx.body = {message: error.message});
    }
};
const updateCourses = async (ctx) =>{
    try{
        const courseID = ctx.params.id;
        const{ courseName, courseFee, students} = ctx.request.body;
        const course = await Course.findByIdAndUpdate(courseID,{
            courseName: courseName,
            courseFee: courseFee,
            students: students,
        });
        return (ctx.body = course);
    }catch(error){
        return (ctx.body = {message: error.message});
    }
};
const DeleteCourse = async (ctx) =>{
    try{
        const courseID = ctx.params.id;
        const course = await Course.findByIdAndDelete(courseID);
        return (ctx.body = course);
    }catch(error){
        return (ctx.body = {message: error.message});
    }
};
module.exports={
    addCourse, 
    getCourses,
    updateCourses,
    DeleteCourse,
}