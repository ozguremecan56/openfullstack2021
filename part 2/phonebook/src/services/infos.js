import axios from "axios";
const baseUrl = "/api/phones";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const remove = (id) => {
  return axios.delete(baseUrl + "/" + id);
};

const update = (id, updatedPerson) => {
  return axios.put(baseUrl + "/" + id, updatedPerson);
};

export default {
  getAll,
  create,
  remove,
  update,
};
