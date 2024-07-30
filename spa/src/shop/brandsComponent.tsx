import { useEffect, useState } from "react";
import { IBrand } from "../shared/models/brand";
import useAxios from "../core/interceptors/error.interceptor";

function BrandsComponent({ brandIdSelected, setShopParamsSelected, getProducts }
    : { brandIdSelected: number, setShopParamsSelected: Function, getProducts: Function }) {

    const [brands, setBrands] = useState<IBrand[]>();
    const { axiosInstance } = useAxios();

    useEffect(() => {
        (function () {
            try {
                getBrands();
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const getBrands = async function () {
        try {
            const response: IBrand[] = (await axiosInstance.get(axiosInstance.getUri() + '/products/brands')).data;
            setBrands([{ id: 0, name: "All" }, ...await response]);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <ul className="list-group my-3">
            {
                brands?.map((brand, index) =>
                    <li className={`list-group-item ${brandIdSelected == brand.id && 'active'}`}
                        key={index}
                        onClick={() => {
                            setShopParamsSelected((item: any) => ({ ...item, brandId: brand.id, pageNumb: 1 }));
                            //  getProducts();
                        }}>
                        {brand.name}
                    </li>
                )
            }
        </ul>
    );
}
export default BrandsComponent;