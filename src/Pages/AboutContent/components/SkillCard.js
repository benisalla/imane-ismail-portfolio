import { Box, Card, Typography, useMediaQuery } from '@mui/material';
import React from 'react'

const SkillCard = ({ src, title }) => {

    const isMobile = useMediaQuery('(min-width:768px)');

    const textColor = !isMobile ? "#647bff" : "#000";
    const borderColor = !isMobile ? "#857f84" : "#000";
    const boxShadow = !isMobile ? '#647bff 1px 1px 4px,#647bff -1px -1px 4px' : '';


    return (
        <Card style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "0.6rem",
            margin: "0.4rem 0.4rem",
            backgroundColor: "#0003",
            minWidth: "160px",
            boxShadow: boxShadow,
        }} sx={{
            transition: "all 0.3s ease",
            '&:hover': {
                boxShadow: "#fff 1px 1px 15px",
            }
        }}>
            <Box style={{ margin: "0.5rem" }}>
                <img src={src} width="100px" height="100px" />
            </Box>
            <Typography component="h1" style={{ color: textColor, padding: '0.5rem', fontWeight: '600', fontSize: '20px', textTransform: 'uppercase' }}>
                {title}
            </Typography>
        </Card>
    )
};

export default SkillCard;
