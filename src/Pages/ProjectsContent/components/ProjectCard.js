import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ismailImg from "../../../assets/ProfileImages/ismail-ben-alla-1.jpg";
import imaneImg from "../../../assets/ProfileImages/imane-moutassem-1.jpg";

export default function ProjectCard({ data }) {

    return (
        <Card
            sx={{
                width: 300,
                bgcolor: 'initial',
                boxShadow: 'none',
                '--Card-padding': '0px',
                border: '1px #000 solid',
                padding: '0.5rem',
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <AspectRatio ratio="4/3">
                    <figure>
                        <img
                            src={data.project_img}
                            loading="lazy"
                            alt="project image"
                        />
                    </figure>
                </AspectRatio>
                <CardCover
                    className="gradient-cover"
                    sx={{
                        '&:hover, &:focus-within': {
                            opacity: 1,
                        },
                        opacity: 0,
                        transition: '0.1s ease-in',
                        background:
                            'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                p: 2,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 1.5,
                                flexGrow: 1,
                                alignSelf: 'flex-end',
                            }}
                        >
                            <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                                <Typography

                                    sx={{
                                        color: '#fff',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        display: 'block',
                                    }}
                                >
                                    Project Name
                                </Typography>
                            </Typography>
                            <Box sx={{ alignSelf: 'end', }}>
                                <Link
                                    color="neutral"
                                    sx={{
                                        ml: '4px',
                                        '&:hover': {
                                            color: '#eee',
                                            backgroundColor: "#111"
                                        },
                                        width: "fit-content",
                                        height: "fit-content",
                                        padding: '0.1rem',
                                        borderRadius: '50%',
                                        border: '1px solid #000',
                                        marginLeft: '0.1rem',
                                    }}
                                    href={data.see_link}
                                    underline="none">
                                    <VisibilityIcon />
                                </Link>
                                <Link
                                    color="neutral"
                                    sx={{
                                        mr: '4px',
                                        '&:hover': {
                                            color: '#eee',
                                            backgroundColor: "#111"
                                        },
                                        width: "fit-content",
                                        height: "fit-content",
                                        padding: '0.1rem',
                                        borderRadius: '50%',
                                        border: '1px solid #000',
                                        marginLeft: '0.1rem',
                                    }}
                                    href={data.github_link}
                                    underline="none">
                                    <GitHubIcon />
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </CardCover>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mt: 1.5, alignItems: 'center' }}>
                <Avatar
                    src={data.isIsmail ? ismailImg : imaneImg}
                    size="sm"
                    sx={{ '--Avatar-size': '1.5rem' }}
                />
                <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
                    {data.owner_name}
                </Typography>
                <Chip
                    variant="outlined"
                    color="neutral"
                    size="sm"
                    sx={{
                        borderRadius: 'sm',
                        py: 0.25,
                        px: 0.5,
                    }}
                >
                    {data.Techs}
                </Chip>
            </Box>
        </Card>
    );
}