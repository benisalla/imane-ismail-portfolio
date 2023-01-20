import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import Robot from "./Robot";
import { BlendFunction } from "postprocessing";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useFrame } from "react-three-fiber";
import { useRef, useState } from "react";

const Scene = ({ ready }) => {
  return (
    <>
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.3}
        enableZoom={true}
        enablePan={true}
      />
      <fog attach="fog" args={["#111111", 10, 10]} />
      <Environment preset="night" />
      <group position={[0, -1, 0]}>
        <Robot />
      </group>
      <Stars />

      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={1}
          width={1000}
          height={1000}
          kernelSize={4}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.8}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0005, 0.0012]}
        />
      </EffectComposer>
      <PerspectiveCamera makeDefault fov={65} position={[0, 0, 4]} />
    </>
  );
};

export default Scene;

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(10000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 3]} scale={[7, 7, 7]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={true}
        {...props}
        castShadow
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={1.3}
          width={300}
          height={300}
          kernelSize={3}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.7}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.COLOR}
          offset={[0.0005, 0.0012]}
        />
      </EffectComposer>
    </group>
  );
};
