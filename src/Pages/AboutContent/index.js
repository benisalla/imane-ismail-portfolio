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
              motiviationnal text about us here, motiviationnal text about us here, motiviationnal text about us here,
              motiviationnal text about us here, motiviationnal text about us here, motiviationnal text about us here,
              motiviationnal text about us here, motiviationnal text about us here, motiviationnal text about us here,
              motiviationnal text about us here, motiviationnal text about us here, motiviationnal text about us here,
              motiviationnal text about us here, motiviationnal text about us here, motiviationnal text about us here,
              motiviationnal text about us here, motiviationnal text about us here, motiviationnal text about us here,
              motiviationnal text about us here, motiviationnal text about us here, motiviationnal text about us here,
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

      <Grid container spacing={1} style={{ margin: '2rem 0rem' }}>
        <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{ display: "flex", justifyContent: "center" }}>
          <SkillCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{ display: "flex", justifyContent: "center" }}>
          <SkillCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{ display: "flex", justifyContent: "center" }}>
          <SkillCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6} lg={6} style={{ display: "flex", justifyContent: "center" }}>
          <SkillCard />
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
            9:30 am
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
              Eat
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
            10:00 am
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
              Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <DateRangeIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Sleep
            </Typography>
            <Typography>Because you need rest</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color="secondary">
              <DateRangeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </GlowBubble >
  )
};
