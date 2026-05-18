import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import ProjectDetails from "../section/ProjectDetails";

function ProjectDetailPage() {

    return (
        <>

        <div className="page-wrapper">
            <Layout>
                <PageTitle pageName="Rooms and Suits" />
                <ProjectDetails />
            </Layout>
        </div>

        </>
    )
}
export default ProjectDetailPage