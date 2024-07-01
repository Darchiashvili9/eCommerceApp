import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeModule from "../home/homeModule";
import Shop from "../shop/shop";
import ProductDetailsModule from "../shop/productDetailsModule"

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<HomeModule />}>
                    </Route>
                    <Route
                        path="/shop"
                        element={<Shop />}>
                    </Route>
                    <Route
                        path="/shop/:id"
                        element={<ProductDetailsModule />}>
                    </Route>
                    <Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Routing;