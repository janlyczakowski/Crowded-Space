import { Point, Points, Sphere } from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';
import { getSatellitePosition } from '../getSatellitePosition';

function Satellites(props) {
  const { correctedPosition } = props;
  const [satelliteHover, setSatelliteHover] = useState(false);
  //   const satRef = useRef();

  // Sample TLE
  const tleLine1 =
    '1 25544U 98067A   23159.62833686  .00015293  00000+0  26961-3 0  9998';
  const tleLine2 =
    '2 25544  51.6424  10.9615 0005598  65.0896  31.7520 15.50597012400464';

  const [satellite_cords, setSatelliteCords] = useState([
    ...getSatellitePosition(tleLine1, tleLine2),
  ]);

  console.log(satellite_cords);

  const onClickOverHandler = (e) => {
    e.stopPropagation();
    console.log('point clicked');
    console.log(e.object);
  };

  // const satPosition = correctedPosition
  //   ? [
  //       getSatellitePosition(tleLine1, tleLine2)[0] - 2,
  //       getSatellitePosition(tleLine1, tleLine2)[1],
  //       getSatellitePosition(tleLine1, tleLine2)[2],
  //     ]
  //   : getSatellitePosition(tleLine1, tleLine2);
  // useEffect(() => {
  //   // console.log(correctedPosition);
  //   console.log(getSatellitePosition(tleLine1, tleLine2));
  //   // if()
  // }, [correctedPosition]);
  // console.log(satPosition);
  return (
    <Points sizes={0.1}>
      <pointsMaterial vertexColors size={0.01} />
      <Point
        position={getSatellitePosition(tleLine1, tleLine2)}
        //   color={satelliteHover ? 0x888888 : 'red'}
        color="red"
        // ref={satRef}
        // onPointerOver={(e) => onMouseOver(e)}
        onClick={(e) => onClickOverHandler(e)}
      />
    </Points>
  );
}

export default Satellites;
