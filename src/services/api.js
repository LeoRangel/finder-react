import axios from "axios";

export const api = axios.create({
  baseURL: "https://monkfish-app-2xvm7.ondigitalocean.app/",
});
