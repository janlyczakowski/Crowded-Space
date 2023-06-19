import { Html, Point, Points, Sphere } from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';
import { getSatellitePosition } from '../getSatellitePosition';
import { useFrame } from '@react-three/fiber';
import styles from './Satellites.module.css';
import useDataFetcher from '../hooks/useDataFetcher';
import config from '../config.json';

function Satellites(props) {
  const { correctedPosition } = props;
  const [satelliteHover, setSatelliteHover] = useState(false);
  const url = config.url;
  //   const satRef = useRef();

  // Sample TLE
  const tleLine1 =
    '1 25544U 98067A   23159.62833686  .00015293  00000+0  26961-3 0  9998';
  // 1 22787U 93056A 23166.74735868 .00000119 00000+0 00000+0 0 9994
  // 1 13086U 82019A 23166.70882618 -.00000197 00000+0 00000+0 0 9992

  const tleLine2 =
    '2 25544  51.6424  10.9615 0005598  65.0896  31.7520 15.50597012400464';
  //     2 13086 11.5192 317.7230 0003083 200.9331 339.5682 0.98191164 14880
  // 2 22787 11.5562 9.2482 0003533 69.5675 122.7017 1.00272660107546
  // const [satelliteCoords, setSatelliteCoords] = useState([
  //   ...getSatellitePosition(tleLine1, tleLine2),
  // ]);
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

  const onPointerOverHandler = (e) => {
    e.stopPropagation();
    setSatelliteHover(true);
    document.body.style.cursor = 'pointer';
    // console.log(satelliteHover);
    // setSatelliteHover(() => !satelliteHover);
    // console.log('point clicked');
    // console.log(e.object);
  };
  const onPointerOutHandler = (e) => {
    e.stopPropagation();
    setSatelliteHover(false);
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
  // useFrame(({ clock }) => {
  //   // const elapsedTime = clock.getElapsedTime();
  //   // console.log(clock);
  //   setSatelliteCoords([...getSatellitePosition(tleLine1, tleLine2)]);
  //   // earthRef.current.rotation.y = elapsedTime / 10;
  //   // cloudsRef.current.rotation.y = elapsedTime / 10;
  // });

  // console.log(loading);
  // console.log(data);
  return (
    <>
      {!loading &&
        data.map((satellite, index) => {
          // const { tle_1, tle_2 } = getTleData(
          //   satellite.active_tle1,
          //   satellite.active_tle2
          // );
          return (
            <mesh
              key={index}
              position={getSatellitePosition(
                satellite.active_tle1,
                satellite.active_tle2
              )}
              // onClick={onClickOverHandler}
              onPointerOver={onPointerOverHandler}
              onPointerOut={onPointerOutHandler}
            >
              <sphereGeometry args={[0.004, 32, 32]} />
              <meshBasicMaterial color={satelliteHover ? 'gray' : 'red'} />
            </mesh>
          );

          // console.log(satellite);
        })}
      {/* {satelliteCoords.map((index,key)=>{ */}
      {/* <mesh
            // key={index}
            position={getSatellitePosition(tleLine1, tleLine2)}
            // onClick={onClickOverHandler}
            onPointerOver={onPointerOverHandler}
            onPointerOut={onPointerOutHandler}
          >
            <sphereGeometry args={[0.004, 32, 32]} />
            <meshBasicMaterial color={satelliteHover ? 'gray' : 'red'} />
          </mesh>  */}
    </>
    // <DataFetcher
    //   url="https://raw.githubusercontent.com/lennartfynn/glowing-api/main/data/active_0_100.json?token=GHSAT0AAAAAACDVCOSAZIREMMJEUNJYJIBGZEPPPXA"
    //   render={renderData}
    // />
  );
}

export default Satellites;
