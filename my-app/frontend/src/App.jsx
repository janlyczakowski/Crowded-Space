import { Canvas } from '@react-three/fiber';
import styles from './App.module.css';
import Earth from './components/Earth';
import SkyBox from './components/Skybox';
import { Suspense, useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import { useThree } from '@react-three/fiber';
import { DEG2RAD } from 'three/src/math/MathUtils';
// import { useEffect } from 'react';

// import CircularProgress from '@mui/material/CircularProgress';
// extend({ CircularProgress });

function App() {
  console.log('app rendered');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // const navBtnStyle = isBigScreen ?

  // let sidebarStyle = sidebarOpen
  //   ? `${styles.sidebar_open} ${styles.sidebar}`
  //   : `${styles.sidebar}`;
  // let mainContentStyle = `${styles.main_content}`;
  // let navBtnStyle = `${styles.open_btn}`;

  // if (isBigScreen && !sidebarOpen) {
  //   mainContentStyle = `${styles.main_content_full}`;
  //   sidebarStyle = `${styles.sidebar_close}`;
  // }
  // if (isBigScreen && sidebarOpen) {
  //   navBtnStyle = `${styles.open_btn_moved}`;
  // } else if ((isBigScreen && sidebarOpen) || !isBigScreen) {
  //   mainContentStyle = `${styles.main_content}`;
  // }
  // const { camera, gl } = useThree();
  // useEffect(() => {
  //   camera.rotation.set(DEG2RAD(30), 0, 0);
  //   // return () => {
  //   //   controls.dispose();
  //   // };
  // }, [camera, gl]);
  return (
    <>
      <Suspense
        fallback={
          <div className={styles.wrapper}>
            <p className={styles.loading_text}>
              Please wait, data is loading...
            </p>
          </div>
        }
      >
        <div className={styles.content_wrapper}>
          <Canvas
          // camera={{ fov: 24, near: 1.0, far: 1000, position: [60, 20, 150] }}
          >
            <Earth sidebarOpen={sidebarOpen} />
            <SkyBox />
          </Canvas>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
      </Suspense>
      {/* <Loader /> */}
    </>
  );
}

export default App;
