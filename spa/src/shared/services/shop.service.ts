import { IBrand } from "../models/brand";
import { IPagination } from "../models/paginationModel";
import { IType } from "../models/productType";
import { IProduct } from "../models/product";
import { ShopParams } from "../models/shopParams";

const ShopService = {
    getProducts: async function (shopParams: ShopParams) {

        console.log(shopParams)

        const params = new URLSearchParams(baseUrl.search);

        if (shopParams.brandId !== 0) {
            params.append("brandId", shopParams.brandId.toString());
        }

        if (shopParams.typeId !== 0) {
            params.append("typeId", shopParams.typeId.toString());
        }

        if (shopParams.search) {
            params.append("search", shopParams.search.toString());
        }

        params.append("sort", shopParams.sort);
        params.append("pageIndex", shopParams.pageNumb.toString());
        params.append("pageSize", shopParams.pageSiz.toString());

        const resp = await fetch(baseUrl + "/products?" + params.toString());
        const response: IPagination = await resp.json();
        return response;
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

    getProduct: async function (id: number) {
        const resp = await fetch(baseUrl + '/products/' + id);
        const response: IProduct = await resp.json();
        return response;
    }
};

export const baseUrl = new URL("https://localhost:5001/api");
export default ShopService;