import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import GlowBubble from '../../Components/GlowBubble';
import ProjectLogo from '../../Components/Logos/ProjectLogo';
import ProjectCard from './components/ProjectCard';

export const ProjectsContent = () => {
    return (
        <GlowBubble>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ProjectLogo />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography component="h1" style={{ color: "#000", padding: '2rem' }}>
                    Here are some of our projects that we have completed
                    using different technologies and programming languages.
                </Typography>
            </Box>


            <Grid container spacing={1}>
                <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
                    <ProjectCard />
                </Grid>
            </Grid>
        </GlowBubble>
    )
};
