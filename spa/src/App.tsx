import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavbarComponent from "./core/nav-bar/navbarComponent"
import HomeComponent from './home/homeComponent';
import { lazy } from 'react';
import React from 'react';

const ShopComponent = lazy(() => import('./shop/shopComponent'));
const ProductDetailsComponent = lazy(() => import('./shop/productDetailsComponent'));

function App() {
    return (
        <div className="App">
            <NavbarComponent />
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={<HomeComponent />}>
                    </Route>
                    <Route
                        path="/shop"
                        element={
                            <React.Suspense fallback={<div>Component1 are loading please wait...</div>}>
                                <ShopComponent />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/shop/:id"
                        element={
                            <React.Suspense fallback={<div>Component1 are loading please wait...</div>}>
                                <ProductDetailsComponent />
                            </React.Suspense>
                        }
                    />
                    <Route>

                    </Route>
                </Routes>
            </div>
        </div >
    );
}
export default App