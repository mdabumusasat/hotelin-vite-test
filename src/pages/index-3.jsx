import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/home3/Banner";
import Checkout from "../section/home3/Checkout";
import About from "../section/home3/About";
import Service from "../section/home3/Service";
import Feature from "../section/home3/Feature";
import Discover from "../section/home3/Discover";
import Testimonial from "../section/home3/Testimonial";
import Funfact from "../section/home3/Funfact";
import Gallery from "../section/home3/Gallery";
import Event from "../section/home3/Event";
import News from "../section/home3/News";

function Home3() {
    return (
        <>
        <div className="page-wrapper">
            <Layout HeaderStyle="three" FooterStyle="three" styleMode="Green">
                <Banner />
                <Checkout />
                <About />
                <Service />
                <Feature />
                <Discover />
                <Testimonial />
                <Funfact />
                <Gallery />
                <Event />
                <News />
            </Layout>
        </div>
        </>
    );
}
export default Home3
