import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import NewsGrid from "../section/NewsGrid";

export default function PageBlogGrid() {

    return (
        <>
        <div className="page-wrapper">
            <Layout>
                <PageTitle pageName="News Grid" />
                <NewsGrid />
            </Layout>
        </div>
        </>
    )
}
