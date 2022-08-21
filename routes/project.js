const router = require("express").Router();
const {
  getAllProjects,
  getProject,
  addProject,
  deleteProject,
} = require("../controllers/project");

// get all projects and add project
router.route("/").get(getAllProjects).post(addProject);

// get single project and delete project
router.route("/:id").get(getProject).post(deleteProject);

module.exports = router;
