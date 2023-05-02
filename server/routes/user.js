import express from "express";
import {
  login,
  signup,
  editDescription,
  getUserDetail,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.patch("/editdiscription", editDescription);
router.get("/get/:id", getUserDetail);

export default router;
