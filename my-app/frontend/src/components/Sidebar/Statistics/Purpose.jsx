import styles from './Purpose.module.css';
import PurposeChart from './PurposeChart';

function Purpose() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>What do we need satellites for?</h2>
      <div className={styles.description}>
        The purpose of satellites can be multifold. Most are used for
        communication; other significant uses are weather monitoring, scientific
        research, navigation, and military operations. Communication satellites
        are a cornerstone of connectivity in contemporary globalized society.
        Weather, GPS, and scientific satellites such as those used in Remote
        Sensing also significantly influence technological industries across the
        globe. Military satellites provide intelligence for defense and
        security.
      </div>
      <div className={styles.chart}>
        <PurposeChart />
      </div>
    </div>
  );
}

export default Purpose;
