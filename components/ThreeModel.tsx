// import * as Drei from '@react-three/drei'
import { useGLTF, Text } from '@react-three/drei'
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
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame(() => (mesh.current.rotation.y += 0.01))
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.3 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <primitive scale={[0.05, 0.05, 0.05]} transform='translate(90deg)' object={gltf.scene} />
    </mesh>
  )
}

export default ThreeModel
