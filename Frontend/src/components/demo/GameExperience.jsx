import React from "react";

import { Environment, OrthographicCamera } from "@react-three/drei";
// import { useControls } from "leva";
import { useRef } from "react";
import { Tugu } from "./models/Tugu";
import { Physics } from "@react-three/rapier";
import { CharacterController } from "./CharacterController";
import { MapTiles } from "./models/Map";

export const Experience = () => {
  const shadowCameraRef = useRef();

  return (
    <>
      {/* <OrbitControls /> */}
      <Environment preset="sunset" />
      <directionalLight
        intensity={0.65}
        castShadow
        position={[-15, 10, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00005}
      >
        <OrthographicCamera
          left={-22}
          right={15}
          top={10}
          bottom={-20}
          ref={shadowCameraRef}
          attach={"shadow-camera"}
        />
      </directionalLight>
      <Physics debug>
        <MapTiles
          initialLat={37.7749}
          initialLon={-122.4194}
          MAP_ZOOM={15}
          MAP_GRID_SIZE={5}
          WORLD_SCALE={10}
        />
        <CharacterController />
        <Tugu scale={0.5} position={[1, 0, 2]} />
      </Physics>
    </>
  );
};
