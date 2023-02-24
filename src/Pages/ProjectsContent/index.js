import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import GlowBubble from '../../Components/GlowBubble';
import ProjectLogo from '../../Components/Logos/ProjectLogo';
import ProjectCard from './components/ProjectCard';
//----------< images here >----------//
import project1 from "../../assets/ProjectsImages/project1.jfif";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import imaneCalcul from './imaneCalcul.PNG'
import multisale from './multisale.png'
export const ProjectsContent = () => {

    const themedesc1 = createTheme(
        {
            typography: {
                fontFamily:[
                  'Righteous', 'cursive'
                ].join(','),
                // fontWeightLight: 200,
                // fontWeightRegular: 400,
                // fontWeightMedium: 900,
                // fontSize:30,
            }
        })
    const projectsData = [
        {
            project_name: 'knknk',
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
            project_name: 'Simple calculator using Android Studio',
            isIsmail: false,
            owner_name: "Imane",
            Techs: 'JAVA | Android Studio',
            see_link: '#seeLinkHere',
            github_link: 'https://github.com/ImaneMouatassem/Calculator',
            project_img: imaneCalcul,
        },
        {
            project_name: '',
            isIsmail: true,
            owner_name: "Ismail",
            Techs: 'React | MUI',
            see_link: '#seeLinkHere',
            github_link: '#githubLinkHere',
            project_img: imaneCalcul,
        },
        {
            project_name: 'multiple point of sale site',
            isIsmail: false,
            owner_name: "Imane",
            Techs: 'Nextjs | API | Django rest framework ',
            see_link: '#seeLinkHere',
            github_link: 'https://github.com/ImaneMouatassem/Point-de-vente',
            project_img: multisale,
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
            <ThemeProvider  theme={themedesc1}>

                <Typography 
                //component="h1"
                 style={{ color: "#000", padding: '1rem', fontSize: '30px', textTransform: 'uppercase' }}>Our Projects</Typography>
            </ThemeProvider >

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
