import styles from './StoryTellingContent.module.css';
import image from '../../../../resources/pictures/LEO.jpg';

function STNow() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro_text}>
        <h3 className={styles.title}>Time to act</h3>
        <p className={styles.year}>2023</p>
      </div>

      <p className={styles.content}>
        As we look to the future, it has become evident that Earth's orbit is
        becoming increasingly crowded, with a significant and ever-growing
        number of satellites and space debris. This overcrowding poses
        significant risks to operational satellites, future space missions, and
        even our ability to access and utilize space effectively. We must take
        immediate and decisive action to address this challenge. This includes
        implementing improved space traffic management systems to track and
        coordinate satellite movements, developing effective debris mitigation
        strategies to reduce the creation of new space debris, and fostering
        international collaboration to ensure space activities' long-term
        viability and safety. Furthermore, responsible satellite deployment
        practices, such as designing satellites with built-in deorbit
        mechanisms, can contribute to reducing the accumulation of space debris.
        Establishing international agreements and guidelines for space
        activities can also play a crucial role in promoting responsible
        behavior and preventing the further degradation of space. By taking
        proactive steps, we can protect our access to space, preserve its
        benefits for scientific research, communication, navigation, and
        exploration, and ensure a sustainable and secure future for space
        activities.
      </p>
      <p className={styles.sat_info}>Satellites launched till that day: 1</p>
      <img
        src={image}
        alt="Collision between Iridium 33 and Kosmos 2251 -- debris field after 50 minutes"
        className={styles.image}
      />
      <div className={styles.attribution}>
        <p className={styles.attribution_text}>
          Source:{' '}
          <span>
            <a
              className={styles.attribution_link}
              href="https://noirlab.edu/public/images/noirlab2022a/"
            >
              {' '}
              NOIRLab
            </a>
          </span>{' '}
        </p>
      </div>
    </div>
  );
}

export default STNow;
