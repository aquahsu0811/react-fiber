"use client"
import { useEffect, useRef, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useLoader, extend, useFrame } from "@react-three/fiber";
import { MeshPortalMaterial, CameraControls, Gltf, Text, useCursor } from '@react-three/drei'
import { easing, geometry } from 'maath'
import * as THREE from 'three'
import { suspend } from 'suspend-react'

extend(geometry)
const regular = import('@pmndrs/assets/fonts/inter_regular.woff')
const medium = import('@pmndrs/assets/fonts/inter_medium.woff')

function Model({onParamsReceived }) {

    const handleFrameDoubleClick = (id) => {
        onParamsReceived(id);
      };

    return (
        <>
            <color attach="background" args={['#f0f0f0']} />
            <Frame id="1" name={`pick\nles`} author="Omar Faruq Tawsif" bg="#e4cdac" position={[-1.15, 0, 0]} rotation={[0, 0.5, 0]} onFrameDoubleClick={handleFrameDoubleClick} >
                <Gltf src="/model/pickles_3d_version_of_hyuna_lees_illustration-transformed.glb" scale={8} position={[0, -0.7, -2]} />
            </Frame>
            <Frame id="2" name="tea" author="Omar Faruq Tawsif" onFrameDoubleClick={handleFrameDoubleClick} >
                <Gltf src="/model/fiesta_tea-transformed.glb" position={[0, -2, -3]} />
            </Frame>
            <Frame id="3" name="still" author="Omar Faruq Tawsif" bg="#d1d1ca" position={[1.15, 0, 0]} rotation={[0, -0.5, 0]} onFrameDoubleClick={handleFrameDoubleClick} >
                <Gltf src="/model/still_life_based_on_heathers_artwork-transformed.glb" scale={2} position={[0, -0.8, -4]} />
            </Frame>
        </>
    );
}
export default Model;

function Frame({ id, name, author, bg, width = 1, height = 1.61803398875,  children, onFrameDoubleClick, ...props }) {
    const portal = useRef()
    const router = useRouter()
    const [hovered, hover] = useState(false)
    let params = ""
    console.log(params)
    useCursor(hovered)
    useFrame((state, dt) => easing.damp(portal.current, 'blend', params === id ? 1 : 0, 0.2, dt))
    return (
        <group {...props}>
            <Text font={suspend(medium).default} fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
                {name}
            </Text>
            <Text font={suspend(regular).default} fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>
                /{id}
            </Text>
            <Text font={suspend(regular).default} fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>
                {author}
            </Text>
            <mesh name={id} onDoubleClick={(e) => ( params = id, onFrameDoubleClick(id))} 
                            onPointerOver={(e) => hover(true)} 
                            // onPointerOut={() => hover(false)}
                            >
                <roundedPlaneGeometry args={[width, height, 0.1]} />
                <MeshPortalMaterial ref={portal} side={THREE.DoubleSide}>
                    <color attach="background" args={[bg]} />
                    {children}
                </MeshPortalMaterial>
            </mesh>
        </group>
    )
}

function Rig({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }) {
    const { controls, scene } = useThree()
    const [, params] = useRoute('/item/:id')
    useEffect(() => {
      const active = scene.getObjectByName(params?.id)
      if (active) {
        active.parent.localToWorld(position.set(0, 0.5, 0.25))
        active.parent.localToWorld(focus.set(0, 0, -2))
      }
      controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
    })
    return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
  }
