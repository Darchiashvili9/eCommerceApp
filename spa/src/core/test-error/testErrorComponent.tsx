import { useEffect } from "react";
import { IProduct } from "../../shared/models/product";
import { baseUrl } from "../../shared/services/shop.service";

function TestErrorComponent() {

    async function get404Error() {
        const resp = await fetch(baseUrl + '/products/' + 42);
        const response: IProduct = await resp.json();
        return response;

    }

    useEffect(() => {
        (function () {
            try {
                get404Error();
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (


        <div>




        </div>
    )



}
export default TestErrorComponent;