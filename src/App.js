import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Scene from "./Components/Robot/Scene";
import Sidebar from "./Components/Sidebar/Sidebar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    // <Suspense fallback={"Loading ..."}>
    //   <Canvas style={{ width: "100vw", height: "100vh" }} shadows>
    //     <Scene />
    //     <Sidebar></Sidebar>
    //   </Canvas>
    // </Suspense>
  // <Router>
  //   <Routes>
  //     <Route path='/home'  component={Home}/>
  //   </Routes>
  // </Router>
  <div>
    <Sidebar/>
  </div>
  );
}

export default App;
