import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import NavbarComponent from "./core/nav-bar/navbarComponent"
import HomeComponent from './home/homeComponent';
import { lazy } from 'react';
import React from 'react';
import TestErrorComponent from './core/test-error/testErrorComponent';
import ServerErrorComponent from './core/server-error/serverErrorComponent';
import NotFoundErrorComponent from './core/not-found/notFoundErrorComponent';
import SectionHeader from './core/section-header/sectionHeader';

const ShopComponent = lazy(() => import('./shop/shopComponent'));
const ProductDetailsComponent = lazy(() => import('./shop/productDetailsComponent'));

function App() {
    return (
        <div className="App">
            <div>
                <NavbarComponent />
            </div>

            <div>
                <SectionHeader />
            </div>

            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={<HomeComponent />}>
                    </Route>
                    <Route
                        path="/shop"
                        element={
                            <React.Suspense fallback={<div>Shop loading please wait...</div>}>
                                <ShopComponent />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/shop/:id"
                        element={
                            <React.Suspense fallback={<div>Product Details are loading please wait...</div>}>
                                <ProductDetailsComponent />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <React.Suspense fallback={<div>Product Details are loading please wait...</div>}>
                                <div>geegegeg</div>
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/testError"
                        element={
                            <React.Suspense fallback={<div>testError Component are loading please wait...</div>}>
                                <TestErrorComponent />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="/server-error"
                        element={<ServerErrorComponent />}>
                    </Route>
                    <Route
                        path="/not-found"
                        element={<NotFoundErrorComponent />}>
                    </Route>

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </div >
    );
}
export default App