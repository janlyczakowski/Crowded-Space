import styles from './StoryTellingContent.module.css';
import image from '../../../../resources/pictures/Gagarin with awards.jpg';

function STGagarin() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro_text}>
        <h3 className={styles.title}>Yuri Gagarin's Spaceflight</h3>
        <p className={styles.year}>1961</p>
      </div>

      <p className={styles.content}>
        On April 12, 1961, Yuri Gagarin, a Soviet cosmonaut, embarked on a
        historic spaceflight aboard the Vostok 1 spacecraft. Gagarin's mission
        made him the first human to venture into space, orbiting the Earth once
        in approximately 108 minutes. This milestone not only demonstrated the
        feasibility of manned space travel but also showcased the remarkable
        capabilities of human beings to explore beyond the confines of Earth.
        Gagarin's successful journey captivated the world and intensified the
        competition between superpowers during the Cold War. It fueled a sense
        of national pride and further escalated the Space Race between the
        United States and the Soviet Union, inspiring ambitious space
        exploration efforts in the coming years.
      </p>
      <p className={styles.sat_info}>Satellites launched till that day: 1</p>
      <img src={image} alt="Yuri Gagarin" className={styles.image} />
      <div className={styles.attribution}>
        <p className={styles.attribution_text}>
          Source:{' '}
          <span>
            <a
              className={styles.attribution_link}
              href="https://commons.wikimedia.org/wiki/File:Yuri_Gagarin_with_awards.jpg"
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

export default STGagarin;
