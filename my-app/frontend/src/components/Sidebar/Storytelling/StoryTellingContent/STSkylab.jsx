import styles from './StoryTellingContent.module.css';
import image from '../../../../resources/pictures/Skylab.jpg';

function STSkylab() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro_text}>
        <h3 className={styles.title}>Launch of Skylab</h3>
        <p className={styles.year}>1973</p>
      </div>

      <p className={styles.content}>
        Skylab, the United States' first space station, was launched on May 14,
        1973, and became a pioneering platform for human habitation in space.
        Originally a modified Saturn V rocket stage, Skylab provided a unique
        opportunity for extended human presence beyond Earth's atmosphere.
        Throughout its mission, Skylab hosted three astronaut crews who
        conducted scientific experiments, performed repairs, and gathered
        valuable data on human physiology, materials science, and solar
        observations. Skylab's contributions to our understanding of
        long-duration space travel, human adaptation to microgravity, and solar
        phenomena were significant. Moreover, the success of Skylab paved the
        way for subsequent space station programs, including the iconic
        International Space Station (ISS), which continues to serve as a symbol
        of international cooperation and a vital platform for scientific space
        research.
      </p>
      <p className={styles.sat_info}>Satellites launched till that day: 1</p>
      <img src={image} alt="Skylab" className={styles.image} />
      <div className={styles.attribution}>
        <p className={styles.attribution_text}>NASA public domain</p>
      </div>
    </div>
  );
}

export default STSkylab;
