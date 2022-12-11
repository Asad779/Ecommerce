import React from "react";
import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
const Navbar = () => {
    const state = useSelector((state)=> state.handler)
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
                <div class="container">
                    <Link class="navbar-brand fw-bold fs-4" to="/">
                        Collections
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/products">Production</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            <Link to="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i>Login
                            </Link>
                            <Link to="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Register
                            </Link>
                            <Link to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shoping-cart me-1"></i>cart ({state.length})
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;