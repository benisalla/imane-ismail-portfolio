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
export const AboutContent = () => {
  const [loadingCV, setLoading] = useState(false);

  const DownLoadCvHandler = () => {
    console.log("downloading the CVs");
  };

  const Carddata = {
    title: '300+',
    firstWord: 'Projects',
    secondWord: 'Completted',
  };

  return (
    <GlowBubble>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <AboutUsLogo />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography component="h1" style={{ color: "#000", padding: '1rem', fontSize: '30px', textTransform: 'uppercase' }}>Who Are we ?</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography component="h1"
          style={{
            color: "#000",
            padding: '1.3rem',
            border: "1px solid #000", borderRadius:
              '1rem', margin: '1rem'
          }}>
          Here are some of our projects that we have completed
          using different technologies and programming languages.
        </Typography>
      </Box>


      <Grid container spacing={1} style={{ marginTop: '2rem' }}>
        <Grid item xs={12} sm={12} md={12} xl={6} lg={6} style={{ display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <Typography variant='h1'
              sx={{
                fontSize: '2rem',
                textTransform: 'uppercase',
              }}>
              Hi there, here is some information about us
            </Typography>
            <Typography variant='subtitle1'
              sx={{
                fontSize: '1.1rem',
                lineHeight: '2rem',
                padding: '1rem',
              }}>
             Two young developers passionate by web developer ...
              We believe that a great website should not only look beautiful but also function flawlessly, and we strive to achieve both.
               we have worked on various projects, from small personal sites to full-stack websites. 
              Our philosophy is to listen to your needs, understand your goals, and work collaboratively to bring your vision to life. 
            We are committed to delivering high-quality work and exceeding your expectations.
             Thank you for visiting our portfolio
            </Typography>
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
                  onClick={DownLoadCvHandler}
                  loading={loadingCV}
                  loadingPosition="start"
                  endIcon={<CloudDownloadIcon />}
                  variant="outlined"
                >
                  <span>DownLoad CV</span>
                </LoadingButton>
              </Tooltip>
            </Box>
          </Card>
        </Grid>

        <Grid container spacing={1} xs={12} sm={12} md={12} xl={6} lg={6} style={{ margin: '2rem 0rem' }}>
          <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{ display: "flex", justifyContent: "center" }}>
            <AboutCard data={Carddata} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{ display: "flex", justifyContent: "center" }}>
            <AboutCard data={Carddata} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{ display: "flex", justifyContent: "center" }}>
            <AboutCard data={Carddata} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{ display: "flex", justifyContent: "center" }}>
            <AboutCard data={Carddata} />
          </Grid>
        </Grid>
      </Grid>


      {/* ------------------------------------------------------------------------------- */}


      <Divider sx={{ padding: '0.4rem 1rem', }}>
        <Chip label="Our Skills" sx={{ fontSize: '1rem', fontWeight: 600 }} />
      </Divider>

      <Grid container spacing={5} style={{ margin: '5rem 0rem' }}>
      <Grid item xs={12} sm={3} md={1.5} xl={1.5} lg={1.5} style={{ display: "flex", justifyContent: "center" }}>
          <SkillCard 
           src= {require('./skills/React.png')} 
           alt=" react"/>
        </Grid>
        <Grid item xs={12} sm={3} md={1.5} xl={1.5} lg={1.5} style={{ margin: '1rem 1rem' ,display: "flex", justifyContent: "center" }}>
          <SkillCard 
           src= {require('./skills/next.png')} 
           alt=" next"/>
        </Grid>
        <Grid item xs={12} sm={3} md={1.5} xl={1.5} lg={1.5} style={{ margin: '1rem 1rem' ,display: "flex", justifyContent: "center" }}>
          <SkillCard
           src= {require('./skills/java.png')} 
           alt=" java"/>
        </Grid>
        <Grid item xs={12} sm={3} md={1.5} xl={1.5} lg={1.5} style={{margin: '1rem 4rem' , display: "flex", justifyContent: "center" }}>
          <SkillCard 
           src= {require('./skills/dotnet.png')} 
           alt=" dotnet"/>
        </Grid>
        <Grid item xs={12} sm={3} md={1.5} xl={1.5} lg={1.5} style={{ margin: '1rem 1rem' , display: "flex", justifyContent: "center" }}>
          <SkillCard
           src= {require('./skills/Csharp.png')} 
           alt=" c"/> 
        </Grid>
        </Grid>

      {/* --------------------------------------------------------------------- */}


      <Divider sx={{ padding: '0.4rem 1rem', }}>
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
            <Typography>Because you need strength</Typography>
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
            <Typography>Because it&apos;s awesome!</Typography>
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
            Integrated preparatory cycle at the national school of applied science in Fes 
            </Typography>
            <Typography>Because you need rest</Typography>
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
            <Typography>Because this is the life you love!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </GlowBubble >
  )
};
