import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import GlowBubble from '../../Components/GlowBubble';
import ProjectLogo from '../../Components/Logos/ProjectLogo';
import ProjectCard from './components/ProjectCard';
//----------< images here >----------//
import project1 from "../../assets/ProjectsImages/project1.jfif";

export const ProjectsContent = () => {

    const projectsData = [
        {
            project_name: 'Project Name',
            isIsmail: true,
            owner_name: "Ismail",
            Techs: 'React | MUI',
            see_link: '#seeLinkHere',
            github_link: '#githubLinkHere',
            project_img: project1,
        },
        {
            project_name: 'Project Name',
            isIsmail: true,
            owner_name: "Ismail",
            Techs: 'React | MUI',
            see_link: '#seeLinkHere',
            github_link: '#githubLinkHere',
            project_img: project1,
        },
        {
            project_name: 'Project Name',
            isIsmail: true,
            owner_name: "Ismail",
            Techs: 'React | MUI',
            see_link: '#seeLinkHere',
            github_link: '#githubLinkHere',
            project_img: project1,
        },
        {
            project_name: 'Project Name',
            isIsmail: false,
            owner_name: "Imane",
            Techs: 'React | MUI',
            see_link: '#seeLinkHere',
            github_link: '#githubLinkHere',
            project_img: project1,
        },
        {
            project_name: 'Project Name',
            isIsmail: true,
            owner_name: "Ismail",
            Techs: 'React | MUI',
            see_link: '#seeLinkHere',
            github_link: '#githubLinkHere',
            project_img: project1,
        },
        {
            project_name: 'Project Name',
            isIsmail: false,
            owner_name: "Ismail",
            Techs: 'React | MUI',
            see_link: '#seeLinkHere',
            github_link: '#githubLinkHere',
            project_img: project1,
        },
        {
            project_name: 'Project Name',
            isIsmail: true,
            owner_name: "Ismail",
            Techs: 'PHP | JS',
            see_link: '#seeLinkHere',
            github_link: '#githubLinkHere',
            project_img: project1,
        }
    ]

    return (
        <GlowBubble>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ProjectLogo />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography component="h1" style={{ color: "#000", padding: '1rem', fontSize: '30px', textTransform: 'uppercase' }}>Our Projects</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography component="h1" style={{ color: "#000", padding: '1.3rem', border: "1px solid #000", borderRadius: '1rem', margin: '1rem' }}>
                    Here are some of our projects that we have completed
                    using different technologies and programming languages.
                </Typography>
            </Box>


            <Grid container spacing={1}>
                {projectsData.map(data => {
                    return (
                        <Grid item xs={11} sm={6} md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center" }}>
                            <ProjectCard data={data}/>
                        </Grid>
                    )
                })}
            </Grid>
        </GlowBubble>
    )
};
