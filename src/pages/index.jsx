import React from "react";
import Layout from '../layouts/Layout';
import Banner from '../section/Home1/Banner';
import Checkout from "../section/Home1/Checkout";
import About from "../section/Home1/About";
import Destination from "../section/Home1/Destination";
import Feature from "../section/Home1/Feature";
import Suite from "../section/Home1/Suite";
import Explore from "../section/Home1/Explore";
import Testimonial from "../section/Home1/Testimonial";
import News from "../section/Home1/News";
import Instragram from "../section/Home1/Instragram";

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