/* eslint-disable react/display-name */
import { PresentationControls, Environment, ContactShadows, Html } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import React from 'react'
import { Vector3 } from 'three'
// import ThreeText from './ThreeText'

const Model = dynamic(() => import('./ThreeModel'))

const Rig = ({ v = new Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05)
  })
}

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
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          //   snap={{ mass: 4, tension: 200 }}
          // rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Model position={[0, 0, 0]} />
        </PresentationControls>
        {/* <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
        <Environment preset='city' /> */}

        {/* <ThreeText position={[0, 0, 3]} /> */}
      </Canvas>
    </div>
  )
})
export default ThreeIcon
