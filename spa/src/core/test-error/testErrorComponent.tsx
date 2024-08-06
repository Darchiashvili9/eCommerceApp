import { ToastContainer } from "react-toastify";
import { IProduct } from "../../shared/models/product";
import useAxios from "../interceptors/error.interceptor";

function TestErrorComponent() {
    const { axiosInstance } = useAxios();

    async function get404Error() {
        try {
            const response: IProduct = (await axiosInstance.get(axiosInstance.getUri() + '/api/products/' + 42)).data;
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }

    async function get500Error() {
        try {
            const response: IProduct = (await axiosInstance.get(axiosInstance.getUri() + '/buggy/servererror')).data;
            return response;
        }

        catch (error) {
            console.log(error);
        }
    }

    async function get400Error() {
        try {
            const response: IProduct = (await axiosInstance.get(axiosInstance.getUri() + '/buggy/badrequest')).data;
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }

    async function get400ValidationError() {
        try {
            const response: IProduct = (await axiosInstance.get(axiosInstance.getUri() + '/products/fortytwo')).data;
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mt-5">
            <button className="btn btn-outline-primary mr-3"
                onClick={() => { get500Error() }}>
                test 500 error
            </button>
            <button className="btn btn-outline-primary mr-3"
                onClick={() => { get404Error() }}>
                test 404 error
            </button>
            <button className="btn btn-outline-primary mr-3"
                onClick={() => { get400Error() }}>
                test 400 error
            </button>
            <button className="btn btn-outline-primary mr-3"
                onClick={() => { get400ValidationError() }}>
                test 400 Validation error
            </button>

            <ToastContainer />
        </div>
    )
}
export default TestErrorComponent;