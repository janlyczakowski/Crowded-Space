import styles from './InfoSection.module.css';
import { ReactComponent as Logo } from '../resources/Icons/logo.svg';
import { useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function InfoSection() {
  const pageRef = useRef();
  let resource_page_style = `${styles.resources_page}`;

  const onClickHandler = () => {
    console.log(pageRef);
    if (pageRef !== null) {
      pageRef.current.classList.add(`${styles.resource_page_open}`);
    }
  };

  const onClickNavBtnHandler = () => {
    if (pageRef !== null) {
      pageRef.current.classList.remove(`${styles.resource_page_open}`);
    }
  };

  return (
    <>
      <div className={styles.info_section}>
        <div className={styles.info_wrapper}>
          <Logo className={styles.info_logo} />
          <p className={styles.info_resources} onClick={onClickHandler}>
            About
          </p>
        </div>
      </div>
      {/* {resourcesOpen && ( */}
      <div className={resource_page_style} ref={pageRef}>
        <AiOutlineClose
          className={styles.navigation_btn}
          onClick={onClickNavBtnHandler}
        />
      </div>
      {/* )} */}
    </>
  );
}

export default InfoSection;
