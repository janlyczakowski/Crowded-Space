import styles from './InfoSection.module.css';
import { ReactComponent as Logo } from '../resources/Icons/logo.svg';
import { useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function InfoSection() {
  const [pageActive, setPageActive] = useState(false);

  const onClickHandler = () => {
    setPageActive(true);
  };

  const onClickNavBtnHandler = () => {
    setPageActive(false);
  };

  const pageStyle = pageActive
    ? `${styles.resources_page} ${styles.resource_page_open}`
    : `${styles.resources_page}`;
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

      <div className={pageStyle}>
        <AiOutlineClose
          className={styles.navigation_btn}
          onClick={onClickNavBtnHandler}
        />
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <h2 className={styles.title}>Authors</h2>
            <p className={styles.content}>
              Jan Łyczakowski, Lennart Kerl and Nicolás Martínez Heredia
            </p>
          </div>
          <div className={styles.container}>
            <h2 className={styles.title}>About the project</h2>
            <p className={styles.content}>
              This project was done for the module of Digital map creation for
              the summer semester of 2023 at the Technical University of Vienna
              as part of the{' '}
              <a href="https://cartographymaster.eu/" className={styles.link}>
                Cartography M.Sc.
              </a>{' '}
              Our web-based visualization aims to increase awareness about
              satellites and debris around the Earth. This visualization is
              complemented with statistics and storytelling that shows the user
              the emerging issue of the cluttering of space objects and space
              debris in Earth's orbits. Our project was partly inspired by the
              ESRI platform{' '}
              <a
                href="https://geoxc-apps.bd.esri.com/space/satellite-explorer/"
                className={styles.link}
              >
                SatelliteXplorer
              </a>
            </p>
          </div>
          <div className={styles.container}>
            <h2 className={styles.title}>Data sources</h2>
            <p className={styles.content}>
              This dataset was upated last on June 2023. The satellite positions
              and attributes are calculated based on the database mantained by{' '}
              <a href="https://celestrak.org/" className={styles.link}>
                Celestrak
              </a>
              . Information used for storytelling and further explanations about
              space clutter and debris were sourced from websites such as{' '}
              <a href="https://www.nasa.gov/" className={styles.link}>
                {' '}
                NASA
              </a>
              ,{' '}
              <a href="https://www.esa.int/" className={styles.link}>
                European Space Agency
              </a>{' '}
              and{' '}
              <a href="https://www.wikipedia.org/" className={styles.link}>
                Wikipedia
              </a>
              .
            </p>
          </div>
          <div className={styles.container}>
            <h2 className={styles.title}>Technology used</h2>
            <p className={styles.content}>
              Backend:{' '}
              <a
                href="https://fastapi.tiangolo.com/lo/"
                className={styles.link}
              >
                FastAPI
              </a>
              ,{' '}
              <a href="https://www.postgresql.org/" className={styles.link}>
                PostgreSQL
              </a>
              <br />
              Frontend:{' '}
              <a href="https://react.dev/" className={styles.link}>
                React.js
              </a>
              ,{' '}
              <a href="https://mui.com/" className={styles.link}>
                Material UI
              </a>
              ,{' '}
              <a href="https://threejs.org/" className={styles.link}>
                Three.js
              </a>
              ,{' '}
              <a
                href="https://github.com/shashwatak/satellite-js"
                className={styles.link}
              >
                {' '}
                Satellite.js
              </a>
            </p>
          </div>
          <div className={styles.container}>
            <h2 className={styles.title}>
              AI Disclaimer and other attributions
            </h2>
            <p className={styles.content}>
              Some of the text used in the interface was created with the
              assistance of{' '}
              <a href="https://chat.openai.com/" className={styles.link}>
                ChatGPT
              </a>
              . Graphical elements of design such as symbols were also created
              with the assistance of{' '}
              <a
                href="https://www.bing.com/images/create"
                className={styles.link}
              >
                Image creator
              </a>
              . Loading animation was created based on a tutorial on YouTube
              <a
                href="https://www.youtube.com/watch?v=mAewuQPMFI8"
                className={styles.link}
              >
                {' '}
                OnlineTutorials.
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoSection;
