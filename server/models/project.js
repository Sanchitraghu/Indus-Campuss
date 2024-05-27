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
  companyRequestedProject: {
    type: [
      {
        pId: { type: String },
        state: { type: String, default: "pending" },
        projectName: { type: String },
        universityEmail: { type: String },
        universityId: { type: String },
        idea: { type: String },
      },
    ],
  },
  universityRequestedProject: {
    type: [
      {
        pId: { type: String },
        state: { type: String, default: "pending" },
        projectName: { type: String },
        companyEmail: { type: String },
        idea: { type: String },
      },
    ],
  },
});

export default mongoose.model("Project", ProjectSchema);
