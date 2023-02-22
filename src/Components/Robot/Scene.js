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
      <fog attach="fog" args={["#111110", 10, 10]} />
      <Environment preset="forest" />
      <group position={[0, -1, 0]}>
        <Robot />
      </group>
      <Stars />

      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.LIGHTEN}
          intensity={0.2}
          width={1000}
          height={1000}
          kernelSize={3}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.7}
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
    random.inSphere(new Float32Array(2000), { radius: 1.5 })
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
          color="#fff"
          size={0.028}
          sizeAttenuation={true}
          depthWrite={false}
          Bloom
        />
      </Points>
      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={20}
          color="#fff"
          width={400}
          height={400}
          kernelSize={3}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.7}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.COLOR}
          offset={[0.005, 0.012]}
        />
      </EffectComposer>
    </group>
  );
};
