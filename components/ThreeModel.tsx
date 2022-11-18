// import * as Drei from '@react-three/drei'
import { useGLTF, Html } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState, FC } from 'react'
import { Mesh, Vector3 } from 'three'

// const ThreeModel = () => {
//   const { scene } = Drei.useGLTF('/assets/Rocket.glb')
//   return (
//     <group dispose={null}>
//       <primitive scale={[1, 1, 1]} object={scene} />
//     </group>
//   )
// }

// export default ThreeModel

type ModelProps = {
  position: [x: number, y: number, z: number]
}

const ThreeModel: FC<ModelProps> = (props) => {
  const gltf = useGLTF('/assets/guitar.glb')
  const mesh = useRef<Mesh>(null!)
  useFrame(() => (mesh.current.rotation.x += 0.008))

  return (
    <mesh {...props} ref={mesh}>
      <primitive rotation={[0, 0.1, 1.5]} scale={[0.05, 0.05, 0.05]} object={gltf.scene} />
      <Html position={[-0.5, 0.5, 0.5]}>
        <h1 className='title_text'>Example</h1>
      </Html>
    </mesh>
  )
}

export default ThreeModel
