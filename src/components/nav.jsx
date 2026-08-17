import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>ShopAdmin</h2>

            <ul className="nav-links">
                <li>
                    <link to="/">Home</link>
                </li>

                    <li>
                        <link to="/product">Products</link>
                    </li>

                    <li>
                        <link to="/add-product">Add Product</link>
                    </li>

            </ul>

            </nav>          
                          
    );
}

export default Navbar;