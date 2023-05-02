import dovenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user.js";
import projectRoutes from "./routes/project.js";

dovenv.config();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a Indus Campus API");
});

app.use("/user", userRoutes);
app.use("/project", projectRoutes);

const PORT = process.env.PORT || 5000;

const Connection_URL = process.env.DATABASE_URL;

mongoose
  .connect(Connection_URL, {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
