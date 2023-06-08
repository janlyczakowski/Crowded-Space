import * as THREE from 'three';
import { radToDeg } from 'three/src/math/MathUtils';
import { useRef } from 'react';
import EarthDayMap from '../../resources/Earth/8k_earth_daylight.jpg';
import EarthNightMap from '../../resources/Earth/8k_earth_nightmap.jpg';
import EarthNormalMap from '../../resources/Earth/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../resources/Earth/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../../resources/Earth/8k_earth_clouds.jpg';
import StarsMap from '../../resources/Stars/8k_stars.jpg';
import {
  twoline2satrec,
  propagate,
  gstime,
  eciToGeodetic,
  degreesLong,
  degreesLat,
} from 'satellite.js';

import { OrbitControls, Point, Points } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLoader, useFrame } from '@react-three/fiber';

function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthCloudsMap, EarthCloudsMap, StarsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  //   useFrame(({ clock }) => {
  //     const elapsedTime = clock.getElapsedTime();

  //     earthRef.current.rotation.y = elapsedTime / 10;
  //     cloudsRef.current.rotation.y = elapsedTime / 10;
  //   });

  // Getting satellite data

  // Sample TLE
  const tleLine1 =
    '1 25544U 98067A   23159.62833686  .00015293  00000+0  26961-3 0  9998';
  const tleLine2 =
    '2 25544  51.6424  10.9615 0005598  65.0896  31.7520 15.50597012400464';

  // Initialize a satellite record
  const satrec = twoline2satrec(tleLine1, tleLine2);

  //  Propagate time using JavaScript Date
  const positionAndVelocity = propagate(satrec, new Date());
  const gmst = gstime(new Date());

  // The position_velocity result is a key-value pair of ECI coordinates.
  // These are the base results from which all other coordinates are derived.
  const positionEci = positionAndVelocity.position;
  const velocityEci = positionAndVelocity.velocity;

  // Get geodetic position
  const positionGd = eciToGeodetic(positionEci, gmst);

  const latitude = positionGd.longitude;
  const longitude = positionGd.latitude;
  const altitude = positionGd.height;

  console.log(radToDeg(latitude));
  console.log(radToDeg(longitude));
  console.log(altitude);

  function calcPosFromLatLonRad(lat, lon, radius) {
    var phi = (90 - lat) * (Math.PI / 180);
    var theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return [x, -y, z];
    // should be without "-" (check if it's working )
  }

  // Assuming that altitude 0 is equal to radius 1 approximate scalar altitude/4000 was used for visualization of altitude of satellite
  const [x, y, z] = calcPosFromLatLonRad(
    radToDeg(latitude),
    radToDeg(longitude),
    1 + altitude / 4000
  );

  console.log(x);
  console.log(y);
  console.log(y);
  //   const braniewoLat = 54.37971;
  //   const braniewoLon = 19.81959;

  const [braniewoX, braniewoY, braniewoZ] = calcPosFromLatLonRad(
    164.69300541856674,
    6.606245578273497,
    1
  );

  console.log(braniewoX);
  console.log(braniewoY);
  console.log(braniewoZ);

  return (
    <>
      <pointLight color={'#fffce8'} position={[2, 0, 2]} intensity={[1.2]} />
      {/* <Point position={[x, y, z]} color="red"></Point> */}
      <Points sizes={0.1}>
        <pointsMaterial vertexColors size={0.01} />
        <Point position={[x, y, z]} color="red" />
        {/* <Point position={[0, 0, 1]} color="red" /> */}
        <Point position={[braniewoX, braniewoY, braniewoZ]} color="blue" />
      </Points>

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
