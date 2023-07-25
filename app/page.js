"use client"
import Model from "../components/Model"
import { Canvas } from "@react-three/fiber";
import { useState } from 'react'
import OrbitControls from "../components/OrbitControls";
import { Suspense } from "react";

import styles from "./styles/page.module.css";

export default function App() {
  const [params, setParams] = useState(0);
  const handleReceivedParams = (params) => {
    console.log('test:',params)
    if(params === 0 ){
      setParams(params);
    }
    else{
      console.log('else')
      setParams(0)
    }
  };

  return (
    <>
      <Model />
    </>
  );params
}