import { Canvas } from '@react-three/fiber'
import { Suspense, useMemo, useState, useEffect } from 'react'
import { OrbitControls } from '@react-three/drei'
import Box from '../components/Box'
import Plane from '../components/Plane'
import Link from 'next/link'

export default function BoxesPage() {

  const boxes = useMemo(() => new Array(5).fill().map((_, index) => {
        // every index of the array is now an object with the boxes key and original positoin
        return {
          key: index,
          position: [0, 0, 0]
        }
      }),
    []
  )
  //let xPos = 2.5; 
  for(let i = 0; i < boxes.length; i++) {
    //console.log(boxes[i].position);
    boxes[i].position[1] = 5 * i + 2.5;
  }

  return (
    <>
      <div>

      <h1>Click on a floor for details</h1>
      <Link href='/'>Back to Inputs</Link>
      </div>
      <Canvas camera={{ position: [10, 7.5, 35] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        {/* <Box position={[0, 2.5, 0]} />
        <Box position={[0, 7.5, 0]} />
        <Box position={[0, 12.5, 0]} /> */}

        {/* we need to be able to pass user input as a prop into a component that can generate array of position and key values
        i am fairly certain that the multi rendering must be done in the main boxespage function
        boxespage is the parent component
        we need to have an input box that takes number of floors (first of very many parameters)
        after that, the input can be fed d */}

        <Suspense fallback={null}>
        {boxes.map((props) => (
          <Box {...props} key={props.key} />
        ))}
        </Suspense>

        <Plane position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </>
  )
}
