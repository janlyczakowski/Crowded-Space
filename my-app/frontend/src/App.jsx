import { Canvas } from '@react-three/fiber';
import styles from './App.module.css';
import Earth from './components/Earth';
import SkyBox from './components/Skybox';
import React, { Suspense, useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import ErrorFallback from './UI/ErrorFallback';
import { Html } from '@react-three/drei';
import InfoSection from './components/InfoSection';
import Satellites from './components/Satellites/Satellites';
// import useDataFetcher from './hooks/useDataFetcher';
import config from './config.json';

function App() {
  console.log('app rendered');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarActiveNavigation, setSidebarActiveNavigation] =
    useState('storytelling');
  const [sidebarActiveButton, setSidebarActiveButton] = useState('owner');
  const canvasRef = useRef(null);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' });
  const url_active_satellites = config.all_active_satellites;
  const url_active_satellites_purpose = config.all_active_satellites; // add appropriate url
  const url_space_debris = config.all_space_debris;

  // const url = config.url_space_debris;
  // const { data, loading, error } = useDataFetcher(url);
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

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (isBigScreen) {
      if (sidebarOpen) {
        canvasElement.style.transform = 'translateX(-200px)';
      } else {
        canvasElement.style.transform = 'translateX(0)';
      }
    } else {
      canvasElement.style.transform = 'translateX(0)';
    }
  }, [sidebarOpen, isBigScreen]);

  console.log(sidebarActiveNavigation);
  console.log(sidebarActiveButton);

  const showActiveSatellite = sidebarActiveNavigation === 'storytelling';
  const showActiveSatelliteByOwner =
    sidebarActiveNavigation === 'statistics' && sidebarActiveButton === 'owner';
  const showActiveSatelliteByPurpose =
    sidebarActiveNavigation === 'statistics' &&
    sidebarActiveButton === 'purpose';
  const showSpaceDebrisByCollision =
    sidebarActiveNavigation === 'statistics' &&
    sidebarActiveButton === 'debris';

  return (
    <ErrorFallback>
      <div className={styles.content_wrapper}>
        <Canvas ref={canvasRef}>
          <Suspense
            fallback={
              <Html center className={styles.fallback_wrapper}>
                <div className={styles.wrapper}>
                  <p className={styles.loading_text}>
                    Hold on, we're putting satellites on their orbits...
                  </p>
                </div>
              </Html>
            }
          >
            {showActiveSatellite && (
              <Satellites
                sidebarOpen={sidebarOpen}
                isBigScreen={isBigScreen}
                url={url_active_satellites}
                styling="active"
              />
            )}
            {showActiveSatelliteByOwner && (
              <Satellites
                sidebarOpen={sidebarOpen}
                isBigScreen={isBigScreen}
                url={url_active_satellites}
                styling="owner"
              />
            )}
            {/* {showActiveSatelliteByPurpose && (
              <Satellites
              sidebarOpen={sidebarOpen}
              isBigScreen={isBigScreen}
              url={url_active_satellites_purpose}
              styling="purpose"
            />
            )} */}
            {showSpaceDebrisByCollision && (
              <Satellites
                sidebarOpen={sidebarOpen}
                isBigScreen={isBigScreen}
                url={url_space_debris}
                styling="debris"
              />
            )}

            <Earth sidebarOpen={sidebarOpen} />
            <SkyBox />
          </Suspense>
        </Canvas>
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeNavigation={sidebarActiveNavigation}
          setActiveNavigation={setSidebarActiveNavigation}
          activeButton={sidebarActiveButton}
          setActiveButton={setSidebarActiveButton}
        />
        {/* <div className={styles.info_section}> */}
        <InfoSection />
        {/* </div> */}
      </div>
    </ErrorFallback>
  );
}

export default App;
