import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import ProjectDetails from "../section/ProjectDetails2";

function ProjectDetailPage() {

    return (
        <>

        <div className="page-wrapper">
            <Layout>
                <PageTitle pageName="Room Details" />
                <ProjectDetails />
            </Layout>
        </div>

        </>
    )
}
export default ProjectDetailPage