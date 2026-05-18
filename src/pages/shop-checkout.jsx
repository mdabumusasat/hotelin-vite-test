import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import ShopCheckout from "../section/ShopCheckout";

function ShopCheckoutPage() {
  return (
    <>

    <div className="page-wrapper">
      <Layout>
        <PageTitle pageName="Shop Checkout" />
        <ShopCheckout />
      </Layout>
    </div>

    </>
  );
}
export default ShopCheckoutPage