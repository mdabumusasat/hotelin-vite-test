import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import About from "../section/Home1/About";
import Funfact from "../section/About/Funfact";
import Service from "../section/About/Service";
import Testimonial from "../section/about/Testimonial";

function AboutUs() {

    return (
        <>
        <div className="page-wrapper">
            <Layout>
                <PageTitle pageName="About Us" />
                <About />
                <Funfact />
                <Service />
                <Testimonial />
            </Layout>
        </div>
        </>
    )
}
export default AboutUs