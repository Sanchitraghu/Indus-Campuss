import Projects from "../models/project.js";
import mongoose from "mongoose";

export const postProject = async (req, res) => {
  const postProjectData = req.body;
  const postProject = new Projects({ ...postProjectData });
  try {
    await postProject.save();
    res.status(200).json("Project is posted Successfully");
  } catch (error) {
    console.log(error);
    res.status(409).json("Couldn't post a new question");
  }
};

export const getAllProjects = async (req, res) => {
  try {
    const projectList = await Projects.find();
    res.status(200).json(projectList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Project unavailable...");
  }
  try {
    await Projects.findByIdAndRemove(_id);
    res.status(200).json({ message: "successfully deleted..." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserProjects = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json("User not Found");
  }
  try {
    const userproject = await Projects.find({ userId: _id });
    res.status(200).json(userproject);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postRequestedProjectCompany = async (req, res) => {
  const { projectId, details } = req.body;
  try {
    const project = await Projects.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project Not Found" });
    }

    let alreadyRequested = project?.companyRequestedProject?.find((element) => {
      return element.universityEmail === details?.requestedCollegeEmail;
    });

    if (alreadyRequested) {
      return res.status(404).json({ message: "Project already Requested" });
    }

    let object = {
      pId: projectId,
      projectName: details.projectTitle,
      universityEmail: details.requestedCollegeEmail,
      universityId: details.requestedCollegeId,
      idea: details?.idea,
    };
    const requestedProjects = project.companyRequestedProject;
    requestedProjects.push(object);
    await Projects.findByIdAndUpdate(projectId, {
      $set: { companyRequestedProject: requestedProjects },
    });

    return res.status(200).json({ message: "Successfully added" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const approveOrRejectProjectRequest = async (req, res) => {
  let { id, state, updatedProjectId } = req.body;
  const project = await Projects.findById(id);
  let approvedIndex = project?.companyRequestedProject?.findIndex((element) => {
    return element.id === updatedProjectId;
  });

  const object = project?.companyRequestedProject[approvedIndex];

  object.state = state;

  project?.companyRequestedProject?.splice(approvedIndex, 1, object);

  await Projects.findByIdAndUpdate(id, {
    $set: { companyRequestedProject: project?.companyRequestedProject },
  });
  res.status(200).json({ message: "Successfully executed request" });
};
