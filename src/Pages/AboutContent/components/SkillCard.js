import { Box, Card, Typography } from '@mui/material';
import React from 'react'

const SkillCard = ({ src, title }) => {

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
        }} sx={{
            transition: "all 0.3s ease",
            '&:hover': {
                boxShadow: "#000 2px 2px 10px",
            }
        }}>
            <Box style={{ margin: "0.5rem" }}>
                <img src={src} width="100px" height="100px" />
            </Box>
            <Typography component="h1" style={{ color: "#000", padding: '0.5rem', fontWeight: '600', fontSize: '20px', textTransform: 'uppercase' }}>
                {title}
            </Typography>
        </Card>
    )
};

export default SkillCard;
