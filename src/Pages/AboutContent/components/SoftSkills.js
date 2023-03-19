import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Tooltip, tooltipClasses, Typography, useMediaQuery } from '@mui/material';

import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BugReportIcon from '@mui/icons-material/BugReport';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Groups3Icon from '@mui/icons-material/Groups3';
import ShareIcon from '@mui/icons-material/Share';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import { useEffect } from 'react';
import { useState } from 'react';

//---------------------------------------------------------------------------//

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        // backgroundColor: theme.palette.common.black,
        backgroundColor: '#111f28'
    },
}));

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`& .${stepConnectorClasses.line}`]: {
        top: 30,
        marginTop: "1rem",
        backgroundColor: "#CCAEA4",
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
        1: <RecordVoiceOverIcon />,
    };
    const moreInfo = {
        1: {
            title: "Communication",
            content: `The ability to communicate clearly and effectively with both technical and 
                non-technical stakeholders is essential for software engineers to convey technical 
                concepts, provide updates, and resolve conflicts in a project.`,
        },
    };

    const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

    return (
        <BootstrapTooltip
            onClick={() => setTooltipIsOpen(true)}
            open={tooltipIsOpen}
            onOpen={() => setTooltipIsOpen(true)}
            onClose={() => setTooltipIsOpen(false)}
            title={
                <React.Fragment>
                    <Typography color="inherit" style={{ textAlign: "center" }} >
                        {moreInfo[String(props.icon)].title}
                    </Typography>
                    <Typography variant='div' style={{ fontSize: '12px', fontWeight: '400', margin: "0.3rem", lineHeight: '1.2rem' }}>
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
        1: <PsychologyIcon />,
        2: <EngineeringIcon />,
        3: <EmojiObjectsIcon />,
    };
    const moreInfo = {
        1: {
            title: "Adaptability",
            content:
                "It is the key skill that has helped us succeed" +
                " in a variety of roles and environments." +
                "We were able to adjust our approach as needed, " +
                "communicate effectively with team members who were resistant to change, " +
                "and work collaboratively to find solutions to technical issues"
        },
        2: {
            title: "Hardwork",
            content: "It helps us to develop a range of skills and experiences" +
                " that can be valuable to our future employers or clients."
        },
        3: {
            title: "Creativity",
            content: "It helps us to generate new ideas and concepts, " +
                "suggest solutions to improve existing processes" +
                "and to come up with new solutions on the fly.",
        },

    };

    const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

    return (
        <BootstrapTooltip
            onClick={() => setTooltipIsOpen(true)}
            open={tooltipIsOpen}
            onOpen={() => setTooltipIsOpen(true)}
            onClose={() => setTooltipIsOpen(false)}
            title={
                <React.Fragment>
                    <Typography color="inherit" style={{ textAlign: "center" }} >
                        {moreInfo[String(props.icon)].title}
                    </Typography>
                    <Typography variant='div' style={{ fontSize: '12px', fontWeight: '400', margin: "0.3rem", lineHeight: '1.2rem' }}>
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
        1: <Diversity1Icon />,
        2: <BugReportIcon />,
        3: <Groups3Icon />,
    };
    const moreInfo = {
        1: {
            title: "Teamwork",
            content: "In many projects, we collaborate with others to brainstorm ideas, " +
                "listen to and incorporate feedback from others ..."
        },
        2: {
            title: "problem-solving ",
            content: " It's our ability to identify problems, analyze information, and develop effective solutions.",
        },
        3: {
            title: "Leadership",
            content: " Our cability to motivate " +
                "and inspire others, set goals and priorities, and communicate effectively with stakeholders."
        },
    };

    const isMobile = useMediaQuery('(min-width:768px)');

    const textColor = !isMobile ? "#647bff" : "#000";
    const borderColor = !isMobile ? "#857f84" : "#000";

    const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

    return (
        <BootstrapTooltip
            onClick={() => setTooltipIsOpen(true)}
            open={tooltipIsOpen}
            onOpen={() => setTooltipIsOpen(true)}
            onClose={() => setTooltipIsOpen(false)}
            title={
                <React.Fragment>
                    <Typography color="inherit" style={{ textAlign: "center" }} >
                        {moreInfo[String(props.icon)].title}
                    </Typography>
                    <Typography variant='div' style={{ fontSize: '12px', fontWeight: '400', margin: "0.3rem", lineHeight: '1.2rem' }}>
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






function ColorlibStepIcon4(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <HourglassTopIcon />,
        2: <GroupWorkIcon />,
        3: <ShareIcon />,
    };
    const moreInfo = {
        1: {
            title: "Time management",
            content: "  We can prioritize tasks, meet deadlines, and manage your workload effectively..",

        },
        2: {
            title: "Collaboration",
            content: `  Collaboration skills are crucial for software engineers to work effectively with 
                        cross-functional teams, including designers, project managers, and stakeholders, 
                        to achieve project goals and deliver quality software products within the given time frame.`,
        },
        3: {
            title: "networking",
            content: " it's really impprtant to build and maintain professional relationships, and to network effectively to achieve goals"
        },
    };

    const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

    return (
        <BootstrapTooltip
            onClick={() => setTooltipIsOpen(true)}
            open={tooltipIsOpen}
            onOpen={() => setTooltipIsOpen(true)}
            onClose={() => setTooltipIsOpen(false)}
            title={
                <React.Fragment>
                    <Typography color="inherit" style={{ textAlign: "center" }} >
                        {moreInfo[String(props.icon)].title}
                    </Typography>
                    <Typography variant='div' style={{ fontSize: '12px', fontWeight: '400', margin: "0.3rem", lineHeight: '1.2rem' }}>
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


const steps1 = ['Communication'];
const steps2 = ['Adaptability', 'Hardwork', 'Creativity'];
const steps3 = ['Teamwork', 'Problem-solving', 'Leadership'];
const steps4 = ['Time management', 'Collaboration', 'Networking'];


export default function SoftSkills() {
    const [steps1, setSteps1] = useState(['CM'])
    const [steps2, setSteps2] = useState(['AD', 'HA', 'CR'])
    const [steps3, setSteps3] = useState(['TW', 'PS', 'LS'])
    const [steps4, setSteps4] = useState(['TM', 'CB', 'N'])

    const isMobile = useMediaQuery('(min-width:768px)');
    const textColor = !isMobile ? "#647bff" : "#000";
    const borderColor = !isMobile ? "#857f84" : "#000";

    useEffect(() => {
        if (isMobile) {
            setSteps1(() => ['Communication'])
            setSteps2(() => ['Adaptability', 'Hardwork', 'Creativity'])
            setSteps3(() => ['Teamwork', 'Problem-solving', 'Leadership'])
            setSteps4(() => ['Time management', 'Collaboration', 'Networking'])
        } else {
            setSteps1(() => ['CM'])
            setSteps2(() => ['AD', 'HA', 'CR'])
            setSteps3(() => ['TW', 'PS', 'LS'])
            setSteps4(() => ['TM', 'CB', 'N'])
        }
    }, [isMobile])

    return (
        <>
            <Stepper style={{ marginTop: "2rem", marginBottom: "2rem" }} alternativeLabel activeStep={3} connector={<ColorlibConnector />}>
                {steps1.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon1}>
                            <Typography style={{
                                color: textColor,
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
                                color: textColor,
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
                                color: textColor,
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
                {steps4.map((label) => (
                    <Step key={label}>
                        <StepLabel
                            StepIconComponent={ColorlibStepIcon4}>
                            <Typography style={{
                                color: textColor,
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