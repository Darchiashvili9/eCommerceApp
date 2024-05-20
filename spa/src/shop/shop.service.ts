import { IBrand } from "../shared/models/brand";
import { IPagination } from "../shared/models/paginationModel";
import { IType } from "../shared/models/productType";

const ShopService = {

    getProducts: async (brandId: number, typeId: number, sort: string, pageNumb: number, pageSiz: number) => {

        const params = new URLSearchParams(baseUrl.search);

        if (brandId !== 0) {
            params.append("brandId", brandId.toString());
        }

        if (typeId !== 0) {
            params.append("typeId", typeId.toString());
        }

        params.append("sort", sort);
        params.append("pageIndex", pageNumb.toString());
        params.append("pageSize", pageSiz.toString());


        const resp = await fetch(baseUrl + "/products?" + params.toString());
        const response: IPagination = await resp.json();
        return response;
    },

    getBrands: async () => {
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