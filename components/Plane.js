import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Plane as NativePlane } from '@react-three/drei'
import { DoubleSide } from 'three'

export default function Plane(props) {
  const mesh = useRef()
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <NativePlane
      args={[1000, 1000]}
      rotation={[Math.PI / 2, 0, 0]}
      {...props}
      ref={mesh}

    >
      <meshStandardMaterial
        attach="material"
        side={DoubleSide}
        color='#fcba03'
      />
    </NativePlane>
  )
}