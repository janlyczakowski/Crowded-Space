import * as THREE from 'three';
import { useRef } from 'react';
import EarthDayMap from '../../resources/Earth/8k_earth_daylight.jpg';
import EarthNightMap from '../../resources/Earth/8k_earth_nightmap.jpg';
import EarthNormalMap from '../../resources/Earth/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../resources/Earth/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../../resources/Earth/8k_earth_clouds.jpg';
import StarsMap from '../../resources/Stars/8k_stars.jpg';

import { OrbitControls, Stars } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLoader, useFrame } from '@react-three/fiber';

function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap, starsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthCloudsMap, EarthCloudsMap, StarsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 10;
    cloudsRef.current.rotation.y = elapsedTime / 10;
  });
  return (
    <>
      {/* <ambientLight intensity={0.8} /> */}
      <pointLight color={'#fffce8'} position={[2, 0, 2]} intensity={[1.2]} />
      <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={3}
        saturation={0}
        fade={true}
        speed={0.2}
      />

      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          transparent={true}
          //   depthWrite={true}
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
        />
      </mesh>
    </>
  );
}

export default Earth;
