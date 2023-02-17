import { Card, Typography } from '@mui/joy';
import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const SkillCard = ({src , alt }) => {

    const container ={
        width: '200px',
        height:'150px',
        border_radius:'50%',
        padding:'0px'
        // border_color :'blue',
    };
    return (
       <div>
            <div >
                <img style={container} src={src} alt={alt}/>
            </div>
       </div>
    )
};

export default SkillCard;
