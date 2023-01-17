import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Scene from "./Components/Robot/Scene";

function App() {
  return (
    <Suspense fallback={"Loading ..."}>
      <Canvas style={{ width: "100vw", height: "100vh" }} shadows>
        <Scene />
      </Canvas>
    </Suspense>
  );
}

export default App;
