// // import "./styles.css";
// import { Canvas, useLoader } from '@react-three/fiber';
// import { Suspense } from 'react';
// import circleImg from './asset/circle.png';
// import * as THREE from 'three';
// import { useMemo } from 'react';
// import useDataFetcher from '../../hooks/useDataFetcher';

// function Points() {
//   const { data, loading, error } = useDataFetcher(url);
//   //   const CircleImg = useLoader(THREE.TextureLoader, circleImg);
//   //   const count = 100; // number point accross one axis ini akan generate point 10.00 dimana count hanya 100 karena multiply
//   //   const sep = 3; //merupakan distance dari tiap point
//   let satellite_positions = useMemo(() => {
//     let positions = [];
//     data.map((satellite, index) => {
//       const position = getSatellitePosition(satellite.tle1, satellite.tle2);
//       positions.push(position.x, position.y, position.z);
//     });
//     return new Float32Array(positions);
//   }, [data]);

//   return (
//     <points>
//       <bufferGeometry attach="geometry">
//         <bufferAttribute
//           attach="attributes-position" //attribute parameter yang akan dikontrol
//           array={positions}
//           count={positions.length / 3} //
//           itemSize={3} //dikeranakan telah diketahui bahwa tiap arraytype axis akan berisi 3 value pada 1d array
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         attach="material"
//         color={0x00aaff}
//         sizes={0.5}
//         sizeAttenuation //merupakan parameter yang menscale object berdasarkan perspective camera
//         transparent={false}
//         alphaTest={0.5} //merupakan thresshold saat rendering untuk mencega bila opacity dibawah value alphatest
//         opacity={1.0}
//       />
//     </points>
//   );
// }
