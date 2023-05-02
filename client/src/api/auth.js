import { API } from './constant';

export const logIn = (data, cb) => {
  API.post('/user/login', data)
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};
export const signUp = (data, cb) => {
  API.post('/user/signup', data)
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};

export const getUserDetail = (id, cb) => {
  API.get(`/user/get/${id}`)
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};

//  To Update User Description
//        data =  { id, newDescription }
export const updateUserDescription = (data, cb) => {
  API.patch(`/user/editdiscription`, data)
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};
