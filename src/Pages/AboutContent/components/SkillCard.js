import { Box, Card, Typography } from '@mui/material';
import React from 'react'

const SkillCard = ({ src, title }) => {

    return (
        <Card style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "1rem",
        }}>
            <Box style={{ margin: "1rem" }}>
                <img src={src} width="60px" height="70px" />
            </Box>
            <Typography component="h1" style={{ color: "#fff", padding: '0.5rem', fontSize: '30px', textTransform: 'uppercase' }}>{title}</Typography>
        </Card>
    )
};

export default SkillCard;
