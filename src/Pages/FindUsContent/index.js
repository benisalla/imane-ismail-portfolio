import { Button, Chip, Divider, FormControl, Grid, Input, TextField, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useRef } from 'react'
import GlowBubble from '../../Components/GlowBubble';
import FindUsLogo from '../../Components/Logos/FindUsLogo';

import PlaceIcon from '@mui/icons-material/Place';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import TwitterIcon from '@mui/icons-material/Twitter';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';

import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { useReducer } from 'react';

export const InfoItem = ({ icon, title, value1, value2 = "" }) => {
    return (
        <Box
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: "0.2rem auto",
                flex: 1,
                maxWidth: "600px",
                borderLeft: "5px solid #000",
                borderRight: "5px solid #000",
                borderRadius: "14px",
                borderBottom: "1px solid #000",
                borderTop: "1px solid #000",
                borderRadius: "30px",
                padding: "0.8rem 1rem",
            }}>
            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {icon}
                <Typography style={{ marginLeft: "1.5rem" }} variant='subtitle1'>{title}</Typography>
            </Box>
            <Box>
                <Typography>
                    {value1}
                </Typography>
                <Typography>
                    {value2}
                </Typography>
            </Box>

        </Box >
    )
}


export const FindUsContent = () => {

    const [loadingCV, setLoadingCV] = useState(false);
    const [speak, setSpeak] = useState(false);
    const emailForm = useReducer();
    const alink = useRef();

    const DownLoadCvHandler = () => {
        alink.current.click();
    };

    const sendEmailHandler = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_5s0wiui', 'template_83upqxr', emailForm.current, 'W22FKR99ev5JVpQ9C');
        emailjs.sendForm('service_zo6qs9s', 'template_uf3owpp', emailForm.current, 'wwXOU0MamY4x_a4cZ');
    }



    return (
        <GlowBubble>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <FindUsLogo />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography component="h1" style={{ color: "#000", padding: '1rem', fontSize: '34px', textTransform: 'uppercase' }}>Find us Easly</Typography>
            </Box>

            <Grid container spacing={1} style={{ marginTop: "1rem" }}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", justifyContent: "center" }}>
                    <InfoItem icon={<PlaceIcon />} title="Location" value1="Moroco / fes" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", justifyContent: "center" }}>
                    <InfoItem icon={<EmailIcon />} title="Email" value1="ismail.benalla1@usmba.ac.ma" value2="imane@gmail.com" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", justifyContent: "center" }}>
                    <InfoItem icon={<SchoolIcon />} title="Education" value1="Computer science engineering" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", justifyContent: "center" }}>
                    <InfoItem icon={<PhoneIcon />} title="Mobile Number" value1="(+212) 06 04 06 63 55" value2="(+212) 06 04 06 63 55" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", justifyContent: "center" }}>
                    <InfoItem icon={<PublicIcon />} title="Languages" value1="English" value2="Frensh" />
                </Grid>
            </Grid>

            <Divider sx={{ padding: '1rem 1rem', }}>
                <Chip label="Just click, They are so smooth 😁" sx={{ fontSize: '1rem', fontWeight: 600 }} />
            </Divider>

            <Grid container spacing={1} style={{ justifyContent: "center" }}>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} style={{ display: "flex", justifyContent: "center" }}>
                    <Box style={{ margin: "0.6rem", border: '1px dashed #000', borderRadius: "5px", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <a href="www.google.com"><GitHubIcon fontSize='large' style={{ color: "#000" }} /></a>
                    </Box>
                    <Box style={{ margin: "0.6rem", border: '1px dashed #000', borderRadius: "5px", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <a href="www.google.com"><LinkedInIcon fontSize='large' style={{ color: "#000" }} /></a>
                    </Box>
                    <Box style={{ margin: "0.6rem", border: '1px dashed #000', borderRadius: "5px", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <a href="www.google.com"><LogoDevIcon fontSize='large' style={{ color: "#000" }} /></a>
                    </Box>
                    <Box style={{ margin: "0.6rem", border: '1px dashed #000', borderRadius: "5px", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <a href="www.google.com"><TwitterIcon fontSize='large' style={{ color: "#000" }} /></a>
                    </Box>
                </Grid>
            </Grid>

            <Divider sx={{ padding: '1rem 1rem', }}>
                <Chip label="Feel Free to Send an Email 😀" sx={{ fontSize: '1rem', fontWeight: 600 }} />
            </Divider>

            <form ref={emailForm} >
                <Grid container spacing={1} style={{ marginTop: "1rem", justifyContent: "center" }} variant="form" >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", justifyContent: "center", maxWidth: "600px", margin: "0.3rem" }}>
                        <input
                            name="sender_name"
                            placeholder="Your Name ..."
                            style={{
                                borderRadius: "30px",
                                fontSize: "1rem",
                                padding: " 1rem 1.2rem",
                                outline: "none",
                                border: "none",
                                backgroundColor: "#000",
                                width: "100%",
                                color: "white",
                                resize: "none",
                            }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", justifyContent: "center", maxWidth: "600px", margin: "0.3rem" }}>
                        <input
                            name="sender_email"
                            placeholder="Your Email ..."
                            style={{
                                borderRadius: "30px",
                                fontSize: "1rem",
                                padding: " 1rem 1.2rem",
                                outline: "none",
                                border: "none",
                                backgroundColor: "#000",
                                width: "100%",
                                color: "white",
                                resize: "none",
                            }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", justifyContent: "center", maxWidth: "600px", margin: "0.3rem" }}>
                        <input
                            name="sender_subject"
                            placeholder="Subject ..."
                            style={{
                                borderRadius: "30px",
                                fontSize: "1rem",
                                padding: " 1rem 1.2rem",
                                outline: "none",
                                border: "none",
                                backgroundColor: "#000",
                                width: "100%",
                                color: "white",
                                resize: "none",
                            }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", justifyContent: "center", maxWidth: "600px", margin: "0.3rem" }}>
                        <textarea
                            name="sender_message"
                            placeholder="Your message ..."
                            rows="8" cols="70"
                            style={{
                                borderRadius: "30px",
                                fontSize: "1rem",
                                padding: " 1rem 1.2rem",
                                outline: "none",
                                border: "none",
                                backgroundColor: "#000",
                                width: "100%",
                                color: "white",
                                resize: "none",
                            }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", justifyContent: "center", maxWidth: "600px", margin: "0.3rem" }}>
                        <Button type="submit" onClick={sendEmailHandler} variant="outlined" endIcon={<SendIcon />}
                            sx={{
                                color: "#000",
                                borderColor: '#000',
                                margin: '0.5rem auto',
                                padding: "0.6rem 4rem",
                                borderRadius: '1rem',

                            }}>
                            Send It!
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <Grid container spacing={1} style={{ marginTop: "1rem", marginBottom: "1rem", justifyContent: "center" }}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ display: "flex", justifyContent: "center", maxWidth: "600px", margin: "0.3rem" }}>
                    <Tooltip title={`Both Resumes`}>
                        <LoadingButton
                            sx={{
                                color: "#000",
                                borderColor: '#000',
                                margin: '0.5rem',
                                padding: "0.5rem 1rem",
                                marginBottom: '0.4rem',
                                marginRight: '0.4rem',
                                borderRadius: '1rem',
                            }}
                            onClick={DownLoadCvHandler}
                            loading={loadingCV}
                            loadingPosition="start"
                            endIcon={<CloudDownloadIcon />}
                            variant="outlined"
                        >
                            <span>DownLoad CV</span>
                            <a ref={alink} href='../../assets/cv/ben_alla_ismail_cv.pdf' style={{display:"none"}}
                            download="ismail-ben-alla-cv.pdf"></a>
                        </LoadingButton>
                    </Tooltip>
                </Grid>
            </Grid>

        </GlowBubble >
    )
};
