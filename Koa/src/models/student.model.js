const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: {type: String, required:true},
    nic: {type: String, required:true},
    age: {type: String, required:true},
    courseID: {type: mongoose.Schema.Types.ObjectId, required:false},
});

const Student = mongoose.model("students", StudentSchema);

module.exports = Student;