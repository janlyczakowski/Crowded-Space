import styles from './StoryTellingContent.module.css';
import image from '../../../../resources/pictures/Collision.jpg';

function STCollision() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro_text}>
        <h3 className={styles.title}>
          First Accidental Collision of Objects in Orbit
        </h3>
        <p className={styles.year}>2009</p>
      </div>

      <p className={styles.content}>
        On February 10, 2009, a significant milestone occurred in space
        exploration when the defunct Russian military satellite Kosmos 2251
        collided with the operational Iridium 33 satellite. This accidental
        collision, the first of its kind, highlighted the growing issue of space
        debris and the need for improved space traffic management. The collision
        occurred at approximately 42,000 kilometers per hour, destroying both
        satellites and creating thousands of additional fragments of space
        debris. The incident underscored the challenges associated with orbital
        debris and its potential risks to operational spacecraft and future
        missions. It served as a wake-up call to the space community, prompting
        increased efforts to address the issue of space debris and ensure the
        long-term sustainability of space activities.
      </p>
      <p className={styles.sat_info}>
        Satellites launched till that day: 11770
      </p>
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
              href="https://en.wikipedia.org/wiki/2009_satellite_collision"
            >
              {' '}
              Wikipedia
            </a>
          </span>{' '}
        </p>
      </div>
    </div>
  );
}

export default STCollision;
