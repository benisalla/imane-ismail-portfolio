import { Grid, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import GlowBubble from '../../Components/GlowBubble';
import ProjectLogo from '../../Components/Logos/ProjectLogo';
import ProjectCard from './components/ProjectCard';
//----------< images here >----------//
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useISIMController } from '../../context';


export const ProjectsContent = () => {
    const [controller, dispatch] = useISIMController();
    const { projects } = controller;

    const isMobile = useMediaQuery('(min-width:768px)');

    const textColor = !isMobile ? "#647bff" : "#000";
    const borderColor = !isMobile ? "#857f84" : "#000";

    const themedesc1 = createTheme(
        {
            typography: {
                fontFamily: [
                    'Open Sans', 'sans serif'
                ].join(','),
                fontWeightLight: 200,
                fontWeightRegular: 400,
                fontWeightMedium: 900,
                fontSize: 20,
            }
        })
    const bigTitle = createTheme(
        {
            typography: {
                fontFamily: [
                    'Open Sans', 'sans serif'
                ].join(','),
                fontWeightLight: 200,
                fontWeightRegular: 400,
                fontWeightMedium: 900,
                fontSize: 30,
            }
        })
    // const projectsData = [
    //     {
    //         project_name: 'Jeef Event',
    //         isIsmail: true,
    //         owner_name: "Ismail",
    //         Techs: 'Html| css | js',
    //         see_link: 'https://benisalla.github.io/Jeef_Event_website/',
    //         github_link: 'https://github.com/benisalla/Jeef_Event_website',
    //         project_img: jeefEvent,
    //     },
    //     {
    //         project_name: 'Jeef Official website',
    //         isIsmail: true,
    //         owner_name: "Ismail",
    //         Techs: 'Html | css | css',
    //         see_link: 'https://benisalla.github.io/jeef-jeef-official-web-site/event.html',
    //         github_link: 'https://github.com/benisalla/jeef-jeef-official-web-site',
    //         project_img: jeefOfficialWebsite,
    //     },
    //     {
    //         project_name: 'Snake Game',
    //         isIsmail: true,
    //         owner_name: "Ismail",
    //         Techs: 'Java | Swing',
    //         see_link: 'https://github.com/benisalla/snake_game_java_swing',
    //         github_link: 'https://github.com/benisalla/snake_game_java_swing',
    //         project_img: snakeGame,
    //     },
    //     {
    //         project_name: 'Link bio',
    //         isIsmail: true,
    //         owner_name: "Ismail",
    //         Techs: 'ThreeJs | GsapJs',
    //         see_link: 'https://benisalla.github.io/ismail-ben-alla-link-bio/',
    //         github_link: 'https://github.com/benisalla/ismail-ben-alla-link-bio',
    //         project_img: linkBio,
    //     },
    //     {
    //         project_name: 'Scientific Calculator',
    //         isIsmail: true,
    //         owner_name: "Ismail",
    //         Techs: 'Android Studio | java',
    //         see_link: 'https://github.com/benisalla/Calculator',
    //         github_link: 'https://github.com/benisalla/Calculator',
    //         project_img: calculatorAndroidStudio,
    //     },
    //     {
    //         project_name: 'Tic tac Tow',
    //         isIsmail: true,
    //         owner_name: "Ismail",
    //         Techs: 'Android Studio | java',
    //         see_link: 'https://github.com/benisalla/x-o-game-android-studio-java',
    //         github_link: 'https://github.com/benisalla/x-o-game-android-studio-java',
    //         project_img: ticTacTow,
    //     },
    //     {
    //         project_name: 'Voice Recognition',
    //         isIsmail: true,
    //         owner_name: "Ismail",
    //         Techs: 'Matlab',
    //         see_link: 'https://github.com/benisalla/voice-recognition-matlab',
    //         github_link: 'https://github.com/benisalla/voice-recognition-matlab',
    //         project_img: voiceRecognition,
    //     },
    //     {
    //         project_name: 'Operation Research',
    //         isIsmail: true,
    //         owner_name: "Ismail",
    //         Techs: 'Matlab',
    //         see_link: 'https://github.com/benisalla/Operations_research',
    //         github_link: 'https://github.com/benisalla/Operations_research',
    //         project_img: operationResearch,
    //     },
    //     {
    //         project_name: 'Linear Algebra',
    //         isIsmail: true,
    //         owner_name: "Ismail",
    //         Techs: 'Matlab',
    //         see_link: '',
    //         github_link: '',
    //         project_img: linearAlgebra,
    //     },
    //     {
    //         project_name: 'Calculator',
    //         isIsmail: false,
    //         owner_name: "Imane",
    //         Techs: 'JAVA | Android Studio',
    //         see_link: 'https://github.com/ImaneMouatassem/Calculator',
    //         github_link: 'https://github.com/ImaneMouatassem/Calculator',
    //         project_img: imaneCalcul,
    //     },
    //     {
    //         project_name: 'Multi-Store App',
    //         isIsmail: false,
    //         owner_name: "Imane",
    //         Techs: 'Nextjs | DRF ',
    //         see_link: 'https://github.com/ImaneMouatassem/Point-de-vente',
    //         github_link: 'https://github.com/ImaneMouatassem/Point-de-vente',
    //         project_img: multisale,
    //     }
    // ]

    return (
        <GlowBubble>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ProjectLogo />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ThemeProvider theme={themedesc1}>

                    <Typography
                        style={{ color: textColor, padding: '1rem', fontSize: '30px', textTransform: 'uppercase' }}>Our Projects</Typography>
                </ThemeProvider >

            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ThemeProvider theme={themedesc1}>
                    <Typography component="h1" style={{
                        color: textColor,
                        padding: '1.3rem',
                        border: "1px solid #000",
                        borderRadius: '1rem',
                        margin: '1rem',
                        borderColor: borderColor,
                    }}>
                        Explore Our Accomplished projects developed using a variety of tools and programming languages.
                    </Typography>
                </ThemeProvider>
            </Box>

            <Grid container spacing={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {projects.map(data => {
                    return (
                        <Grid item xs={11} sm={6} md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <ProjectCard key={data.github_link} data={data} />
                        </Grid>
                    )
                })}
            </Grid>

        </GlowBubble>
    )
};
