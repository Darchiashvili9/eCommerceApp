import { useEffect, useState } from "react";
import { IType } from "../shared/models/productType";
import useAxios from "../core/interceptors/error.interceptor";

function TypesComponent({ typeIdSelected, setShopParamsSelected, getProducts }
    : { typeIdSelected: number, setShopParamsSelected: Function, getProducts: Function }) {

    const [types, setTypes] = useState<IType[]>();
    const { axiosInstance } = useAxios();

    useEffect(() => {
        (function () {
            try {
                getTypes();
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, []);

    async function getTypes() {
        try {
            const response: IType[] = (await axiosInstance.get(axiosInstance.getUri() + '/products/types')).data;
            setTypes([{ id: 0, name: "All" }, ...await response]);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <ul className="list-group my-3">
            {
                types?.map((type, index) =>
                    <li className={`list-group-item ${typeIdSelected == type.id && 'active'}`}
                        key={index}
                        onClick={() => {
                            setShopParamsSelected((item: any) => ({ ...item, typeId: type.id, pageNumb: 1 }));
                            // getProducts();
                        }}>
                        {type.name}
                    </li>
                )
            }
        </ul>
    );
}
export default TypesComponent;