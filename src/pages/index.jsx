import React from "react";
import Layout from '../layouts/Layout';
import Banner from '../section/Home1/Banner';
import Checkout from "../section/home1/Checkout";
import About from "../section/home1/About";
import Destination from "../section/home1/Destination";
import Feature from "../section/home1/Feature";
import Suite from "../section/home1/Suite";
import Explore from "../section/home1/Explore";
import Testimonial from "../section/home1/Testimonial";
import News from "../section/home1/News";
import Instragram from "../section/home1/Instragram";

function Home1() {
    return (
        <>
        <div className="page-wrapper">
            <Layout>
                <Banner />
                <Checkout />
                <About />
                <Destination />
                <Feature />
                <Suite />
                <Explore />
                <Testimonial />
                <News />
                <Instragram />
            </Layout>
        </div>
        </>
    );
}
export default Home1;