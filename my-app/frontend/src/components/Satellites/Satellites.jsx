import * as THREE from 'three';
import { Html, Point, Points, Sphere } from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';
import { getSatellitePosition } from '../../getSatellitePosition';
import { useFrame } from '@react-three/fiber';
import styles from './Satellites.module.css';
import useDataFetcher from '../../hooks/useDataFetcher';
import config from '../../config.json';
import { useMemo } from 'react';
import { BufferAttribute } from 'three';
import { useThree } from '@react-three/fiber';

function Satellites(props) {
  console.log('Satelites rendered');
  const { sidebarOpen, isBigScreen, url, styling } = props;

  const satellitesRef = useRef([]);
  // const satelliteRef = useRef();

  const { data, loading, error } = useDataFetcher(url);

  // const onPointerOverHandler = (e, index) => {
  //   console.log(e);
  //   e.stopPropagation();
  //   document.body.style.cursor = 'pointer';
  //   setHoveredIndex(index);
  // };
  // const onPointerOutHandler = (e) => {
  //   e.stopPropagation();
  //   setHoveredIndex(null);
  //   document.body.style.cursor = 'auto';
  // };

  console.log(loading);
  console.log(data);
  useFrame(() => {
    satellitesRef.current.forEach((satellite, index) => {
      const position = getSatellitePosition(data[index].tle1, data[index].tle2);
      satellite.position.x = position[0];
      satellite.position.y = position[1];
      satellite.position.z = position[2];
    });
  });
  // const sat_color = 'gray';
  const calculateColor = (satellite) => {
    // ["#8884d8", "#82ca9d", "#ff4000", "#581f18", "#f6Ae2d"]
    // console.log(satellite);
    let sat_color;
    if (styling === 'active') {
      sat_color = 'gray';
    } else if (styling === 'owner') {
      if (satellite.owner === 'US') {
        sat_color = '#8884d8';
      } else if (satellite.owner === 'PRC') {
        sat_color = '#ff4000';
      } else if (satellite.owner === 'UK') {
        sat_color = '#82ca9d';
      } else {
        sat_color = 'gray';
      }
    } else if (styling === 'purpose') {
    } else if (styling === 'debris') {
      if (satellite.object_name === 'FENGYUN 1C DEB ') {
        sat_color = '#f6Ae2d';
        console.log('fengyum');
      } else if (satellite.object_name === 'COSMOS 1408 DEB') {
        sat_color = '#8884d8';
        console.log('COSMOS');
      } else if (
        satellite.object_name === 'COSMOS 2251 DEB' ||
        satellite.object_name === 'IRIDIUM 33 DEB '
      ) {
        console.log('iridium');
        sat_color = '#ff4000';
      }
    }

    return sat_color;
  };

  const loadingStyle =
    sidebarOpen && isBigScreen
      ? `${styles.loading_moved}`
      : `${styles.loading}`;

  return (
    <>
      {error && (
        <Html>
          <p className={styles.error}>{error}</p>
        </Html>
      )}
      {loading && (
        <Html>
          <p className={loadingStyle}>Loading...</p>
        </Html>
      )}
      {!loading &&
        data.map((satellite, index) => {
          // const isHovered = hoveredIndex === index;
          return (
            <mesh
              key={index}
              position={getSatellitePosition(satellite.tle1, satellite.tle2)}
              ref={(mesh) => (satellitesRef.current[index] = mesh)}
              // onPointerOver={(e) => onPointerOverHandler(e, index)}
              // onPointerOut={onPointerOutHandler}
            >
              <sphereGeometry args={[0.006, 32, 32]} />
              <meshBasicMaterial
                // color={'red'}
                color={calculateColor(satellite)}
              />
            </mesh>
          );
        })}{' '}
      */
    </>
  );
}

export default Satellites;

// const points = useMemo(() => {
//   if (data !== null) {
//     const count = data.length;
//     const p = new Float32Array(count * 3);
//     for (let i = 0; i < count; i++) {
//       const position = getSatellitePosition(data[i].tle1, data[i].tle2);
//       p[i * 3] = position[0];
//       p[i * 3 + 1] = position[1];
//       p[i * 3 + 2] = position[2];
//     }
//     return new BufferAttribute(p, 3).setUsage(THREE.DynamicDrawUsage);
//   }
// }, [data]);

// {!loading && (
//   <points ref={(mesh) => (satellitesRef.current[0] = mesh)}>
//     <bufferGeometry>
//       <bufferAttribute attach={'attributes-position'} {...points} />
//     </bufferGeometry>
//     <pointsMaterial size={0.01} color={0xff00ff} sizeAttenuation={true} />
//   </points>
// )}
