import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    console.log("navbar");

    return (
        <div>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm fixed-top">
                <a href="/">
                    <img src="/public/images/logo.png" alt="logo" ></img>
                </a>

                <nav className="my-2 my-md-0 mr-md-3 text-uppercase">
                    <NavLink
                        className="me-3 py-2 link-body-emphasis text-decoration-none"
                        to="/"
                        style={({ isActive }) =>
                            isActive ?
                                {
                                    color: 'orange'
                                }
                                : { color: '#343a40' }}>
                        Home
                    </NavLink>

                    <NavLink
                        className="me-3 py-2 link-body-emphasis text-decoration-none"
                        to="/shop"
                        style={({ isActive }) =>
                            isActive ?
                                {
                                    color: 'orange'
                                }
                                : { color: '#343a40' }}>
                        Shop
                    </NavLink>

                    <NavLink
                        className="me-3 py-2 link-body-emphasis text-decoration-none"
                        to="/contact"
                        style={({ isActive }) =>
                            isActive ?
                                {
                                    color: 'orange'
                                }
                                : { color: '#343a40' }}>
                        Contact
                    </NavLink>
                </nav>

                <div className="d-flex align-items-center">
                    <a className="position-relative">
                        <i className="fa fa-shopping-cart fa-2x mr-5 text-dark"></i>
                        <div className="cart-no">9</div>
                    </a>
                    <a className="me-3 py-2 btn btn-outline-secondary mr-2" href="#">Login</a>
                    <a className="me-3 py-2 btn btn-outline-secondary mr-3" href="#">Sign up</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;