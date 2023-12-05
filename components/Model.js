import React, { useRef } from "react";
import { useLoader, extend, useFrame } from "@react-three/fiber";
import { MeshPortalMaterial, CameraControls, Gltf, Text, RoundedBox } from '@react-three/drei'
import { easing, geometry } from 'maath'
import * as THREE from 'three'
import { suspend } from 'suspend-react'

extend(geometry)
const regular = import('@pmndrs/assets/fonts/inter_regular.woff')
const medium = import('@pmndrs/assets/fonts/inter_medium.woff')

function Box(props) {
    return (
        <>
            <Frame id="01" name={`pick\nles`} author="Omar Faruq Tawsif" bg="#e4cdac" position={[-1.15, 0, 0]} rotation={[0, 0.5, 0]}>
                <Gltf src="/model/pickles_3d_version_of_hyuna_lees_illustration-transformed.glb" scale={8} position={[0, -0.7, -2]} />
            </Frame>
            <Frame id="02" name="tea" author="Omar Faruq Tawsif">
                <mesh>

                    <torusGeometry args={[0.65, 0.3, 64]} />
                    <meshLambertMaterial color={'hotpink'} />
                </mesh>
            </Frame>
            <Frame id="03" name="still" author="Omar Faruq Tawsif" bg="#d1d1ca" position={[1.15, 0, 0]} rotation={[0, -0.5, 0]}>
                <Gltf src="/model/still_life_based_on_heathers_artwork-transformed.glb" scale={2} position={[0, -0.8, -4]} />
            </Frame>
        </>
    );
}

export default Box;

function Frame({ id, name, author, bg, width = 1, height = 1.61803398875, children, ...props }) {
    const portal = useRef()
    //useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt))
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
            <RoundedBox name={id} args={[1, 1.5, 0.1]}
                radius={0.1}>

                <MeshPortalMaterial side={THREE.DoubleSide}>
                    <color attach="background" args={[bg]} />
                    {children}
                </MeshPortalMaterial>
            </RoundedBox>
        </group>
    )
}