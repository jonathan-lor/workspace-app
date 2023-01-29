import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from '../components/Box'
import Plane from '../components/Plane'
import Link from 'next/link'

export default function BoxesPage() {
  return (
    <>
      <div>
      <h1>Click on a floor for details</h1>
      <Link href='/'>Back to Inputs</Link>
      </div>
      <Canvas camera={{ position: [10, 7.5, 35] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Box position={[0, 2.5, 0]} />
        <Box position={[0, 7.5, 0]} />
        <Box position={[0, 12.5, 0]} />

        <Plane position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </>
  )
}
