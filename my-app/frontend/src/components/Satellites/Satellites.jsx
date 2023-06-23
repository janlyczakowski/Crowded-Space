import { Html } from '@react-three/drei';
import { useRef } from 'react';
import { getSatellitePosition } from '../../getSatellitePosition';
import { useFrame } from '@react-three/fiber';
import styles from './Satellites.module.css';
import useDataFetcher from '../../hooks/useDataFetcher';

function Satellites(props) {
  const { sidebarOpen, isBigScreen, url, styling } = props;
  const satellitesRef = useRef([]);

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

  useFrame(() => {
    satellitesRef.current.forEach((satellite, index) => {
      const position = getSatellitePosition(data[index].tle1, data[index].tle2);
      satellite.position.x = position[0];
      satellite.position.y = position[1];
      satellite.position.z = position[2];
    });
  });
  const calculateColor = (satellite) => {
    // ["#8884d8", "#82ca9d", "#ff4000", "#581f18", "#f6Ae2d"]
    let sat_color;
    if (styling === 'active') {
      sat_color = '#16FF6F';
    } else if (styling === 'owner') {
      if (satellite.owner === 'US') {
        sat_color = '#8884d8';
      } else if (satellite.owner === 'PRC') {
        sat_color = '#ff4000';
      } else if (satellite.owner === 'UK') {
        sat_color = '#822e81';
      } else if (satellite.owner === 'CIS') {
        sat_color = '#581f18';
      } else if (satellite.owner === 'JPN') {
        sat_color = '#f6Ae2d';
      } else {
        sat_color = 'gray';
      }
    } else if (styling === 'purpose') {
      if (satellite.purpose === 'communications') {
        sat_color = '#8884d8';
      } else if (satellite.purpose === 'weather_ers') {
        sat_color = '#ff4000';
      } else if (satellite.purpose === 'navigation') {
        sat_color = '#822e81';
      } else if (satellite.purpose === 'science') {
        sat_color = '#f6Ae2d';
      } else {
        sat_color = 'gray';
      }
    } else if (styling === 'debris') {
      if (
        satellite.object_name === 'FENGYUN 1C DEB ' ||
        satellite.object_name === 'FENGYUN 1C '
      ) {
        sat_color = '#f6Ae2d';
      } else if (
        satellite.object_name === 'COSMOS 1408 DEB' ||
        satellite.object_name === 'COSMOS 1408'
      ) {
        sat_color = '#822E81';
      } else if (
        satellite.object_name === 'COSMOS 2251 DEB' ||
        satellite.object_name === 'COSMOS 2251' ||
        satellite.object_name === 'IRIDIUM 33 DEB ' ||
        satellite.object_name === 'IRIDIUM 33 '
      ) {
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
      {loading && !(sidebarOpen && !isBigScreen) && (
        <Html>
          <p className={loadingStyle}>Loading...</p>
        </Html>
      )}
      {loading && sidebarOpen && !isBigScreen && (
        <Html center className={styles.loading_small_screen_wrapper}>
          <div className={styles.loading_small_screen}>
            <p className={styles.loading_small_screen_text}>Loading...</p>
          </div>
        </Html>
      )}
      {!loading &&
        data.map((satellite, index) => {
          return (
            <mesh
              key={index}
              position={getSatellitePosition(satellite.tle1, satellite.tle2)}
              ref={(mesh) => (satellitesRef.current[index] = mesh)}
            >
              <sphereGeometry args={[0.005, 32, 32]} />
              <meshBasicMaterial color={calculateColor(satellite)} />
            </mesh>
          );
        })}
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
