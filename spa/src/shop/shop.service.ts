import { IBrand } from "../shared/models/brand";
import { IPagination } from "../shared/models/paginationModel";
import { IType } from "../shared/models/productType";

const ShopService = {
    getProducts: async function (brandId?: number, typeId?: number, sort?: string) {

        const params = new URLSearchParams(baseUrl.search);

        if (brandId) {
            params.append("brandId", brandId.toString());
        }

        if (typeId) {
            params.append("typeId", typeId.toString());
        }

        if (sort) {
            params.append("sort", sort);
        }

        const resp = await fetch(baseUrl + "/products?" + params.toString());
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

export const baseUrl = new URL("https://localhost:5001/api");
export default ShopService;