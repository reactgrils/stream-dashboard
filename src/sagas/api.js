import axios from "axios";

// https://github.com/axios/axios/issues/382 never fixed it
// axios.defaults.headers.common.Authorization = localStorage.getItem('authToken');


export const list = async (endpoint, data = undefined, option = {}) => {
  const params = {
    option
  };
  const res = axios.get(endpoint, data, params);

  return res;
}


export const post = async (endpoint, data) => {
  const res = await axios.post(`${endpoint}`, data);
  return res;
};

export const get = async (endpoint, data = {}) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem('authToken'),
      params: data
    }
  }
  const res = await axios.get(`${endpoint}`, config);
  return res;
};

export const update = async (endpoint, data) => {
  const res = await axios.put(endpoint, data);
  return res;
};

export const destroy = async (endpoint, data) => {
  const res = await axios.delete(`${endpoint}`, data);
  return res;
};