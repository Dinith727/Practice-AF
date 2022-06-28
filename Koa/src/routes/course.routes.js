const koaRouter = require("koa-router");
const router = new koaRouter({prefix:"/course"});
const {addCourse, getCourses, updateCourses, DeleteCourse} = require("../controller/course.controller");

router.post("/add", addCourse);
router.delete("/:id",DeleteCourse);
router.put("/:id",updateCourses );
router.get("/", getCourses);
DeleteCourse


module.exports = router;