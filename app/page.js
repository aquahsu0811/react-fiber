"use client"
import Model from "../components/Model"
import { Canvas } from "@react-three/fiber";
import { useState } from 'react'
import OrbitControls from "../components/OrbitControls";
import { Suspense } from "react";

import styles from "./styles/page.module.css";

export default function App() {
  const [params, setParams] = useState('');

  const handleReceivedParams = (params) => {
    setParams(params);
  };

  return (
    <>
      <div className={styles.scene}>
        <Canvas
          shadows
          className={styles.canvas}
          camera={{ fov: 75, position: [0, 0, 3] }}
        >
          <Suspense fallback={null}>
            <Model onParamsReceived={handleReceivedParams}/>
          </Suspense>

          <OrbitControls />
        </Canvas>
      </div>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px', color:'black' }} href="#" >
      double click to enter portal {params}
      </div>
    </>
  );
}