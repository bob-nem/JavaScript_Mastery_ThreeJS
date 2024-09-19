import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";

const RotatingCube = () => {
  const meshRef = useRef()
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 2]} />
      <meshLambertMaterial color="red" emissive={'red'} />
      <Sparkles count={87} size={3} scale={[2, 2, 2]} speed={0.05} color={'yellow'}/>
    </mesh>
  )
}
const App = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <OrbitControls enableZoom enablePan enableRotate/>
      <directionalLight position={[10, 10, 10]} intensity={1.5} color="red" />
      <color attach="background" args={['#f0f0f0']} />
      <RotatingCube />
    </Canvas>
  )
}

export default App;