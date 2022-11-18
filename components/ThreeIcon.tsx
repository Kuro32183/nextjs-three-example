/* eslint-disable react/display-name */
import { Canvas, useFrame } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import React, { useState, useRef, FC } from 'react'
import { Vector3, Mesh } from 'three'
// import ThreeText from './ThreeText'

const Model = dynamic(() => import('./ThreeModel'))

const Rig = ({ v = new Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05)
  })
}

// const Thing: FC<ThingProps> = (props) => {
//   const mesh = useRef<Mesh>(null!)
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   useFrame(() => (mesh.current.rotation.x += 0.01))

//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? 1.5 : 1}
//       onClick={() => setActive(!active)}
//       onPointerOver={() => setHover(true)}
//       onPointerOut={() => setHover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

const ThreeIcon: React.FC = React.memo(() => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#000000',
      }}
    >
      <Canvas>
        <ambientLight />
        <Rig />
        <fog attach='fog' color={'#fff'} near={1} far={30} />
        <pointLight position={[10, 10, 10]} />
        {/* <Thing position={[0, 1, -10]} />
        <Thing position={[-1.2, 0, 0]} />
        <Thing position={[1.2, 0, 0]} /> */}

        <Model position={[0, 0, 0]} />

        {/* <ThreeText position={[0, 0, 3]} /> */}
      </Canvas>
    </div>
  )
})
export default ThreeIcon
