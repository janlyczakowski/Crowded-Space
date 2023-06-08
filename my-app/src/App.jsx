import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import styles from './App.module.css';
import Earth from './components/Earth/Earth';
import SkyBox from './components/Skybox';

function App() {
  return (
    <div className={styles.container}>
      <Canvas>
        {/* <color attach="background" args={['#000000']} /> */}
        <Suspense fallback={null}>
          <Earth />
          <SkyBox />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
