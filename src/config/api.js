import axios from "axios";

export const apiRevisaoTextual = axios.create({
  baseURL: "http://localhost:8080",
});
