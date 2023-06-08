import { Suspense, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import styles from './App.module.css';
import Earth from './components/Earth/Earth';
import StarsMap from './resources/Stars/8k_stars.jpg';
import { TextureLoader, Texture } from 'three';

function App() {
  // const [starsMap] = useLoader(TextureLoader, [StarsMap]);
  return (
    <div className={styles.container}>
      <Canvas>
        <color attach="background" args={['#000000']} />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
