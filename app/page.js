"use client"
import { Canvas } from "@react-three/fiber";

import Box from "../components/Box";
import Floor from "../components/Floor";
import LightBulb from "../components/Light";
import OrbitControls from "../components/OrbitControls";
import Draggable from "../components/Draggable";
import { Suspense } from "react";

import styles from "./styles/page.module.css";

export default function App() {
  return (
    <div className={styles.scene}>
      <Canvas
        shadows
        className={styles.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color='red' intensity={0.3} />
        <LightBulb position={[0, 3, 0]} />
        <Draggable>
          <Suspense fallback={null}>
            <Box rotateX={3} rotateY={0.2} />
          </Suspense>
        </Draggable>
        <Floor position={[0, -1, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}