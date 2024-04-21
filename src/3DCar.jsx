import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/bmw.glb');
  return <primitive object={scene} />;
}

function App() {
  return (
    <section id="home">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-8xl font-bold text-blue-500 mb-5">BMW</h1>
        <div className="flex justify-center items-center mb-5">
          <div className="w-20 md:w-80" /> {/* Add space */}
          <h2 className="text-4xl md:text-8xl font-bold text-black">DESIGN</h2>
        </div>
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 35 }} className="w-screen h-3/4">
          <color attach="background" args={['#ffffff']} />
          <ambientLight intensity={0.5} />
          <spotLight intensity={0.8} position={[300, 300, 400]} />
          <PresentationControls speed={2} global zoom={2} polar={[-0.7, Math.PI / 4]}>
            <Stage environment="sunset">
              <Model scale={0.5} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
    </section>
  );
}

export default App;
