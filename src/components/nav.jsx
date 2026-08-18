import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>Tisya's Sales</h2>

            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>

                    <li>
                        <Link to="/product">Products</Link>
                    </li>

                    <li>
                        <Link to="/add-product">Add Product</Link>
                    </li>

            </ul>

            </nav>          
                          
    );
}

export default Navbar;