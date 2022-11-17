import { Text } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, FC, useState } from 'react'
import { Mesh, Vector3 } from 'three'

type ThingProps = {
  position: [x: number, y: number, z: number]
}

const ThreeText: FC<ThingProps> = (props) => {
  const mesh = useRef<Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  //   useFrame(() => (mesh.current.rotation.x += 0.01))
  return (
    <>
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.3 : 1}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        {/* <Text position={[0, 1, 0]} font="/Roboto-Black.ttf" fontSize={2} color={'#222222'}>
          HELLO
        </Text> */}
        <Text
          position={[0, 0, 3]}
          font='/Roboto-Black.ttf'
          fontSize={1}
          color={hovered ? 'hotpink' : 'orange'}
        >
          WORLD
        </Text>
      </mesh>
    </>
  )
}

export default ThreeText
