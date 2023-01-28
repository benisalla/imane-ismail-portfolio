import { Card, Typography } from '@mui/joy';
import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const SkillCard = () => {
    return (
        <Card sx={{ minWidth: '430px', flex: 1 }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        fontWeight: 500,
                        fontSize: '1.3rem',
                        marginBottom: '0.3rem',
                    }}>
                    Html
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    minWidth: '250px',
                }}>
                    <Typography
                        sx={{
                            textTransform: 'uppercase',
                            fontWeight: 500,
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: '1.1rem',
                            marginRight: '1rem',
                        }}>
                        50%
                    </Typography>
                    <LinearProgress
                        variant="buffer"
                        value={60}
                        valueBuffer={100}
                        color='primary'
                        sx={
                            {
                                backgroundColor: "#000",
                                color: '#000',
                                border: '1px solid #111',
                                borderRadius: '6px',
                                height: '12px',
                                flex: 1,
                                width: '100%',
                                "& .MuiLinearProgress-colorPrimary": {
                                    backgroundColor: "#111",
                                },
                                "& .MuiLinearProgress-barColorPrimary": {
                                    backgroundColor: "#fff",
                                },
                            }
                        }
                    />
                </Box>
            </Box>
        </Card >
    )
};

export default SkillCard;
