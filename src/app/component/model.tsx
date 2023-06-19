'use client'

import * as THREE from 'three'
import { useRouter, useSearchParams, useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text } from '@react-three/drei'
import { easing, geometry } from 'maath'
import { suspend } from 'suspend-react'

export const Model = () => {
    <Frame id="01" name={`pick\nles`} author="Omar Faruq Tawsif" bg="#e4cdac" />
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
    const onDoubleClick = (e:any) => (e.stopPropagation(), router.push('/item/' + 2))

    return <></>;
}