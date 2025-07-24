import React from "react";

import { Environment, OrthographicCamera } from "@react-three/drei";
// import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Tugu } from "./models/Tugu";
import { Physics } from "@react-three/rapier";
import { CharacterController } from "./CharacterController";
import { MapTiles } from "./models/Map";
import { Chest } from "./models/Chest";
import * as THREE from "three";

import { useGameStore } from "@/store/gameStore";

const ProximityManager = ({ chestPosition, interactionDist }) => {
  const playerPosition = useGameStore((state) => state.playerPosition);
  const setIsNearChest = useGameStore((state) => state.setIsNearChest);
  
  const wasNear = useRef(false);
  const playerVec3 = useRef(new THREE.Vector3());

  useFrame(() => {
    if (playerPosition) {
        playerVec3.current.set(playerPosition.x, playerPosition.y, playerPosition.z);
    }
    
    const distance = playerVec3.current.distanceTo(chestPosition);
    // console.log(`Distance to chest: ${distance.toFixed(2)}`);
    const isNowNear = distance <= interactionDist;
    // console.log(interactionDist);

    if (isNowNear !== wasNear.current) {
      // console.log(
      //   `%cProximity status changed: Player is now ${isNowNear ? 'NEAR' : 'FAR'}`, 
      //   'color: yellow; font-weight: bold; font-size: 14px;'
      // );
      setIsNearChest(isNowNear);
      wasNear.current = isNowNear;
    }
  });

  return null;
};

export const Experience = () => {
  const shadowCameraRef = useRef();
  const INTERACTION_DIST = 0.5
  const chestPos = new THREE.Vector3(1, 0, 0)

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
        <Chest scale={0.5} position={chestPos} />

        <ProximityManager 
          chestPosition={chestPos}
          interactionDist={INTERACTION_DIST} 
        />
      </Physics>
    </>
  );
};
