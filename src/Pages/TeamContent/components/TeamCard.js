import { useState } from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { CardMedia, IconButton, Tooltip } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LoadingButton from '@mui/lab/LoadingButton';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import VoiceOverOffIcon from '@mui/icons-material/VoiceOverOff';
import music from "../../../assets/audio/sound-effect.mp3"
import { useRef } from 'react';

import IsmailProfile from "../../../assets/ProfileImages/ismail-ben-alla-1.jpg";
import ImaneProfile from "../../../assets/ProfileImages/imane-moutassem-1.jpg";



export default function TeamCard({ data }) {
    const [loadingCV, setLoadingCV] = useState(false);
    const [speak, setSpeak] = useState(false);
    const audioRef = useRef(null);

    const DownLoadCvHandler = () => {
        console.log("donwload cv");
    };

    const SpeachHandler = () => {
        setSpeak(prev => !prev);
        if (!speak) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    return (
        <Card
            variant="outlined"
            sx={{
                display: 'flex',
                flex: 1,
                p: 1,
                flexDirection: data.isLTR ? {
                    xs: 'column-reverse',
                    sm: 'row-reverse',
                } : {
                    xs: 'column',
                    sm: 'row',
                },
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    width="200px"
                    height="300px"
                    alt="Ismail ben alla"
                    src={data.isIsmail ? IsmailProfile : ImaneProfile}
                    sx={{
                        borderRadius: 0.6,
                        width: { xs: '40%', sm: 240 },
                        height: { xs: 'auto', sm: 300 },
                        mr: { sm: 1.5 },
                        mb: { xs: 1.5, sm: 1 },
                    }}
                />

                {/* -------------< say something >------------ */}
                <audio src={music} ref={audioRef} loop />
                <IconButton
                    onClick={SpeachHandler}
                    sx={{
                        color: '#000',
                        position: 'absolute',
                        top: '0.8rem',
                        left: '0.8rem',
                        padding: '4px',
                    }}>
                    {speak ? <RecordVoiceOverIcon /> : <VoiceOverOffIcon />}
                </IconButton>
                {/* -------------< say something >------------ */}
            </Box>
            <Box
                sx={
                    {
                        alignSelf: 'start',
                        ml: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%'
                    }
                }
            >
                <Box>
                    <Typography variant="h1" style={{ fontSize: '26px', textTransform: 'uppercase' }} color="text.secondary">
                        {data.name}
                    </Typography>
                    <Typography variant="h6" style={{ textTransform: 'uppercase', color: '#111', margin: '0', marginBottom: '1rem', padding: '0', fontSize: 'x-small' }} color="text.secondary">
                        {data.profession}
                    </Typography>
                    <Typography variant="dev" color='dark' style={{ marginRight: '0.3rem' }}>
                        {data.description}
                    </Typography>
                </Box>
                <Box
                    sx={
                        {
                            alignSelf: data.isLTR ? 'start' : 'end',
                        }
                    }>
                    <Tooltip title={`Resume of ${data.name}`}>
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
                            startIcon={null}
                            variant="outlined"
                        >
                            <span>DownLoad CV</span>
                        </LoadingButton>
                    </Tooltip>
                </Box>
            </Box>
        </Card >
    );
}