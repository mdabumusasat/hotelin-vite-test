import { useState } from 'react';
import { Link } from 'react-router-dom';
import Product1 from '../assets/images/resource/products/1.jpg';
import Product2 from '../assets/images/resource/products/2.jpg';
import Product3 from '../assets/images/resource/products/3.jpg';

const ShopCheckout1 = () => {  
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }
  return (
    <>

    <section>
      <div className="container pt-70 pb-120">
        <div className="section-content">
          <form id="checkout-form" action="/">
            <div className="row mt-30">
              <div className="col-md-6">
                <div className="billing-details">
                  <h3 className="mb-30">Billing Details</h3>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="Fname">First Name</label>
                      <input id="Fname" name='Fname' type="text" className="form-control" placeholder="Frist Name"/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="Lname">Last Name</label>
                      <input id="Lname" name='Lname' type="text" className="form-control" placeholder="Last Name"/>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label htmlFor="Cname">Company Name</label>
                        <input id="Cname" name='Cname' type="text" className="form-control" placeholder="Company Name"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Eaddress">Email Address</label>
                        <input id="Eaddress" name='Eaddress' type="email" className="form-control" placeholder="Email Address"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="Saddress">Address</label>
                        <input id="Saddress" name='Saddress' type="text" className="form-control" placeholder="Street address"/>
                      </div>
                      <div className="mb-3">
                        <input type="text" name='Apartment' className="form-control" placeholder="Apartment, suite, unit etc. (optional)"/>
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="stateCity">City</label>
                      <input id="stateCity" name='state-city' type="text" className="form-control" placeholder="City"/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="Sprovince">State/Province</label>
                      <select id="Sprovince" name="Sprovince" className="form-control">
                        <option>Select State</option>
                        <option>Australia</option>
                        <option>UK</option>
                        <option>USA</option>
                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="ZCode">Zip/Postal Code</label>
                      <input id="ZCode" name='ZCode' type="text" className="form-control" placeholder="Zip/Postal Code"/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="Fcountry">Country</label>
                      <select id="Fcountry" name="Fcountry" className="form-control">
                        <option>Select Country</option>
                        <option>Australia</option>
                        <option>UK</option>
                        <option>USA</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h3>Additional information</h3>
                <label htmlFor="Ocomments" >Order notes&nbsp;<span className="optional">(optional)</span></label>
                <textarea id="Ocomments" name='Ocomments' className="form-control" placeholder="Notes about your order, e.g. special notes for delivery." rows="3"></textarea>
              </div>
              <div className="col-md-12 mt-30">
                <h3>Your order</h3>
                <table className="table table-striped table-bordered tbl-shopping-cart">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Product Name</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-thumbnail"><Link to="/shop-product-details"><img alt="product" src={Product1}/></Link></td>
                      <td className="product-name"><Link to="/shop-product-details">Headphone</Link> x 2</td>
                      <td><span className="amount">$36.00</span></td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail"><Link to="/shop-product-details"><img alt="product" src={Product2}/></Link></td>
                      <td className="product-name"><Link to="/shop-product-details">Lagage</Link> x 3</td>
                      <td><span className="amount">$115.00</span></td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail"><Link to="/shop-product-details"><img alt="product" src={Product3}/></Link></td>
                      <td className="product-name"><Link to="/shop-product-details">Watch</Link> x 1</td>
                      <td><span className="amount">$68.00</span></td>
                    </tr>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td>&nbsp;</td>
                      <td>$180.00</td>
                    </tr>
                    <tr>
                      <td>Shipping and Handling</td>
                      <td>&nbsp;</td>
                      <td>Free Shipping</td>
                    </tr>
                    <tr>
                      <td>Order Total</td>
                      <td>&nbsp;</td>
                      <td>$250.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-12 mt-60">
                <div className="payment-method">
                  <h3>Choose a Payment Method</h3>
                  <ul className="accordion-box">
                    <li className="accordion block active-block">
                      <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                        <div className="icon-outer"><i className="lnr-icon-chevron-down"></i></div> Credir Card / Debit Card
                      </div>
                      <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                        <div className="payment-info">
                          <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                              <div className="field-input mb-3">
                                <input type="text" className="form-control" name="Cname" placeholder="Name on the Card" required/>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                              <div className="field-input mb-3">
                                <input type="text" className="form-control" name="Cnumber" placeholder="Card Number" required/>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 column">
                              <div className="field-input mb-3">
                                <input type="text" className="form-control" name="Edate" placeholder="Expiry Date" required/>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 column">
                              <div className="field-input mb-3">
                                <input type="text" className="form-control" name="Scode" placeholder="Security Code" required/>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 column">
                              <div className="field-input message-btn">
                                <button type="submit" name="form_botcheck" className="theme-btn-nine animation-box" data-loading-text="Please wait...">
                                  <span className="royle-btn__text">Make Payment</span>
                                  <span className="royle-btn__hover royle-btn__hover--1"></span>
                                  <span className="royle-btn__hover royle-btn__hover--2"></span>
                                  <span className="royle-btn__hover royle-btn__hover--3"></span>
                                  <span className="royle-btn__hover royle-btn__hover--4"></span>
                                  <span className="royle-btn__hover royle-btn__hover--5"></span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                        <div className="icon-outer"><i className="lnr-icon-chevron-down"></i></div> Direct Bank Transfer
                      </div>
                      <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                        <div className="payment-info">
                          <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                     <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                        <div className="icon-outer"><i className="lnr-icon-chevron-down"></i></div> Cheque Payment
                      </div>
                      <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                        <div className="payment-info">
                          <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                     <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                        <div className="icon-outer"><i className="lnr-icon-chevron-down"></i></div> Other Payment
                      </div>
                      <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                        <div className="payment-info">
                          <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    </>
  );
};
export default ShopCheckout1
