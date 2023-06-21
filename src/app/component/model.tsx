'use client'

import * as THREE from 'three'
import { useRouter, useSearchParams, useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text } from '@react-three/drei'
import { easing, geometry } from 'maath'
import { suspend } from 'suspend-react'


import { Inter } from 'next/font/google'

export const Model = () => {
    return (
        <Canvas>
            <Frame id="01" name={`pick\nles`} author="Omar Faruq Tawsif" bg="#e4cdac" />
        </Canvas>
    )
}

interface FrameProps {
    id: string;
    name: string;
    author: string;
    bg: string;
    width?: number;
    height?: number;
    children?: React.ReactNode;
}

function Frame({ id, name, author, bg, width, height, children, ...props }: FrameProps): JSX.Element {
    const portal = useRef()
    const params = useParams()
    const router = useRouter()
    const [hovered, hover] = useState(false)
    const onDoubleClick = (e: any) => (e.stopPropagation(), router.push('/item/' + id))

    return (
        <group {...props}>
            <Text font="cyrillic" fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
                {name}
            </Text>
            <Text font="cyrillic" fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>
                /{id}
            </Text>

        </group>
    )
}