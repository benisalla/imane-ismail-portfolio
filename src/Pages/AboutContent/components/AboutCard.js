import Card from '@mui/joy/Card';
import { Typography } from '@mui/joy';

export default function AboutCard({ data }) {

    return (
        <Card
            variant="outlined"
            sx={
                {
                    maxWidth: '420px',
                    minWidth: '230px',
                    flex: 1,
                    border: '2px solid #000',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.33s ease-in-out,border 0s ease-in-out',
                    '&:hover': {
                        cursor: 'default',
                        transform: 'translateY(-5px)',
                        borderColor: '#eee',
                        boxShadow: '1px 4px 15px rgb(255 255 255 / 32 %)',
                    }
                }
            }
        >


            <Typography
                sx={{
                    fontSize: '3rem',
                    fontWeight: 700,
                    margin: '2rem 1rem'
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
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '15px',
                    width: '2rem',
                    height: '2px',
                    backgroundColor: '#423e3e',
                }
            }}>
                {data.firstWord} <br /> {data.secondWord}
            </Typography>
        </Card >
    );
}