import { IBrand } from "../shared/models/brand";
import { IPagination } from "../shared/models/pagination";
import { IType } from "../shared/models/productType";

const ShopService = {
    getProducts: async function () {
        const resp = await fetch(baseUrl + '/products?pageSize=50');
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