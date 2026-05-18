import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileMenu = () => {
    const [isSubActive, setSubIsActive] = useState({ status: false, key: "" });
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,

            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    const handleSubClick = (key) => {
        // Handle second-level menu toggle
        setSubIsActive((prevState) =>
            prevState.key === key
                ? { status: false, key: "" }
                : { status: true, key }
        );
    };


    return (
        <>
             <ul className="navigation">
                <li className="current dropdown">
                    <Link to="/">Home </Link>
                    <ul className={isActive.key === 1 ? "sub-menu d-block" : "d-none"}>
                        <li><Link to="/">Home Page 1</Link></li>
                        <li><Link to="/index-2">Home page 02</Link></li>
                        <li><Link to="/index-3">Home page 03</Link></li>
                    </ul>
                    <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)}><i className="fa fa-angle-down" /></div>
                </li>
                <li className="dropdown">
                    <Link to="#0">Pages </Link>
                    <ul className={isActive.key === 4 ? "sub-menu d-block" : "d-none"}>
                        <li><Link to="/page-about">About Us</Link></li>
                        <li>
                            <Link to="#0">Team</Link>
                            <ul className={isSubActive.key === 2 ? "d-block" : "d-none"}>
                                <li><Link to="/page-team">Team Grid</Link></li>
                                <li><Link to="/page-team-details">Team Details</Link></li>
                            </ul>
                            <div className={isSubActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(2)}><i className="fa fa-angle-down" /></div>
                        </li>
                        <li><Link to="/page-testimonial">Testimonials</Link></li>
                        <li><Link to="/page-faq">FAQ’s</Link></li>
                        <li><Link to="/page-pricing">Pricing Table</Link></li>
                        <li>
                            <Link to="#0">Shop</Link>
                            <ul className={isSubActive.key === 3 ? "d-block" : "d-none"}>
                                <li><Link to="/shop-products">Shop Product</Link></li>
                                <li><Link to="/shop-products-sidebar">Products Sidebar</Link></li>
                                <li><Link to="/shop-product-details">Product Details</Link></li>
                                <li><Link to="/shop-checkout">Checkout</Link></li>
                                <li><Link to="/shop-cart">Cart</Link></li>
                            </ul>
                            <div className={isSubActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(3)}><i className="fa fa-angle-down" /></div>
                        </li>
                        <li><Link to="/page-404">404 Error</Link></li>
                    </ul>
                    <div className={isActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(4)}><i className="fa fa-angle-down" /></div>
                </li>

                <li className="dropdown">
                    <Link to="#0">Services </Link>
                    <ul className={isActive.key === 5 ? "sub-menu d-block" : "d-none"}>
                        <li><Link to="/page-services">Service Grid</Link></li>
                        <li><Link to="/page-service-details">Service Details</Link></li>
                    </ul>
                    <div className={isActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(5)}><i className="fa fa-angle-down" /></div>
                </li>
                <li className="dropdown">
                    <Link to="#0">Rooms </Link>
                    <ul className={isActive.key === 6 ? "sub-menu d-block" : "d-none"}>
                        <li><Link to="/page-rooms">Rooms</Link></li>
                        <li><Link to="/page-rooms-suite">Rooms and Suits</Link></li>
                        <li><Link to="/room-details">Room Details</Link></li>
                    </ul>
                    <div className={isActive.key === 6 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(6)}><i className="fa fa-angle-down" /></div>
                </li>
                <li className="dropdown">
                    <Link to="#0">Blog </Link>
                    <ul className={isActive.key === 7 ? "sub-menu d-block" : "d-none"}>
                        <li><Link to="/news-grid">Blog Grid</Link></li>
                        <li><Link to="/news-details">Blog Details</Link></li>
                    </ul>
                    <div className={isActive.key === 7 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(7)}><i className="fa fa-angle-down" /></div>
                </li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MobileMenu;