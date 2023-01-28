import { useState } from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { CardMedia, Tooltip } from '@mui/material';
import IsmailProfile from "../../../assets/ProfileImages/ismail-ben-alla-1.jpg";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LoadingButton from '@mui/lab/LoadingButton';

export default function AboutCard() {
    const [loadingCV, setLoadingCV] = useState(false);

    const data = {
        isLTR: false,
        name: "ben alla ismail",
        profession: "computer science engineer",
        description: "something here something here something here something here"
            + "something here something here something here something here"
            + "something here something here something here something here"
            + "something here something here something here something here"
            + "something here something here something here something here",
    };

    const DownLoadCvHandler = () => {
        console.log("donwload cv");
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
            <CardMedia
                component="img"
                width="200px"
                height="300px"
                alt="Ismail ben alla"
                src={IsmailProfile}
                sx={{
                    borderRadius: 0.6,
                    width: { xs: '100%', sm: 240 },
                    height: { xs: 'auto', sm: 300 },
                    mr: { sm: 1.5 },
                    mb: { xs: 1.5, sm: 1 },
                }}
            />
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
                    <Typography variant="dev" color='dark'>
                        {data.description}
                    </Typography>
                </Box>
                <Box
                    sx={
                        {
                            alignSelf: 'end',
                        }
                    }>
                    <Tooltip title={`CV of ${data.name}`}>
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
                        </LoadingButton>
                    </Tooltip>
                </Box>
            </Box>
        </Card >
    );
}