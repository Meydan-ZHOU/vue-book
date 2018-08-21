import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

axios.interceptors.response.use((res) => {
  console.log(res.data);
  return res.data;
});

export const getSlider = () => {
  return axios.get("/slider");
};

export const getHotBook = () => {
  return axios.get("/hotBook");
};

export const getBooks = (id) => {
  let idStr = id || '';
  return axios.get(`/book?id=${idStr}`);
};

export const removeBook = (id) => {
  return axios.delete(`/book?id=${id}`);
};
