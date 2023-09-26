import axios from "axios";

const axiosClient = axios.create(
    {
        baseURL: "https://dbwebmind.onrender.com/api",

    }
);

export default axiosClient;