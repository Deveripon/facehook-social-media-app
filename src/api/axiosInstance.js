import axios from "axios";
import { api_base_url } from "../constant";

const api = axios.create({
    baseURL: api_base_url,
});
export default api;
