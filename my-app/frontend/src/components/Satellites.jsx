import { Html, Point, Points, Sphere } from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';
import { getSatellitePosition } from '../getSatellitePosition';
import { useFrame } from '@react-three/fiber';
import styles from './Satellites.module.css';
import useDataFetcher from '../hooks/useDataFetcher';
import config from '../config.json';

function Satellites(props) {
  // const { correctedPosition } = props;
  // const [satelliteHover, setSatelliteHover] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const url = config.url;
  const satellitesRef = useRef([]);
  // const satRef = useRef();

  const [satelliteCoords, setSatelliteCoords] = useState(null);

  // console.log(satelliteCoords);
  const { data, loading, error } = useDataFetcher(url);

  // if (loading) {
  //   return (
  //     <Html>
  //       <p className={styles.loading}>Loading...</p>;
  //     </Html>
  //   );
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  const onPointerOverHandler = (e, index) => {
    e.stopPropagation();
    document.body.style.cursor = 'pointer';
    setHoveredIndex(index);
    // e.object.material.color = '#adff2f';
    // console.log(e.object);
  };
  const onPointerOutHandler = (e) => {
    e.stopPropagation();
    setHoveredIndex(null);
    document.body.style.cursor = 'auto';
  };

  // const getTleData = (tle_1, tle_2) => {
  //   const new_tle_1 = tle_1.replaceAll(';', ' ');
  //   const new_tle_2 = tle_2.replaceAll(';', ' ');
  //   console.log(new_tle_1);
  //   console.log(new_tle_2);

  //   return { tle_1: new_tle_1, tle_2: new_tle_2 };
  // };
  // update position 60 times per second to create animated movement
  useFrame(() => {
    // console.log(satellitesRef.current);
    satellitesRef.current.forEach((satellite, index) => {
      // console.log(data[index]);
      const position = getSatellitePosition(
        data[index].active_tle1,
        data[index].active_tle2
      );
      satellite.position.x = position[0];
      satellite.position.y = position[1];
      satellite.position.z = position[2];
    });
  });
  // console.log(loading);
  // console.log(data);
  return (
    <>
      {!loading &&
        data.map((satellite, index) => {
          // const position = getSatellitePosition(
          //   satellite.active_tle1,
          //   satellite.active_tle2
          // );
          const isHovered = hoveredIndex === index;
          console.log(satellite.active_tle1);
          return (
            <mesh
              key={index}
              position={getSatellitePosition(
                satellite.active_tle1,
                satellite.active_tle2
              )}
              ref={(mesh) => (satellitesRef.current[index] = mesh)}
              onPointerOver={(e) => onPointerOverHandler(e, index)}
              onPointerOut={onPointerOutHandler}
            >
              {/* // onClick={onClickOverHandler}
              onPointerOver={onPointerOverHandler}
              onPointerOut={onPointerOutHandler} */}

              <sphereGeometry args={[0.004, 32, 32]} />
              <meshBasicMaterial color={isHovered ? '#adff2f' : 'gray'} />
            </mesh>
          );
        })}
    </>
  );
}

export default Satellites;
