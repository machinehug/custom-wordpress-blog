import axios from "axios";
import { API_BASE_URL } from "../constants/variables";

export default function useAxios() {

    const apiClient = axios.create({
        baseURL: API_BASE_URL,
    });

    apiClient.interceptors.request.use(function (config) {
        return config;
    });

    return apiClient;
};