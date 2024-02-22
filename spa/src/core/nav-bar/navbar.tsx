import "./navbar.css";

function Navbar() {
    console.log("navbar");

    return (
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm fixed-top">

            <img src="/public/images/logo.png" alt="logo"></img>

            <nav className="my-2 my-md-0 mr-md-3 text-uppercase">
                <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Home </a>
                <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#"> Shop  </a>
                <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#"> Contact</a>
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
    );
}

export default Navbar;