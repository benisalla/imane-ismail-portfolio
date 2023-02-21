import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import GlowBubble from '../../Components/GlowBubble';
import TeamLogo from '../../Components/Logos/TeamLogo';
import TeamCard from './components/TeamCard';

export const TeamContent = () => {

  const ismail = {
    isLTR: false,
    isIsmail: true,
    name: "ben alla ismail",
    profession: "computer science engineer",
    description: `
    Hello, My name is Ben alla Ismail, and I'm a software engineering student who is enthusiastic 
    about developing unique, user-friendly software solutions.
    As a software engineer, I am always looking for new technologies to learn and apply in 
    order to create robust, efficient, and scalable software solutions.
    Among the programming languages I am familiar with are Java, C++, C#, and JavaScript.

    and hands-on experience building web applications with frameworks like React.js and ASP.NET.
    In addition to my technical abilities, I excel at communication, problem-solving, and teamwork.
    I've worked on numerous projects both independently and as part of a team, and I'm familiar with the 
    software development life cycle.
    `,
    url: "ben_alla_ismail_cv.pdf"
  }
  const imane = {
    isLTR: true,
    isIsmail: false,
    name: "moutassem imane",
    profession: "computer science engineer",
    description: `
    Hello, I'm Mouatassem imane, a software engineering student passionate about building innovative and user-friendly software solutions. 
    As a software engineer, I'm constantly striving to learn and apply new technologies to create robust, efficient,
    and scalable software solutions. I'm experienced in programming languages such as Java, C++,C# and JavaScript, 
    and have hands-on experience in building web applications using frameworks like React.js and ASP.NET.
    In addition to my technical skills, I possess excellent communication, problem-solving, and teamwork skills. 
    I've worked on various projects both independently and as part of a team, and have experience in all stages of 
    the software development life cycle.
    `,
    url: "Mouatassem Imane.pdf"
  }

  return (
    <GlowBubble>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <TeamLogo />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography component="h1" style={{ color: "#000", padding: '1rem', fontSize: '30px', textTransform: 'uppercase' }}>Our Team</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography component="h1" style={{ color: "#000", padding: '1.3rem', border: "1px solid #000", borderRadius: '1rem', margin: '1rem' }}>
          We believe in staying current with industry trends and staying up-to-date with
          the latest technologies and tools. We are committed to continuous learning and growth,
          and I always strive to improve my skills and knowledge.
        </Typography>
      </Box>


      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} xl={6} lg={12} style={{ display: "flex", justifyContent: "center" }}>
          <TeamCard data={ismail} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={6} lg={12} style={{ display: "flex", justifyContent: "center" }}>
          <TeamCard data={imane} />
        </Grid>

      </Grid>
    </GlowBubble>
  )
};
