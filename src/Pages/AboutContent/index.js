import { LoadingButton, Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Chip, Divider, Grid, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react';
import GlowBubble from '../../Components/GlowBubble';
import AboutUsLogo from '../../Components/Logos/AboutUsLogo';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DateRangeIcon from '@mui/icons-material/DateRange';

import AboutCard from './components/AboutCard';
import { useState } from 'react';
import { Card } from '@mui/joy';
import SkillCard from './components/SkillCard';
import react from './skills/React.png'
import SoftSkills from './components/SoftSkills';
import FileSaver from 'file-saver';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Center } from '@react-three/drei';


export const AboutContent = () => {
  const [loadingCV, setLoading] = useState(false);


  const Carddata = {
    title: '10+',
    firstWord: 'Projects',
    secondWord: 'Completted',
  };

  const experience = {
    title: "1+",
    firstWord: 'Years of ',
    secondWord: 'Experience',

  };

  const customer = {
    title: "1+",
    firstWord: 'Customer',
    secondWord: 'Reviews',
  }

  const internship = {
    title: "2+",
    firstWord: 'Completed',
    secondWord: 'internships'
  };



  const downloadPDFs = () => {
    const file1Url = process.env.PUBLIC_URL + '/ben_alla_ismail_cv.pdf';
    const file2Url = process.env.PUBLIC_URL + '/mouatassem_imane_cv.pdf';

    Promise.all([
      fetch(file1Url),
      fetch(file2Url)
    ])
      .then(responses => {
        // Convert the response objects to blob objects
        const blobs = responses.map(response => response.blob());
        return Promise.all(blobs);
      })
      .then(blobs => {
        // Save the blobs as files using FileSaver.js
        FileSaver.saveAs(blobs[0], 'ben_alla_ismail_cv.pdf');
        FileSaver.saveAs(blobs[1], 'Mouatassem Imane.pdf');
      })
      .catch(error => {
        console.error('Error downloading PDF files:', error);
      });
  }



  const themedesc1 = createTheme(
    {
      typography: {
        fontFamily: [
          'Righteous', 'cursive'
        ].join(','),
        fontWeightLight: 200,
        fontWeightRegular: 400,
        fontWeightMedium: 900,
        fontSize: 20,
      }
    })
  const themedesc = createTheme(
    {
      typography: {
        fontFamily: [
          'Lobster Two', 'cursive'
        ].join(','),
        fontSize: 30
      }
    }
  )


  const themeT = createTheme(
    {
      typography: {
        fontFamily: [
          'Mynerve', 'cursive'
        ].join(','),
        fontSize: 30
      }
    }
  )


  return (
    <GlowBubble>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <AboutUsLogo />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

        <ThemeProvider theme={themedesc1}>

          <Typography
            // component="h1" 
            style={{
              color: "#000", padding: '1rem',
              textTransform: 'uppercase'
            }}>Who Are we ?</Typography>
        </ThemeProvider>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <ThemeProvider theme={themedesc1}>

          <Typography
            //component="h1"
            style={{
              color: "#000",
              padding: '2.3rem',
              border: "1px solid #000", borderRadius:
                '1rem', margin: '1rem',
              textAlign: 'center'
            }}>
            <strong >Learn about our values and story </strong>
            <br /> Discover moe about us by looking through our about page.
            Find out more about our purpose and future Vision.
          </Typography>
        </ThemeProvider>

      </Box>


      <Grid container spacing={5} style={{ marginTop: '2rem', justifyContent: "center" }}>
        <Grid item xs={12} sm={12} md={12} xl={6} lg={6} style={{ display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <ThemeProvider theme={themedesc}>
              <Typography
                sx={{
                  fontSize: '2.5rem',
                  textTransform: 'uppercase',
                  justifyContent: "center"
                }}>
                Hi there,
                here is some information about us
              </Typography>
            </ThemeProvider>
            <ThemeProvider theme={themedesc1}>
              <Typography
                variant='subtitle1'
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: '2rem',
                  padding: '1rem',
                }}
              >

                Two young web developers who are incredibly passionate about their profession.
                Our focus is on attaining both because we are firmly convinced that a good website must not only have aesthetic
                appeal but also effective implementation. <br />We have worked on everything from small personal projects to comprehensive
                full-stack websites. We adhere to the principle of carefully hearing your needs, understanding your goals,
                and collaborating closely with you to realize your vision. Our commitment is
                to produce work of the highest caliber and to exceed your expectations. <br />We want to thank you for looking at our portfolio.

              </Typography>
            </ThemeProvider>
            <Box
              sx={
                {
                  alignSelf: 'center',
                }
              }>
              <Tooltip title={`Imane And Ismail`}>
                <LoadingButton
                  sx={{
                    color: "#000",
                    borderColor: '#000',
                    margin: '1rem',
                    padding: "0.5rem 1rem",
                    borderRadius: '1rem',
                  }}
                  onClick={downloadPDFs}
                  loading={loadingCV}
                  loadingPosition="end"
                  endIcon={<CloudDownloadIcon />}
                  variant="outlined"
                >
                  <span>DownLoad CVs</span>
                </LoadingButton>
              </Tooltip>
            </Box>

          </Card>
        </Grid>
        <Grid container spacing={1} xs={12} sm={12} md={12} xl={6} lg={6} style={{ margin: '6rem 0rem', justifyContent: "flexend" }}>
          <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{ display: "flex", justifyContent: "center" }}>
            <AboutCard data={Carddata} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{ display: "flex", justifyContent: "center" }}>
            <AboutCard data={experience} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{ display: "flex", justifyContent: "center" }}>
            <AboutCard data={customer} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{ display: "flex", alignItems: "flexend" }}>
            <AboutCard data={internship} />
          </Grid>
        </Grid>
      </Grid>


      {/* ------------------------------------------------------------------------------- */}


      <Divider sx={{ padding: '2rem 1rem', }}>
        <Chip label="Our Soft-Skills" sx={{ fontSize: '1rem', fontWeight: 600 }} />
      </Divider>

      <Grid container spacing={5} >
        <Grid item xs={12} sm={12} md={12} xl={12} lg={12} >
          <SoftSkills />
        </Grid>
      </Grid>


      {/* ------------------------------------------------------------------------------- */}


      <Divider sx={{ padding: '2rem 1rem', }}>
        <Chip label="Our Technical Skills" sx={{ fontSize: '1rem', fontWeight: 600 }} />
      </Divider>

      <Grid container spacing={1}>
        <Grid item xs={6} sm={4} md={3} xl={2} lg={2} >
          <SkillCard
            src={require('./skills/React.png')}
            title="React" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} xl={2} lg={2} >
          <SkillCard
            src={require('./skills/next.png')}
            title="Nextjs" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} xl={2} lg={2} >
          <SkillCard
            src={require('./skills/Csharp.png')}
            title="C#" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} xl={2} lg={2} >
          <SkillCard
            src={require('./skills/dotnet.png')}
            title="Dotnet" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} xl={2} lg={2} >
          <SkillCard
            src={require('./skills/java.png')}
            title="Java" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} xl={2} lg={2} >
          <SkillCard
            src={require('./skills/JEE.png')}
            title="JEE " />
        </Grid>
        <Grid item xs={6} sm={4} md={3} xl={2} lg={2} >
          <SkillCard
            src={require('./skills/spring.png')}
            title="Spring boot " />
        </Grid>
        <Grid item xs={6} sm={4} md={3} xl={2} lg={2} >
          <SkillCard
            src={require('./skills/DRF.png')}
            title="Django " />
        </Grid>
        <Grid item xs={6} sm={4} md={3} xl={2} lg={2} >
          <SkillCard
            src={require('./skills/github.png')}
            title="Git/Github" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} xl={2} lg={2} >
          <SkillCard
            src={require('./skills/laravel.png')}
            title="Laravel" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} xl={2} lg={2} >
          <SkillCard
            src={require('./skills/oracle.png')}
            title="Oracle " />
        </Grid>
        <Grid item xs={6} sm={4} md={3} xl={2} lg={2} >
          <SkillCard
            src={require('./skills/SQL.png')}
            title="sql" />
        </Grid>
      </Grid>

      {/* --------------------------------------------------------------------- */}


      <Divider sx={{ padding: '2rem 1rem', }}>
        <Chip label="Our TimeLine" sx={{ fontSize: '1rem', fontWeight: 600 }} />
      </Divider>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2022-2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <DateRangeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              2nd year computer engineering
            </Typography>
            <Typography>National school of applied science in Fes</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            2021-2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <DateRangeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              1st year computer science engineering
            </Typography>
            <Typography>National school of applied science in Fes</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            2019-2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <DateRangeIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Integrated preparatory cycle
            </Typography>
            <Typography>National school of applied science in Fes</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            2018-2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
              <DateRangeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Baccalaureate of science physics
            </Typography>
            <Typography>Ibno rochd high school / Al bouhaira high school</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </GlowBubble >
  )
};
