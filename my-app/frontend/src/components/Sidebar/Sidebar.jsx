import React from 'react';
import styles from './Sidebar.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';
import SidebarContent from './SidebarContent';

function Sidebar(props) {
  const {
    sidebarOpen,
    setSidebarOpen,
    activeNavigation,
    setActiveNavigation,
    activeButton,
    setActiveButton,
  } = props;

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
          <SidebarContent
            activeNavigation={activeNavigation}
            setActiveNavigation={setActiveNavigation}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
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
