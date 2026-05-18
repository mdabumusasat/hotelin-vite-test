import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/home2/Banner";
import Checkout from "../section/home2/Checkout";
import About from "../section/home2/About";
import RoomSuites from "../section/home2/RoomSuites";
import Service from "../section/home2/Service";
import Hotel from "../section/home2/Hotel";
import Testimonial from "../section/home2/Testimonial";
import Mountain from "../section/home2/Mountain";
import News from "../section/home2/News";

function Home2() {
    return (
        <>
        <div className="page-wrapper">
            <Layout HeaderStyle="two" FooterStyle="two" styleMode="Blue">
                <Banner />
                <Checkout />
                <About />
                <RoomSuites />
                <Service />
                <Hotel />
                <Testimonial />
                <Mountain />
                <News />
            </Layout>
        </div>
        </>
    );
}
export default Home2