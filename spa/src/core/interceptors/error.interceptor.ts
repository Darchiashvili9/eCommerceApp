import axios from 'axios';
import { useNavigate } from "react-router-dom";

const useAxios = () => {
    const navigate = useNavigate();

    const axiosInstance = axios.create({
        baseURL: "https://localhost:5001/api", // Replace with your API base URL
    });

    // Request interceptor
    axiosInstance.interceptors.request.use(
        (req) => {
            // Modify the request data here

            return req;
        },
        (error) => {
            // Handle request errors here

            return Promise.reject(error);
        }
    );

    // Response interceptor
    axiosInstance.interceptors.response.use(
        (resp) => {
            // Modify the response data here

            if (resp.status === 200)
                console.log(200)
            else console.log(resp.status)

            return resp;
        },
        (error) => {
            // Handle response errors here

            console.log(error.response.status)

            if (error.response.status === 404)
                navigate('/not-found')
            if (error.response.status === 500)
                navigate('/server-error')

            return Promise.reject(error);
        }
    );
    return { axiosInstance };
}
export default useAxios;