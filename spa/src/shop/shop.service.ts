import { IBrand } from "../shared/models/brand";
import { IPagination } from "../shared/models/pagination";
import { IType } from "../shared/models/productType";


const ShopService = {
    getProducts: async function (brandId?: number, typeId?: number) {

        let params: String = new String;

        if (brandId) {
            params = params + "?brandId=" + brandId.toString();
        }

        if (typeId) {
            params = params + "?typeId=" + (typeId.toString());
        }


        const resp = await fetch(baseUrl + '/products' + params.toString() );
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