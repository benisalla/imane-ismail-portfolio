import { useState } from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { CardMedia, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LoadingButton from '@mui/lab/LoadingButton';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import VoiceOverOffIcon from '@mui/icons-material/VoiceOverOff';
import { useRef } from 'react';

import IsmailProfile from "../../../assets/ProfileImages/ismail-ben-alla-1.jpg";
import ImaneProfile from "../../../assets/ProfileImages/imane-moutassem-1.jpg";
import ismailVoice from "../../../assets/audio/ismail-voice.mp3";
import imaneVoice from "../../../assets/audio/imane-voice.mp3";
import FileSaver from 'file-saver';

export default function TeamCard({ data }) {
    const [loadingCV, setLoadingCV] = useState(false);
    const [speak, setSpeak] = useState(false);
    const audioRef = useRef(null);

    const DownloadCv = (url) => {
        const Url = process.env.PUBLIC_URL + url;

        Promise.all([
            fetch(Url),
        ])
            .then(responses => {
                const blobs = responses.map(response => response.blob());
                return Promise.all(blobs);
            })
            .then(blobs => {
                FileSaver.saveAs(blobs[0], url);
            })
            .catch(error => {
                console.error('Error downloading PDF files:', error);
            });
    }

    const SpeachHandler = () => {
        setSpeak(prev => !prev);
        if (!speak) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    const isMobile = useMediaQuery('(min-width:768px)');
    const textColor = !isMobile ? "#fff" : "#000";

    return (
        <Card
            variant="outlined"
            sx={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "flex-start",
                flex: 1,
                p: 1,
                flexDirection: data.isLTR ? {
                    // xs: 'column-reverse',
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
                    width="300px"
                    height="400px"
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

                <audio src={data.isIsmail ? ismailVoice : imaneVoice} ref={audioRef} />
                <IconButton
                    onClick={SpeachHandler}
                    sx={{
                        color: textColor,
                        position: 'absolute',
                        top: '0.8rem',
                        left: '0.8rem',
                        padding: '4px',
                    }}>
                    {speak ? <RecordVoiceOverIcon /> : <VoiceOverOffIcon />}
                </IconButton>
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
                    <Typography variant="h1" style={{
                        fontSize: '26px',
                        textTransform: 'uppercase',
                        fontFamily: "Open Sans",
                        color: textColor,
                    }}>
                        {data.name}
                    </Typography>
                    <Typography variant="h6" style={{
                        textTransform: 'uppercase',
                        color: textColor, margin: '0',
                        marginBottom: '1rem', padding: '0',
                        fontSize: 'x-small',
                        fontFamily: "Open Sans",
                    }}>
                        {data.profession}
                    </Typography>
                    <Typography variant="dev" style={{ marginRight: '0.3rem', fontFamily: "Open Sans", fontSize: "1.2rem", color: textColor }}>
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
                                color: textColor,
                                borderColor: textColor,
                                margin: '0.5rem',
                                padding: "0.5rem 1rem",
                                marginBottom: '0.4rem',
                                marginRight: '0.4rem',
                                borderRadius: '1rem',
                            }}
                            onClick={() => DownloadCv(data.url)}
                            loading={loadingCV}
                            loadingPosition="end"
                            endIcon={<CloudDownloadIcon />}
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