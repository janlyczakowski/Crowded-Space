import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';

import EarthDayMap from '../resources/Earth/8k_earth_daylight.jpg';
import EarthNormalMap from '../resources/Earth/8k_earth_normal_map.jpg';
import EarthCloudsMap from '../resources/Earth/8k_earth_clouds.jpg';
import StarsMap from '../resources/Stars/8k_stars.jpg';

import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLoader, useFrame } from '@react-three/fiber';

function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthCloudsMap, EarthCloudsMap, StarsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  // update position 60 times per second to create animated movement
  //   useFrame(({ clock }) => {
  //     const elapsedTime = clock.getElapsedTime();
  //     // console.log(clock);
  //     // setSatelliteCords([...getSatellitePosition(tleLine1, tleLine2)]);
  //     // earthRef.current.rotation.y = elapsedTime / 10;
  //     // cloudsRef.current.rotation.y = elapsedTime / 10;
  //   });

  return (
    <>
      <pointLight color={'#fffce8'} position={[2, 0, 2]} intensity={[0.9]} />
      <ambientLight intensity={0.8} />
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.2}
          roughness={0.8}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.5}
          panSpeed={0.5}
          rotateSpeed={0.5}
          maxDistance={18} // max zoom out 90
          minDistance={1.3} // max zoom in
        />
      </mesh>
    </>
  );
}

export default Earth;
