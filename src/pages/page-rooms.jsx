import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import ProjectGrid from "../section/ProjectGrid";

 function ProjectsGrid() {

    return (
        <>
        <div className="page-wrapper">
            <Layout>
                <PageTitle pageName="Rooms" />
                <ProjectGrid />
            </Layout>
        </div>
        </>
    )
}
export default ProjectsGrid