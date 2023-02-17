import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import GlowBubble from '../../Components/GlowBubble';
import FindUsLogo from '../../Components/Logos/FindUsLogo';

import PlaceIcon from '@mui/icons-material/Place';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PublicIcon from '@mui/icons-material/Public';

export const InfoItem = () => {
    return (
        <Box style={{ display: 'flex', justifyContent:'space-between', margin: "1rem", flex: 1, width: '70%' }}>
            <Box style={{ display: 'flex', justifyContent:'space-between'}}>
                <PlaceIcon/>
                <Typography style={{ marginLeft: "0.5rem" }} variant='subtitle1'>Location</Typography>
            </Box>
            <Typography>
                fes / morroco
            </Typography>
        </Box>
    )
}

export const FindUsContent = () => {

    return (
        <GlowBubble>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <FindUsLogo />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography component="h1" style={{ color: "#000", padding: '1rem', fontSize: '30px', textTransform: 'uppercase' }}>Find us Easly</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography component="h1" style={{ color: "#000", padding: '1.3rem', border: "1px solid #000", borderRadius: '1rem', margin: '1rem' }}>
                    Here are some of our projects that we have completed
                    using different technologies and programming languages.
                </Typography>
            </Box>


            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", justifyContent: "center" }}>
                    <InfoItem/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", justifyContent: "center" }}>
                    <InfoItem/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", justifyContent: "center" }}>
                    <InfoItem/>
                </Grid>
            </Grid>
        </GlowBubble>
    )
};
