import { IBrand } from "../shared/models/brand";
import { IPagination } from "../shared/models/pagination";
import { IType } from "../shared/models/productType";
import { useParams,PathParam } from 'react-router-dom';


const ShopService = {
    getProducts: async function (brandId?: number, typeId?: number, sort?: string) {

        let params: String = new String;

        const { token_param } = useParams();

        token_param;

        if (brandId) {
            params = params + "?brandId=" + brandId.toString();
        }

        if (typeId) {
            params = params + "?typeId=" + (typeId.toString());
        }

        if (sort) {
       //     params = params + "/sort=" + (sort.toString());
        }


        const resp = await fetch(baseUrl + '/products' + params.toString());
        const response: IPagination = await resp.json();
        return response.data;
    },

    getBrands: async function () {
        const resp = await fetch(baseUrl + '/products/brands');
        const response: IBrand[] = await resp.json();
        return response;
    },

    getTypes: async function () {
        const resp = await fetch(baseUrl + '/products/types');
        const response: IType[] = await resp.json();
        return response;
    },
};



export const baseUrl = 'https://localhost:5001/api';
export default ShopService;