const Project = require("../models/Project");
const {
  apiError,
  apiSuccessWithData,
  apiSuccess,
  apiValidationErrors,
} = require("../utils/apiHelpers");

// GET all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res
      .status(200)
      .json(apiSuccessWithData("All projects in the database", projects));
  } catch (err) {
    res.status(500).json(apiError(err.message));
  }
};

// GET single project
exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(apiSuccessWithData("Project", project));
  } catch (err) {
    res.status(500).json(apiError(err.message));
  }
};

// POST add project
exports.addProject = async (req, res) => {
  try {
    const newProject = await Project.create({
      title: req.body.title,
      image: req.body.image,
      link: req.body.link,
    });
    await newProject.save();
    res.status(201).json(apiSuccess("Project has been added"));
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json(apiValidationErrors(messages));
    } else {
      return res.status(500).json(apiError(err.message));
    }
  }
};

// DELETE delete project
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json(apiError("No project found"));
    }

    await project.delete();

    return res.status(200).json(apiSuccess("The project has been deleted"));
  } catch (err) {
    res.status(500).json(apiError(err.message));
  }
};
