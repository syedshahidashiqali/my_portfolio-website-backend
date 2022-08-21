const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add project title"],
    },
    image: {
      type: String,
      required: [true, "Please add project image"],
    },
    link: {
      type: String,
      required: [true, "Please add project link"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
