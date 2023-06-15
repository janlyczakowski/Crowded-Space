import { Point, Points, Sphere } from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';
import { getSatellitePosition } from '../getSatellitePosition';
import { useFrame } from '@react-three/fiber';
import styles from './Satellites.module.css';

function Satellites(props) {
  const { correctedPosition } = props;
  const [satelliteHover, setSatelliteHover] = useState(false);
  //   const satRef = useRef();

  // Sample TLE
  const tleLine1 =
    '1 25544U 98067A   23159.62833686  .00015293  00000+0  26961-3 0  9998';
  const tleLine2 =
    '2 25544  51.6424  10.9615 0005598  65.0896  31.7520 15.50597012400464';

  const [satelliteCoords, setSatelliteCoords] = useState([
    ...getSatellitePosition(tleLine1, tleLine2),
  ]);

  console.log(satelliteCoords);

  const onPointerOverHandler = (e) => {
    e.stopPropagation();
    setSatelliteHover(true);
    document.body.style.cursor = 'pointer';
    // console.log(satelliteHover);
    // setSatelliteHover(() => !satelliteHover);
    // console.log('point clicked');
    console.log(e.object);
  };
  const onPointerOutHandler = (e) => {
    e.stopPropagation();
    setSatelliteHover(false);
    document.body.style.cursor = 'auto';
  };

  // update position 60 times per second to create animated movement
  // useFrame(({ clock }) => {
  //   // const elapsedTime = clock.getElapsedTime();
  //   // console.log(clock);
  //   setSatelliteCoords([...getSatellitePosition(tleLine1, tleLine2)]);
  //   // earthRef.current.rotation.y = elapsedTime / 10;
  //   // cloudsRef.current.rotation.y = elapsedTime / 10;
  // });

  return (
    <>
      {/* {satelliteCoords.map((index,key)=>{ */}
      <mesh
        // key={index}
        position={getSatellitePosition(tleLine1, tleLine2)}
        // onClick={onClickOverHandler}
        onPointerOver={onPointerOverHandler}
        onPointerOut={onPointerOutHandler}
      >
        <sphereGeometry args={[0.004, 32, 32]} />
        <meshBasicMaterial color={satelliteHover ? 'gray' : 'red'} />
      </mesh>
    </>
  );
}

export default Satellites;
