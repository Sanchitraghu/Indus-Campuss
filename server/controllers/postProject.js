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
