import { Html } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { getSatellitePosition } from '../../getSatellitePosition';
import styles from './Satellites.module.css';
import useDataFetcher from '../../hooks/useDataFetcher';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import circleImg from '../../resources/pictures/circle.png';

function Satellites(props) {
  const { sidebarOpen, isBigScreen, url, styling } = props;
  const satellitesRef = useRef([]);

  const { data, loading, error } = useDataFetcher(url);

  const CircleImg = useLoader(THREE.TextureLoader, circleImg);

  // Satellite animation

  const loadingStyle =
    sidebarOpen && isBigScreen
      ? `${styles.loading_moved}`
      : `${styles.loading}`;

  const activeSatStyling = !loading && styling === 'active';
  const ownerSatStyling = !loading && styling === 'owner';
  const purposeSatStyling = !loading && styling === 'purpose';
  const debrisStyling = !loading && styling === 'debris';

  // get arrays of satellite positions
  let satellite_positions = useMemo(() => {
    let positions = [];
    if (activeSatStyling) {
      let positions_active = [];
      data.forEach((satellite, index) => {
        const position = getSatellitePosition(satellite.tle1, satellite.tle2);
        let noSatellite =
          isNaN(position[0]) || isNaN(position[1] || isNaN(position[2]));
        if (!noSatellite) {
          positions_active.push(...position);
        }
      });
      positions.push({ color: '#16FF6F', position: positions_active });
    } else if (ownerSatStyling) {
      let positions_US = [];
      let positions_PRC = [];
      let positions_UK = [];
      let positions_CIS = [];
      let positions_JPN = [];
      let positions_others = [];

      data.forEach((satellite, index) => {
        const position = getSatellitePosition(satellite.tle1, satellite.tle2);
        let noSatellite =
          isNaN(position[0]) || isNaN(position[1] || isNaN(position[2]));
        if (satellite.owner === 'US' && !noSatellite) {
          positions_US.push(...position);
        } else if (satellite.owner === 'PRC' && !noSatellite) {
          positions_PRC.push(...position);
        } else if (satellite.owner === 'UK' && !noSatellite) {
          positions_UK.push(...position);
        } else if (satellite.owner === 'CIS' && !noSatellite) {
          positions_CIS.push(...position);
        } else if (satellite.owner === 'JPN' && !noSatellite) {
          positions_JPN.push(...position);
        } else {
          positions_others.push(...position);
        }
      });
      positions.push({ owner: 'US', color: '#8884d8', position: positions_US });
      positions.push({
        owner: 'PRC',
        color: '#ff4000',
        position: positions_PRC,
      });
      positions.push({
        owner: 'UK',
        color: '#822e81',
        position: positions_UK,
      });
      positions.push({
        owner: 'CIS',
        color: '#581f18',
        position: positions_CIS,
      });
      positions.push({
        owner: 'JPN',
        color: '#f6Ae2d',
        position: positions_JPN,
      });
      positions.push({
        owner: 'others',
        color: 'gray',
        position: positions_others,
      });
    } else if (purposeSatStyling) {
      let positions_communications = [];
      let positions_weather = [];
      let positions_navigation = [];
      let positions_science = [];
      let positions_others = [];

      data.forEach((satellite, index) => {
        const position = getSatellitePosition(satellite.tle1, satellite.tle2);
        let noSatellite =
          isNaN(position[0]) || isNaN(position[1] || isNaN(position[2]));
        if (satellite.purpose === 'communications' && !noSatellite) {
          positions_communications.push(...position);
        } else if (satellite.purpose === 'weather_ers' && !noSatellite) {
          positions_weather.push(...position);
        } else if (satellite.purpose === 'navigation' && !noSatellite) {
          positions_navigation.push(...position);
        } else if (satellite.purpose === 'science' && !noSatellite) {
          positions_science.push(...position);
        } else {
          positions_others.push(...position);
        }
      });
      positions.push({
        purpose: 'communications',
        color: '#8884d8',
        position: positions_communications,
      });
      positions.push({
        purpose: 'weather_ers',
        color: '#ff4000',
        position: positions_weather,
      });
      positions.push({
        purpose: 'navigation',
        color: '#822e81',
        position: positions_navigation,
      });
      positions.push({
        owner: 'science',
        color: '#f6Ae2d',
        position: positions_science,
      });
      positions.push({
        owner: 'others',
        color: 'gray',
        position: positions_others,
      });
    } else if (debrisStyling) {
      let positions_FENGYUN = [];
      let positions_COSMOS = [];
      let positions_COSMOS_IRIDIUM = [];

      data.forEach((satellite, index) => {
        const position = getSatellitePosition(satellite.tle1, satellite.tle2);
        let noSatellite =
          isNaN(position[0]) || isNaN(position[1] || isNaN(position[2]));
        if (
          (satellite.object_name === 'FENGYUN 1C DEB ' ||
            satellite.object_name === 'FENGYUN 1C ') &&
          !noSatellite
        ) {
          positions_FENGYUN.push(...position);
        } else if (
          (satellite.object_name === 'COSMOS 1408 DEB' ||
            satellite.object_name === 'COSMOS 1408') &&
          !noSatellite
        ) {
          positions_COSMOS.push(...position);
        } else if (
          (satellite.object_name === 'COSMOS 2251 DEB' ||
            satellite.object_name === 'COSMOS 2251' ||
            satellite.object_name === 'IRIDIUM 33 DEB ' ||
            satellite.object_name === 'IRIDIUM 33 ') &&
          !noSatellite
        ) {
          positions_COSMOS_IRIDIUM.push(...position);
        }
      });
      positions.push({
        object_name: 'FENGYUN',
        color: '#f6Ae2d',
        position: positions_FENGYUN,
      });
      positions.push({
        purpose: 'COSMOS',
        color: '#822E81',
        position: positions_COSMOS,
      });
      positions.push({
        purpose: 'COSMOS_IRIDIUM',
        color: '#ff4000',
        position: positions_COSMOS_IRIDIUM,
      });
    }
    return positions;
  }, [data, loading, styling]);

  const getSatellites = (sat_positions) => {
    return sat_positions.map((sat_data, index) => {
      return (
        <points
          key={index}
          ref={(points) => (satellitesRef.current[index] = points)}
        >
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array(sat_data.position)}
              count={new Float32Array(sat_data.position).length / 3}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            map={CircleImg}
            attach="material"
            color={sat_data.color}
            size={0.1}
            sizeAttenuation
            transparent={false}
            alphaTest={0.5}
            opacity={1.0}
          />
        </points>
      );
    });
  };

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
      {!loading && getSatellites(satellite_positions)}
    </>
  );
}
// data.map((satellite, index) => {
//   return (
//     <mesh
//     key={index}
//     position={getSatellitePosition(satellite.tle1, satellite.tle2)}
//     ref={(mesh) => (satellitesRef.current[index] = mesh)}
//     >
//     <sphereGeometry args={[0.005, 32, 32]} />
//     <meshBasicMaterial color={calculateColor(satellite)} />
//     </mesh>
//   );
// })

export default Satellites;
