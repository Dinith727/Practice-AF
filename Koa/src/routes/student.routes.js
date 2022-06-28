const koaRouter = require("koa-router");
const router = new koaRouter({prefix:"/student"});
const {addStudent, getStudent, updateStudent, DeleteStudent} = require("../controller/student.controller");

router.post("/add", addStudent);
router.delete("/:id",DeleteStudent);
router.put("/:id",updateStudent );
router.get("/", getStudent);


module.exports = router;