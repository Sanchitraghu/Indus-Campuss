import { API } from "./constant";

// Get ALL Projects
export const getAllProjects = (cb) => {
  API.get("/project/get")
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};

// Post New Project

export const postNewProject = (data, cb) => {
  API.post("/project/post", data)
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};

export const deleteProject = (_id, cb) => {
  API.delete(`project/delete/${_id}`)
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};

export const getUserProjects = (_id, cb) => {
  API.get(`project/getuserprojects/${_id}`)
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};
