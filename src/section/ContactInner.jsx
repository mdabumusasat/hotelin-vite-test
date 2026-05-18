import React from 'react';
import { Link } from "react-router-dom";

const ContactInner = () => {
    return (
        <>
        <section className="contact-details pb-70 pt-110">
          <div className="container ">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="sec-title">
                  <span className="sub-title before-none">Send us email</span>
                  <h2>Feel free to write</h2>
                </div>
                <form id="contact_form" name="contact_form">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea name="form_message" className="form-control required" rows={7} placeholder="Enter Message"></textarea>
                  </div>
                  <div className="mb-5">
                    <input name="form_botcheck" className="form-control" type="hidden" value="" />
                    <button type="submit" name="form_botcheck" className="theme-btn-nine animation-box" data-loading-text="Please wait...">
                      <span className="royle-btn__text">Send message</span>
                      <span className="royle-btn__hover royle-btn__hover--1"></span>
                      <span className="royle-btn__hover royle-btn__hover--2"></span>
                      <span className="royle-btn__hover royle-btn__hover--3"></span>
                      <span className="royle-btn__hover royle-btn__hover--4"></span>
                      <span className="royle-btn__hover royle-btn__hover--5"></span>
                    </button>
                    <button type="reset" name="form_botcheck" className="theme-btn-nine animation-box ml-10" data-loading-text="Please wait...">
                      <span className="royle-btn__text">Reset</span>
                      <span className="royle-btn__hover royle-btn__hover--1"></span>
                      <span className="royle-btn__hover royle-btn__hover--2"></span>
                      <span className="royle-btn__hover royle-btn__hover--3"></span>
                      <span className="royle-btn__hover royle-btn__hover--4"></span>
                      <span className="royle-btn__hover royle-btn__hover--5"></span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="contact-details__right">
                  <div className="sec-title">
                    <span className="sub-title before-none">Need any help?</span>
                    <h2>Get in touch with us</h2>
                    <div className="text">Lorem ipsum is simply free text dolor sit amet notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.</div>
                  </div>
                  <ul className="list-unstyled contact-details__info">
                    <li className="d-block d-sm-flex align-items-sm-center ">
                      <div className="icon">
                        <span className="lnr-icon-phone-plus"></span>
                      </div>
                      <div className="text ml-xs--0 mt-xs-10">
                        <div className="h4 mb-1">Have any question?</div>
                        <Link to="#"><span>Free</span> +92 (020)-9850</Link>
                      </div>
                    </li>
                    <li className="d-block d-sm-flex align-items-sm-center ">
                      <div className="icon">
                        <span className="lnr-icon-envelope1"></span>
                      </div>
                      <div className="text ml-xs--0 mt-xs-10">
                        <div className="h4 mb-1">Write email</div>
                        <Link to="#">needhelp@company.com</Link>
                      </div>
                    </li>
                    <li className="d-block d-sm-flex align-items-sm-center ">
                      <div className="icon">
                        <span className="lnr-icon-location"></span>
                      </div>
                      <div className="text ml-xs--0 mt-xs-10">
                        <div className="h4 mb-1">Visit anytime</div>
                        <span>66 broklyn golden street. New York</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Contact Details End--> */}

        {/* <!-- Map Section--> */}
        <section className="map-section">
          <iframe  className="map w-100"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </section>
        {/* <!--End Map Section--> */}
        </>
    )
}
export default ContactInner
