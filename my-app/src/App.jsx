import { Html, useProgress, Loader } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import styles from './App.module.css';
import Earth from './components/Earth/Earth';
import SkyBox from './components/Skybox';
import { Suspense } from 'react';
import Sidebar from './components/Sidebar';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';

// import CircularProgress from '@mui/material/CircularProgress';
// extend({ CircularProgress });

function App() {
  console.log('app rendered');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' });

  const onClickNavBtnHandler = () => {
    setSidebarOpen(() => !sidebarOpen);
  };

  let sidebarStyle = sidebarOpen
    ? `${styles.sidebar_open} ${styles.sidebar}`
    : `${styles.sidebar}`;
  let mainContentStyle = `${styles.main_content}`;
  let navBtnStyle = `${styles.open_btn}`;

  if (isBigScreen && !sidebarOpen) {
    mainContentStyle = `${styles.main_content_full}`;
    sidebarStyle = `${styles.sidebar_close}`;
  }
  if (isBigScreen && sidebarOpen) {
    navBtnStyle = `${styles.open_btn_moved}`;
  } else if ((isBigScreen && sidebarOpen) || !isBigScreen) {
    mainContentStyle = `${styles.main_content}`;
  }

  useEffect(() => {
    if (isBigScreen) {
      setSidebarOpen(true);
    }
  }, [isBigScreen]);

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
          <div className={mainContentStyle}>
            <Canvas>
              <Earth />
              <SkyBox />
            </Canvas>
            {!sidebarOpen && (
              <HiChevronDoubleLeft
                className={`${styles.navigation_btn} ${navBtnStyle}`}
                onClick={onClickNavBtnHandler}
              />
            )}
            {sidebarOpen && !isBigScreen && (
              <AiOutlineClose
                className={`${styles.navigation_btn} ${navBtnStyle}`}
                onClick={onClickNavBtnHandler}
              />
            )}
            {sidebarOpen && isBigScreen && (
              <HiChevronDoubleRight
                className={`${styles.navigation_btn} ${navBtnStyle}`}
                onClick={onClickNavBtnHandler}
              />
            )}
          </div>
          <div className={sidebarStyle}>
            <Sidebar />
          </div>
        </div>
      </Suspense>
      {/* <Loader /> */}
    </>
  );
}

export default App;
