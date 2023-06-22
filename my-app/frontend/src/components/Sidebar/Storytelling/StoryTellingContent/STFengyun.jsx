import styles from './StoryTellingContent.module.css';
import image from '../../../../resources/pictures/Fengyun Satellite.png';

function STFengyun() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro_text}>
        <h3 className={styles.title}>
          Chinese deliberate destruction of a satellite
        </h3>
        <p className={styles.year}>2007</p>
      </div>

      <p className={styles.content}>
        On January 11, 2007, China demonstrated its capability to conduct
        anti-satellite operations by deliberately destroying one of its weather
        satellites, Fengyun-1C, using a ground-launched missile. This
        provocative event marked a significant development in the militarization
        of space and raised concerns about the safety and sustainability of
        space activities. The destruction of Fengyun-1C resulted in the creation
        of thousands of fragments of space debris, which continue to pose a risk
        to operational satellites and future space missions. The incident
        highlighted the urgent need for international cooperation and efforts to
        mitigate space debris, promote responsible space conduct, and ensure the
        long-term viability of space activities.
      </p>
      <p className={styles.sat_info}>Satellites launched till that day: 1</p>
      <img
        src={image}
        alt="Chinese TV Rendering of Fengyun Satellite"
        className={styles.image}
      />
      <div className={styles.attribution}>
        <p className={styles.attribution_text}>
          Source:{' '}
          <span>
            <a
              className={styles.attribution_link}
              href="https://commons.wikimedia.org/wiki/File:Chinese_TV_Rendering_of_Fengyun_Satellite.png"
            >
              {' '}
              Wikimedia Commons
            </a>
          </span>{' '}
        </p>
      </div>
    </div>
  );
}

export default STFengyun;
