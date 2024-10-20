import axios from "axios";

const base_url = "https://fakestoreapi.com";

const API = axios.create({
  baseURL: base_url,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const fetchAllProducts = async () => {
  let res = await API.get("/products");
  if (res?.status === 200) {
    return res.data;
  }
};
