import styles from './StoryTellingContent.module.css';
import image from '../../../../resources/pictures/Mars rover.jpg';

function STMars() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro_text}>
        <h3 className={styles.title}>Mars Exploration Rovers Mission</h3>
        <p className={styles.year}>2004</p>
      </div>

      <p className={styles.content}>
        In 2004, NASA successfully landed two robotic explorers, Spirit and
        Opportunity, on the surface of Mars as part of the Mars Exploration
        Rover mission. These rovers were designed to study the geology, climate,
        and potential habitability of the Red Planet. Spirit landed in Gusev
        Crater, while Opportunity touched down in Meridiani Planum. Both rovers
        far exceeded their planned operational lifetimes and conducted extensive
        scientific investigations. They provided valuable data on Martian
        geology, including evidence of past water activity and minerals
        indicative of a potentially habitable environment. The mission expanded
        our understanding of Mars and showcased the remarkable capabilities of
        robotic exploration. Spirit operated until 2010, while Opportunity
        remained active until 2018, collectively transforming our knowledge of
        the Martian surface and paving the way for future Mars missions.
      </p>
      <p className={styles.sat_info}>Satellites launched till that day: 1</p>
      <img src={image} alt="Mars robot" className={styles.image} />
      <div className={styles.attribution}>
        <p className={styles.attribution_text}>NASA public domain</p>
      </div>
    </div>
  );
}

export default STMars;
