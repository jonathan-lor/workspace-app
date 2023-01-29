import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Plane as NativePlane } from '@react-three/drei'
import {useTexture} from "@react-three/drei"
import { DoubleSide } from 'three'

export default function Panel(props) {
  const mesh = useRef()
  
    const texture = useTexture('./images/Trollface.png')

  return (
    <NativePlane
      args={[25, 25]}
      rotation={[0, 0, 0]}
      {...props}
      ref={mesh}

    >
      <meshStandardMaterial
        attach="material"
        side={DoubleSide}
        color='#030303'
      />
    </NativePlane>
  )
}