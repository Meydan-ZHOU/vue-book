import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

axios.interceptors.response.use((res) => {
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

export const changeBook = (id,data) => {
  return axios.put(`/book?id=${id}`,data);
};

export const addBook = (data) => {
  return axios.post("/book",data);
};

export const getAll = () => {
  return axios.all([getSlider(), getHotBook()]);
};

export const pagination = (offset) => {
  return axios.get(`/page?offset=${offset}`);
};
