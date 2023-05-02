import express from "express";
import {
  postProject,
  getAllProjects,
  deleteProject,
  getUserProjects,
} from "../controllers/postProject.js";

const router = express.Router();

router.post("/post", postProject);
router.get("/get", getAllProjects);
router.delete("/delete/:id", deleteProject);
router.get("/getuserprojects/:id", getUserProjects);

export default router;
