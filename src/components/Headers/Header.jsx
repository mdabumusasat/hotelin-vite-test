import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavLinks from '../NavLinks';
import MobileMenu from '../MobileMenu';
import MainLogo from "../../assets/images/logo.png";
import StickyLogo from "../../assets/images/logo-2.png";
import MobileLogo from "../../assets/images/mountain/logo/logo.png";
import HeadeShapeImage from "../../assets/images/icons/button-arrow.svg";

const Header = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {
  
    return (
        <>
        <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-box">
                  <div className="header-logo">
                    <Link to="#"><img src={MainLogo} alt="logo"/></Link>
                  </div>
                  <div className="header-menu">
                    <div className="nav-outer">
                      <nav className="nav main-menu">
                        <NavLinks />
                    </nav>
                    </div>
                  </div>
                  <div className="header-right d-flex align-items-center">
                    <div className="header-button d-none d-md-block">
                      <Link className="theme-btn-main" to="/page-contact">
                        <span className="theme-btn-arrow-left"><img src={HeadeShapeImage} alt="arrow"/></span>
                        <span className="theme-btn">BOOK NOW </span>
                        <span className="theme-btn-arrow-right"><img src={HeadeShapeImage} alt="arrow"/></span>
                      </Link>
                    </div>
                    <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon fal fa-bars"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

export default Header;