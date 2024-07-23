import { IProduct } from "../../shared/models/product";
import { baseUrl } from "../../shared/services/shop.service";

function TestErrorComponent() {
    async function get404Error() {
        try {
            const resp = await fetch(baseUrl + '/products/' + 42);
            const response: IProduct = await resp.json();
            console.log(response)
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }

    async function get500Error() {
        try {
            const resp = await fetch(baseUrl + '/buggy/servererror');
            const response: IProduct = await resp.json();
            console.log(response)
            return response;
        }

        catch (error) {
            console.log(error);
        }
    }

    async function get400Error() {
        try {
            const resp = await fetch(baseUrl + '/buggy/badrequest');
            const response: IProduct = await resp.json();
            console.log(response)
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }

    async function get400ValidationError() {
        try {
            const resp = await fetch(baseUrl + '/products/fortytwo');
            const response: IProduct = await resp.json();
            console.log(response)
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
        </div>
    )
}
export default TestErrorComponent;