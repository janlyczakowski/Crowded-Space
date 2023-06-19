import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import styles from './Sidebar.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillCaretLeft } from 'react-icons/ai';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import SidebarContent from './SidebarContent';
import { DEG2RAD } from 'three/src/math/MathUtils';

function Sidebar(props) {
  console.log('sidebar rendered');
  const { sidebarOpen, setSidebarOpen } = props;
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' });

  const onClickNavBtnHandler = () => {
    setSidebarOpen(() => !sidebarOpen);
  };

  let sidebarStyle = sidebarOpen
    ? `${styles.sidebar_open} ${styles.sidebar_container}`
    : `${styles.sidebar_container}`;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={sidebarStyle}>
          <SidebarContent />
        </div>
        <div className={styles.btn_container}>
          {!sidebarOpen && (
            <HiChevronDoubleLeft
              className={`${styles.navigation_btn} ${styles.nav_open_left}`}
              onClick={onClickNavBtnHandler}
            />
          )}
          {sidebarOpen && !isBigScreen && (
            <AiOutlineClose
              className={`${styles.navigation_btn} ${styles.nav_close}`}
              onClick={onClickNavBtnHandler}
            />
          )}
          {sidebarOpen && isBigScreen && (
            <HiChevronDoubleRight
              className={`${styles.navigation_btn} ${styles.nav_open_right} `}
              onClick={onClickNavBtnHandler}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
