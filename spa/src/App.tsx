import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from "./core/nav-bar/navbar"
import HomeModule from './home/homeModule';
import Shop from './shop/shop';
import ProductDetailsModule from './shop/productDetailsModule';

function App() {
    return (
        <div className="App">
            <div className="container">
                <BrowserRouter>
                    <Navbar />
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
        </div>
    );
}
export default App