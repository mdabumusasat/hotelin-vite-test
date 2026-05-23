import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/Home3/Banner";
import Checkout from "../section/Home3/Checkout";
import About from "../section/Home3/About";
import Service from "../section/Home3/Service";
import Feature from "../section/Home3/Feature";
import Discover from "../section/Home3/Discover";
import Testimonial from "../section/Home3/Testimonial";
import Funfact from "../section/Home3/Funfact";
import Gallery from "../section/Home3/Gallery";
import Event from "../section/Home3/Event";
import News from "../section/Home3/News";

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
