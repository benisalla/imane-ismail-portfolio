import { Route, Routes, useLocation } from "react-router";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Sidebar from './Sidebar'

import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Scene from "./Components/Robot/Scene";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import FindUs from "./Pages/FindUs";
import SoundEffect from "./Components/SoundEffect";
import { setProjects, useISIMController } from "./context";
import axios from "axios";
import { useEffect } from "react";

const Pages = styled.div`
  // width: 80vw;
  // height: 80vh;
  // display: flex;
  // justify-content: center;
`;

function App() {

  // "homepage": "https://benisalla.github.io/imane-ismail-portfolio/",

  const [controller, dispatch] = useISIMController();
  const { isBGASet } = controller;

  const location = useLocation();

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://imane-ismail-portfolio-default-rtdb.firebaseio.com/projects.json',
      params: {},
    }).then(function (response) {
      const keys = Object.keys(response.data);
      const all_projects = [];
      keys.forEach(item => {
        all_projects.push(...response.data[item])
      });
      setProjects(dispatch, all_projects)
      console.log(all_projects)
    }).catch(function (error) {
      console.log("there is an error !");
    })
  }, [])

  return (
    <>
      <SoundEffect />


      <Suspense fallback={"Loading ..."}>
        <Canvas style={{ width: "100vw", height: "100vh" }} shadows>
          {/* {isBGASet ? (<Scene />) : null} */}
          <Scene />
        </Canvas>
      </Suspense>

      <Sidebar />
      
      <Pages>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={null} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/find-us" element={<FindUs />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
