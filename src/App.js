import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import CarShow from "./Components/BackGround/BackGround";


function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow/>
      </Canvas>
    </Suspense>
  );
}

export default App;
