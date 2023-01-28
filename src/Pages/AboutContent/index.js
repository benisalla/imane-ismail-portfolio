import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import GlowBubble from '../../Components/GlowBubble';
import TeamLogo from '../../Components/Logos/TeamLogo';

import AboutCard from './components/AboutCard';

export const AboutContent = () => {
  return (
    <GlowBubble>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <TeamLogo />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography component="h1" style={{ color: "#000", padding: '2rem' }}>
          Here are some of our projects that we have completed
          using different technologies and programming languages.
        </Typography>
      </Box>


      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} xl={6} lg={12}  style={{ display: "flex", justifyContent: "center" }}>
          <AboutCard />
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={6} lg={12}  style={{ display: "flex", justifyContent: "center" }}>
          <AboutCard />
        </Grid>

      </Grid>
    </GlowBubble>
  )
};
