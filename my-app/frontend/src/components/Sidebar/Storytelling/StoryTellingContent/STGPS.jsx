import styles from './StoryTellingContent.module.css';
import image from '../../../../resources/pictures/GPS.jpg';

function STGPS() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro_text}>
        <h3 className={styles.title}>First GPS Satellite Launch</h3>
        <p className={styles.year}>1978</p>
      </div>

      <p className={styles.content}>
        On February 22, 1978, the United States launched the first satellite in
        the Global Positioning System (GPS) constellation, marking a significant
        milestone in satellite-based positioning and timing. The satellite,
        Navstar 1, was the precursor to a network of satellites that would
        revolutionize navigation and positioning technology worldwide. GPS
        utilizes a constellation of satellites in medium Earth orbit to provide
        precise location determination, navigation assistance, and accurate
        timing services. This groundbreaking development has profoundly impacted
        various industries, including transportation, emergency services,
        surveying, and everyday navigation. GPS technology has become integral
        to our lives, enabling us to easily navigate, track our movements, and
        synchronize time globally.
      </p>
      <p className={styles.sat_info}>Satellites launched till that day: 1</p>
      <img src={image} alt="GPS constellation" className={styles.image} />
      <div className={styles.attribution}>
        <p className={styles.attribution_text}>
          Source:{' '}
          <span>
            <a
              className={styles.attribution_link}
              href="https://en.wikipedia.org/wiki/File:GPS-constellation-3D-NOAA.jpg"
            >
              {' '}
              Wikimedia Commons
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default STGPS;
