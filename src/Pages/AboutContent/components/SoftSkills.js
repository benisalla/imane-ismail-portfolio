import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Tooltip, tooltipClasses, Typography } from '@mui/material';


//---------------------------------------------------------------------------//

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`& .${stepConnectorClasses.line}`]: {
        top: 30,
        marginTop: "1rem",
        backgroundColor: "#000",
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.grey[900],
    zIndex: 1,
    color: '#fffe',
    width: 60,
    height: 60,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
}));
//-----------------------------------------------------------------------------//
function ColorlibStepIcon1(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <SettingsIcon />,
    };
    const moreInfo = {
        1: {
            title: "Communication",
            content: "Successful communication helps us better " +
                "understand people and situations. It helps us " +
                "overcome diversities, build trust and respect," +
                "and create conditions ...",
        },
    };


    return (
        <BootstrapTooltip title={
            <React.Fragment>
                <Typography color="inherit" style={{ textAlign: "center" }} >
                    {moreInfo[String(props.icon)].title}
                </Typography>
                <Typography variant='div' style={{ fontSize: '12px', fontWeight: '400', margin: "0.1rem" }}>
                    {moreInfo[String(props.icon)].content}
                </Typography>
            </React.Fragment>
        }>
            <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
                {icons[String(props.icon)]}
            </ColorlibStepIconRoot>
        </BootstrapTooltip>
    );
}
//-----------------------------------------------------------------------------//
function ColorlibStepIcon2(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <SettingsIcon />,
        2: <GroupAddIcon />,
        3: <VideoLabelIcon />,
    };
    const moreInfo = {
        1: {
            title: "Communication",
            content: "Successful communication helps us better " +
                "understand people and situations. It helps us " +
                "overcome diversities, build trust and respect," +
                "and create conditions ...",
        },
        2: {
            title: "Communication",
            content: "Successful communication helps us better " +
                "understand people and situations. It helps us " +
                "overcome diversities, build trust and respect," +
                "and create conditions ...",
        },
        3: {
            title: "Communication",
            content: "Successful communication helps us better " +
                "understand people and situations. It helps us " +
                "overcome diversities, build trust and respect," +
                "and create conditions ...",
        },
    };


    return (
        <BootstrapTooltip title={
            <React.Fragment>
                <Typography color="inherit" style={{ textAlign: "center" }} >
                    {moreInfo[String(props.icon)].title}
                </Typography>
                <Typography variant='div' style={{ fontSize: '12px', fontWeight: '400', margin: "0.1rem" }}>
                    {moreInfo[String(props.icon)].content}
                </Typography>
            </React.Fragment>
        }>
            <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
                {icons[String(props.icon)]}
            </ColorlibStepIconRoot>
        </BootstrapTooltip>
    );
}
//-----------------------------------------------------------------------------//
function ColorlibStepIcon3(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <SettingsIcon />,
        2: <GroupAddIcon />,
        3: <VideoLabelIcon />,
    };
    const moreInfo = {
        1: {
            title: "Communication",
            content: "Successful communication helps us better " +
                "understand people and situations. It helps us " +
                "overcome diversities, build trust and respect," +
                "and create conditions ...",
        },
        2: {
            title: "Communication",
            content: "Successful communication helps us better " +
                "understand people and situations. It helps us " +
                "overcome diversities, build trust and respect," +
                "and create conditions ...",
        },
        3: {
            title: "Communication",
            content: "Successful communication helps us better " +
                "understand people and situations. It helps us " +
                "overcome diversities, build trust and respect," +
                "and create conditions ...",
        },
    };


    return (
        <BootstrapTooltip title={
            <React.Fragment>
                <Typography color="inherit" style={{ textAlign: "center" }} >
                    {moreInfo[String(props.icon)].title}
                </Typography>
                <Typography variant='div' style={{ fontSize: '12px', fontWeight: '400', margin: "0.1rem" }}>
                    {moreInfo[String(props.icon)].content}
                </Typography>
            </React.Fragment>
        }>
            <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
                {icons[String(props.icon)]}
            </ColorlibStepIconRoot>
        </BootstrapTooltip>
    );
}

//======================================( titles )========================================//

const steps1 = ['Communication'];
const steps2 = ['Adaptability', 'Hardwork', 'Creativity'];
const steps3 = ['Something', 'Something', 'Something'];


//=========================================( main )=====================================//
export default function SoftSkills() {
    return (
        <>
            <Stepper style={{ marginTop: "2rem", marginBottom: "2rem" }} alternativeLabel activeStep={3} connector={<ColorlibConnector />}>
                {steps1.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon1}>
                            <Typography style={{
                                color: "#000e",
                                fontSize: "1rem",
                                fontWeight: "500",
                                textTransform: 'uppercase',
                                fontFamily: ["monospace", "sans-serif", "cursive"],
                            }}>
                                {label}
                            </Typography>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Stepper style={{ marginTop: "2rem", marginBottom: "2rem" }} alternativeLabel activeStep={3} connector={<ColorlibConnector />}>
                {steps2.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon2}>
                            <Typography style={{
                                color: "#000e",
                                fontSize: "1rem",
                                fontWeight: "500",
                                textTransform: 'uppercase',
                                fontFamily: ["monospace", "sans-serif", "cursive"],
                            }}>
                                {label}
                            </Typography>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Stepper style={{ marginTop: "2rem", marginBottom: "2rem" }} alternativeLabel activeStep={3} connector={<ColorlibConnector />}>
                {steps3.map((label) => (
                    <Step key={label}>
                        <StepLabel
                            StepIconComponent={ColorlibStepIcon3}>
                            <Typography style={{
                                color: "#000e",
                                fontSize: "1rem",
                                fontWeight: "500",
                                textTransform: 'uppercase',
                                fontFamily: ["monospace", "sans-serif", "cursive"],
                            }}>
                                {label}
                            </Typography>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </>
    );
}