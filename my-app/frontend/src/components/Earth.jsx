import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';

import EarthDayMap from '../resources/Earth/8k_earth_daylight.jpg';
import EarthNormalMap from '../resources/Earth/8k_earth_normal_map.jpg';
import EarthCloudsMap from '../resources/Earth/8k_earth_clouds.jpg';
import StarsMap from '../resources/Stars/8k_stars.jpg';
// import { getSatellitePosition } from '../getSatellitePosition';
import Satellites from './Satellites/Satellites';

import {
  OrbitControls,
  PerspectiveCamera,
  Point,
  Points,
} from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLoader, useFrame } from '@react-three/fiber';

function Earth(props) {
  console.log('Earth rendered ');
  const { sidebarOpen } = props;
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthCloudsMap, EarthCloudsMap, StarsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  //   const satelliteRef = useRef();

  // update position 60 times per second to create animated movement
  //   useFrame(({ clock }) => {
  //     const elapsedTime = clock.getElapsedTime();
  //     // console.log(clock);
  //     // setSatelliteCords([...getSatellitePosition(tleLine1, tleLine2)]);
  //     // earthRef.current.rotation.y = elapsedTime / 10;
  //     // cloudsRef.current.rotation.y = elapsedTime / 10;
  //   });

  //   useFrame((state,clock) => {
  //     state.ready = false;
  //     const timeUntilNextFrame = 1000 / props.fps - clock.getDelta();
  //     console.log(props.fps);

  //     setTimeout(() => {
  //       state.ready = true;
  //       state.invalidate();
  //     }, Math.max(0, timeUntilNextFrame));
  //   });

  //   const FrameLimiter = (props) => {
  //     const [clock] = useState(new THREE.Clock());

  //     return <></>;
  //   };

  // Getting satellite data

  //   const satellites = [
  //     {
  //       tle1: '1 25544U 98067A   23159.62833686  .00015293  00000+0  26961-3 0  9998',
  //       tle2: '2 25544  51.6424  10.9615 0005598  65.0896  31.7520 15.50597012400464',
  //       name: 'ISS',
  //       owner: 'sdasdas',
  //       launch_date: '',
  //     },
  //   ];
  //   console.log(getSatellitePosition(tleLine1, tleLine2));
  //   console.log(satelliteHover);
  //   useEffect(() => {
  //     console.log(satelliteRef.current);
  //   }, []);
  // const { camera } = useThree();

  // useEffect(() => {
  //   // Add mesh to camera
  //   // const meshRef = earthRef.current;
  //   console.log(earthRef.current);
  //   // camera.add(earthRef.current);
  //   console.log(cloudsRef.current);

  //   // // Cleanup on unmount
  //   // return () => {
  //   //   camera.remove(meshRef);
  //   // };
  // }, [camera, earthRef.currentf]);

  return (
    <>
      {/* <FrameLimiter /> */}
      {/* directional light?? */}
      <pointLight color={'#fffce8'} position={[2, 0, 2]} intensity={[1.2]} />
      <ambientLight intensity={0.8} />
      {/* <Satellites correctedPosition={sidebarOpen} /> */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        ref={earthRef}
        // position={(100, 0, 0)}
        //   onClick={() => console.log('Earth clicked')}
      >
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
      {/* <PerspectiveCamera position={(0, 1000, 1000)} /> */}
    </>
  );
}

export default Earth;
