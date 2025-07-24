import React from "react";

import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Experience } from "../../components/demo/GameExperience";
import Menu from "../../components/MenuScreen";
import Modal from "../../components/Modal";
import FloatingButton from "../../components/FloatingButton";

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
      <Modal />
      <Menu />
      <FloatingButton />
    </div>
  );
}

export default DemoPage;
