import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import CarShow from "./Components/BackGround/CarShow";
import Nature from "./Components/BackGround/Nature";


function App() {
  return (
    <Suspense fallback={"Loading ..."}>
      {/* <Canvas shadows>
        <CarShow />
      </Canvas> */}
      <Canvas shadows camera={{ position: [0, 0, 12], fov: 30 }}>
        <Nature/>
      </Canvas>
    </Suspense>
  );
}

export default App;
