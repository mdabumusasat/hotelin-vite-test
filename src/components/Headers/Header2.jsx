import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavLinks from '../NavLinks';
import MobileMenu from '../MobileMenu';
import MainLogo from "../../assets/images/mountain/logo/logo.png";
import StickyLogo from "../../assets/images/mountain/logo/logo.png";
import MobileLogo from "../../assets/images/mountain/logo/logo.png";
import SearchLogoImg from "../../assets/images/mountain/logo/search.svg";
import MobileBarImg from "../../assets/images/mountain/logo/bar.svg";

const Header2 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {

    return (
        <>
        <div className="line-shape-animation fix cus-z-1 first w-100 h-100 d-flex flex-wrap">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <header className={`main-header header-style-two header-1-mountain ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
            <div className="header-lower">
                <div className="container">
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo"><Link to="/"><img src={MainLogo} alt="" title="royle"/></Link></div>
                        </div>
                        <nav className="nav main-menu">
                            <NavLinks />
                        </nav>

                        <div className="outer-box">
                            <div className="single-list d-none d-inline-md-flex">
                            <select className="nice-select bg-transparent">
                                <option>En</option>
                                <option>Au</option>
                                <option>Ne</option>
                            </select>
                            </div>
                            <button className="ui-btn search-btn">
                            <Link to="#">
                                <img src={SearchLogoImg} alt="Search Icon"/>
                            </Link>
                            </button>
                            {/* <!-- Mobile Nav toggler --> */}
                            <div className="mobile-nav-toggler d-block">
                            <Link to="#">
                                <img src={MobileBarImg} alt="img"/>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Header Lower --> */}

            {/* <!-- Mobile Menu  --> */}
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleRemove}/>
                <nav className="menu-box">
                <div className="upper-box">
                    <div className="nav-logo"><Link to="#"><img src={MobileLogo} alt=""/></Link></div>
                    <div className="close-btn" onClick={handleRemove}> <i className="icon fa fa-times"></i></div>
                </div>
                <ul className="navigation clearfix">
                    <MobileMenu />
                </ul>
                <ul className="contact-list-one">
                    <li>
                    <div className="contact-info-box">
                        <i className="icon lnr-icon-phone-handset"></i>
                        <span className="title">Call Now</span>
                        <Link to="#">+92 (8800) - 98670</Link>
                    </div>
                    </li>
                    <li>
                    {/* Contact Info Box */}
                    <div className="contact-info-box">
                        <span className="icon lnr-icon-envelope1"></span>
                        <span className="title">Send Email</span>
                        <Link to="#">help@company.com</Link>
                    </div>
                    </li>
                    <li>
                    <div className="contact-info-box">
                        <span className="icon lnr-icon-clock"></span>
                        <span className="title">Send Email</span>
                        Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                    </div>
                    </li>
                </ul>
                <ul className="social-links">
                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                </ul>
                </nav>
            </div>
            <div className="search-popup">
                <span className="search-back-drop" onClick={handleToggle}/>
                <button className="close-search" onClick={handleToggle}><span className="fa fa-times"></span></button>
                <div className="search-inner">
                <form method="post" action="index">
                    <div className="form-group">
                    <input type="search" name="search-field" placeholder="Search..."/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                </form>
                </div>
            </div>
            {/* <!-- End Header Search --> */}

            {/* <!-- Sticky Header  --> */}
            <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                <div className="auto-container">
                <div className="inner-container">
                    <div className="logo">
                    <Link to="#"><img src={StickyLogo} alt="img"/></Link>
                    </div>
                    <div className="nav-outer">
                    <nav className="main-menu">
                        <div className="navbar-collapse show collapse clearfix">
                        <ul className="navigation clearfix">
                            <NavLinks />
                        </ul>
                        </div>
                    </nav>

                    {/* <!--Mobile Navigation Toggler--> */}
                    <div className="mobile-nav-toggler" onClick={handleOpen}>
                        <span className="icon fal fa-bars"></span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header2;