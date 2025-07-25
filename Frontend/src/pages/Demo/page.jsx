import React from "react";

import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Experience } from "../../components/demo/GameExperience";
import Modal from "../../components/Modal";
import FloatingButton from "../../components/demo/FloatingButton";
import FloatingMenuButton from "../../components/demo/FloatingButtonStyle";
import { ChestInteraction } from '../../components/demo/ChestInteraction';
import { LandmarkInteraction } from '../../components/demo/LandmarkInteraction';
import { TriviaModal } from "../../components/demo/TriviaModal";
import { RewardModal } from "../../components/demo/RewardModal";
import LandmarkModal from "../../components/demo/LandmarkModal";
import { ZoomUI } from '../../components/demo/ZoomUI';

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
        <ChestInteraction />
        <LandmarkInteraction />
        <ZoomUI />
        <TriviaModal />
        <RewardModal />
        <LandmarkModal />
      </KeyboardControls>
      <Modal />
      {/* <Menu /> */}
      <FloatingMenuButton />
    </div>
  );
}

export default DemoPage;
