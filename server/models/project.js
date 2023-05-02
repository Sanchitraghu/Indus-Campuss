import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  projectTitle: { type: String, require: "Project must have title" },
  projectBody: { type: String, require: "Project must have description" },
  projectTags: { type: [String], require: "Project must have tags" },
  jobType: { type: String, require: "Provide Job offer" },
  userPosted: { type: String, require: "Project must have author" },
  email: { type: String },
  userId: { type: String },
  postedOn: { type: Date, default: Date.now },
});

export default mongoose.model("Project", ProjectSchema);
