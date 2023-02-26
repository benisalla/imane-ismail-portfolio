import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logo/dancing-little-robot.gif";
import HomeIcon from '@mui/icons-material/Home';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import styled from "styled-components";
import { Box } from "@mui/material";
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import { setIsBGASet, setIsStartSound, useISIMController } from "../context";

const Container = styled.div`
  position: fixed;

  .active {
    border-right: 4px solid #647bff;

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: #647bff;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

const Logo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;

const SlickBar = styled.ul`
  color: #647bff;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);

  padding: 2rem 0;

  position: absolute;
  top: 4rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: #647bff;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid #647bff;

    Box {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  Box {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  color: #647bff;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;


const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [controller, dispatch] = useISIMController();




  return (
    <Container style={{ zIndex: 10, position: "fixed", top: 0, left: 0 }}>
      <Button clicked={click} onClick={() => handleClick()}>
        Click
      </Button>
      <SidebarContainer>
        <Link
          to="/"
        >
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
        </Link>
        <SlickBar clicked={click}>
          <Item
            onClick={() => { setClick(false); setIsStartSound(dispatch, true); setIsBGASet(dispatch, true); }}
            activeclassname="active"
            to="/"
          >
            <Box><HomeIcon sx={{ color: "#647bff" }} /></Box>
            <Text clicked={click}>Home</Text>
          </Item>
          <Item
            onClick={() => { setClick(false); setIsStartSound(dispatch, false); setIsBGASet(dispatch, false); }}
            activeclassname="active"
            to="/team"
          >
            <Box><Diversity2Icon sx={{ color: "#647bff" }} /></Box>
            <Text clicked={click}>Team</Text>
          </Item>
          <Item
            onClick={() => { setClick(false); setIsStartSound(dispatch, false); setIsBGASet(dispatch, false); }}
            activeclassname="active"
            to="/about-us"
          >
            <Box><WcOutlinedIcon sx={{ color: "#647bff" }} /></Box>
            <Text clicked={click}>About</Text>
          </Item>
          <Item
            onClick={() => { setClick(false); setIsStartSound(dispatch, false); setIsBGASet(dispatch, false); }}
            activeclassname="active"
            to="/projects"
          >
            <Box><EventAvailableIcon sx={{ color: "#647bff" }} /></Box>
            <Text clicked={click}>Projects</Text>
          </Item>
          <Item
            onClick={() => { setClick(false); setIsStartSound(dispatch, false); setIsBGASet(dispatch, false); }}
            activeclassname="active"
            to="/find-us"
          >
            <Box><TravelExploreIcon sx={{ color: "#647bff" }} /></Box>
            <Text clicked={click}>Find</Text>
          </Item>
          <Item
            onClick={() => { setClick(false); setIsStartSound(dispatch, false); setIsBGASet(dispatch, true); }}
            activeclassname="active"
            to="/contact-us"
          >
            <Box><ConnectWithoutContactIcon sx={{ color: "#647bff" }} /></Box>
            <Text clicked={click}>Contact</Text>
          </Item>
        </SlickBar>
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
