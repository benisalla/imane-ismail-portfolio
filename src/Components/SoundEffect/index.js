import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import music from "../../assets/audio/sound-effect.mp3"

const Box = styled.div`
display:flex;
cursor:pointer;
position:fixed;
right:1.6rem;
bottom:1rem;
z-index:999;

&>*:nth-child(1){
    animation-delay: 0.1s;
}
&>*:nth-child(2){
    animation-delay: 0.15s;
}
&>*:nth-child(3){
    animation-delay: 0.2s;
}
&>*:nth-child(4){
    animation-delay: 0.25s;
}
&>*:nth-child(5){
    animation-delay: 0.3s;
}
&>*:nth-child(6){
    animation-delay: 0.35s;
}
&>*:nth-child(7){
    animation-delay: 0.4s;
}
&>*:nth-child(8){
    animation-delay: 0.45s;
}
&>*:nth-child(9){
    animation-delay: 0.5s;
}
&>*:nth-child(10){
    animation-delay: 0.55s;
}
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const Line = styled.span`
background: ${props => props.theme.text};
border: 1px solid ${props => props.theme.body};

animation:${play} 1s ease infinite;
animation-play-state: ${props => props.isPlay ? "running" : "paused"};
height: 1rem;
width: 2px;
margin:0 0.1rem;
background-color: #fff;
`

const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

const SoundEffect = () => {

    const ref = useRef(null);
    const [isPlay, setIsPlay] = useState(false);
    const [isChangeColor, setIsChangeColor] = useState(false);
    const [color, setColor] = useState(colorArray[0])

    const playSoundEffectHandler = () => {
        setIsPlay(!isPlay);
        if (!isPlay) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }

    useEffect(() => {

        const timer = setInterval(() => {
            const index = Math.floor(Math.random() * colorArray.length);
            setColor(() => colorArray[index]);
            if (isPlay) {
                setIsChangeColor(prev => !prev);
            } else {
                clearInterval(timer);
            }
        }, 700)

        return () => {
            clearInterval(timer);
        }
    }, [isChangeColor])


    useEffect(() => {
        if (isPlay) {
            setIsChangeColor(prev => !prev);
        }
    }, [isPlay])


    return (
        <Box onClick={() => playSoundEffectHandler()}>
            <Line isPlay={isPlay} style={{ color }} />
            <Line isPlay={isPlay} style={{ color }} />
            <Line isPlay={isPlay} style={{ color }} />
            <Line isPlay={isPlay} style={{ color }} />
            <Line isPlay={isPlay} style={{ color }} />
            <Line isPlay={isPlay} style={{ color }} />
            <Line isPlay={isPlay} style={{ color }} />
            <Line isPlay={isPlay} style={{ color }} />
            <Line isPlay={isPlay} style={{ color }} />
            <Line isPlay={isPlay} style={{ color }} />
            <audio src={music} ref={ref} loop />
        </Box>
    )
}

export default SoundEffect
