"use client"
import { Canvas } from "@react-three/fiber";

import Box from "../components/Box";
import Floor from "../components/Floor";
import LightBulb from "../components/Light";
import OrbitControls from "../components/OrbitControls";
import Draggable from "../components/Draggable";
import Model from "../components/Model"
import { Suspense } from "react";

import styles from "./styles/page.module.css";

export default function App() {
  return (
    <div className={styles.scene}>
      <Canvas
        shadows
        className={styles.canvas}
        camera={{ fov: 75, position: [0, 0, 3] }}
      >
        <color attach="background" args={['#f0f0f0']} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}