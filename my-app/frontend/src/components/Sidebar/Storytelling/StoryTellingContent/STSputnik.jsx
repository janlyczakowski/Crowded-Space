import styles from './StoryTellingContent.module.css';
import image from '../../../../resources/pictures/Sputnik.jpg';

function STSputnik() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro_text}>
        <h3 className={styles.title}>Launch of Sputnik 1</h3>
        <p className={styles.year}>1957</p>
      </div>

      <p className={styles.content}>
        The launch of Sputnik 1 on October 4, 1957, marked the dawn of the Space
        Age. Developed by the Soviet Union, Sputnik 1 became the first
        artificial satellite to orbit the Earth, ushering in a new era of space
        exploration and satellite technology. Weighing about 184 pounds (83.6
        kilograms), it took approximately 98 minutes to complete each orbit
        around the Earth. This groundbreaking achievement had profound
        geopolitical implications, as it demonstrated Soviet technological
        prowess and initiated the Space Race between the United States and the
        Soviet Union. Sputnik 1's success ignited a fervor for space exploration
        and led to advancements in satellite technology that have shaped our
        modern world.
      </p>
      <p className={styles.sat_info}>Satellites launched till that day: 1</p>
      <img src={image} alt="Sputnik 1" className={styles.image} />
      <div className={styles.attribution}>
        <p className={styles.attribution_text}>US Air Force public domain </p>
      </div>
    </div>
  );
}

export default STSputnik;
