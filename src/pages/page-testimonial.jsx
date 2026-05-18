import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import TestimonialInner from "../section/TestimonialInner";

function TestimonialsPage() {

    return (
        <>
        
        <div className="page-wrapper">
            <Layout>
                <PageTitle pageName="Testimonials" />
                <TestimonialInner />
            </Layout>
        </div>

        </>
    )
}
export default TestimonialsPage