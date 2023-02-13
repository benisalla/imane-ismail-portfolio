import { Route, Routes, useLocation } from "react-router";
import Home from "./Pages/Home";
import  Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Calender from "./Pages/Calender";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Sidebar from './Sidebar'

import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Scene from "./Components/Robot/Scene";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

const Pages = styled.div`
  // width: 80vw;
  // height: 80vh;
  // display: flex;
  // justify-content: center;
`;

function App() {

  const location = useLocation();
  console.log(location)

  return (
    <>
      {/* <Suspense fallback={"Loading ..."}>
        <Canvas style={{ width: "100vw", height: "100vh" }} shadows>
          <Scene />
        </Canvas>
      </Suspense> */}
      <Sidebar />
      <Pages>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/>
            <Route path="/team" element={<Team/>} />
            <Route path="/calender" element={<Calender/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
