import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/Home2/Banner";
import Checkout from "../section/Home2/Checkout";
import About from "../section/Home2/About";
import RoomSuites from "../section/Home2/RoomSuites";
import Service from "../section/Home2/Service";
import Hotel from "../section/Home2/Hotel";
import Testimonial from "../section/Home2/Testimonial";
import Mountain from "../section/Home2/Mountain";
import News from "../section/Home2/News";

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