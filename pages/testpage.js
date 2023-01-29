import React, { useState } from 'react';
import Box from '../components/Box';
import Plane from '../components/Plane';
import { Canvas } from '@react-three/fiber';

const TestPage = () => {
    const [num, setNum] = useState(0);

    const handleChange = (event) => {
      setNum(event.target.value);
      console.log(num);
    };

  return (
    <div>
      <form>
        <label>
          Number of geometries:
          <input type="number" value={num} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <Canvas camera={{ position: [10, 7.5, 35] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
      {Array.from({ length: num }, (_, i) => (
        <Box position = {[Math.random * 20, Math.random * 20, Math.random * 20]} key={i} />
      ))}

<Plane position={[0, 0, 0]} />
        </Canvas>
    </div>
  );
};

export default TestPage;