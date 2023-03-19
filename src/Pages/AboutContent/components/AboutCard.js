import Card from '@mui/joy/Card';
import { Typography } from '@mui/joy';
import { useMediaQuery } from '@mui/material';

export default function AboutCard({ data }) {

    const isMobile = useMediaQuery('(min-width:768px)');

    const textColor = !isMobile ? "#647bff" : "#000";
    const borderColor = !isMobile ? "#857f84" : "#000";


    return (
        <Card
            variant="outlined"
            sx={
                {
                    maxWidth: '420px',
                    minWidth: '200px',
                    flex: 1,
                    border: '2px solid #000',
                    borderRadius: '1rem',
                    padding: '1.5rem 0.8rem',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.33s ease-in-out,border 0s ease-in-out',
                    borderColor: borderColor,
                    '&:hover': {
                        cursor: 'default',
                        transform: 'translateY(-5px)',
                        borderColor: '#647bff',
                        boxShadow: '1px 4px 15px rgb(255 255 255 / 32 %)',
                    }
                }
            }
        >


            <Typography
                sx={{
                    fontSize: '3rem',
                    fontWeight: 700,
                    margin: '2rem 1rem',
                    color: textColor,
                }}>
                {data.title}
            </Typography>

            <Typography sx={{
                paddingLeft: '3rem',
                marginBottom: '0.4rem',
                position: 'relative',
                textTransform: 'uppercase',
                fontSize: '1.2rem',
                letterSpacing: "2px",
                color: textColor,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '15px',
                    width: '2rem',
                    height: '2px',
                    backgroundColor: borderColor,
                }
            }}>
                {data.firstWord} <br /> {data.secondWord}
            </Typography>
        </Card >
    );
}