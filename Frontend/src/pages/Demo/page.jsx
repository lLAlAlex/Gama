import React from "react";  // Add this line

import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Experience } from "../../components/demo/GameExperience";

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
];

function DemoPage() {
  return (
    <div id="canvas-container">
      <KeyboardControls map={keyboardMap}>
        <Canvas shadows camera={{ position: [3, 3, 3], near: 0.1, fov: 40 }}>
          <color attach="background" args={["#ececec"]} />
          <Experience />
        </Canvas>
      </KeyboardControls>
    </div>
  );
}

export default DemoPage;
