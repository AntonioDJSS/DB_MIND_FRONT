import axios from "axios";

const axiosClient = axios.create(
    {
        baseURL: "https://whale-app-frgd7.ondigitalocean.app/api",

    }
);

export default axiosClient;