import styles from './StoryTellingContent.module.css';
import image from '../../../../resources/pictures/Apollo 11.jpg';

function STApollo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro_text}>
        <h3 className={styles.title}>Apollo 11 Moon Landing</h3>
        <p className={styles.year}>1969</p>
      </div>

      <p className={styles.content}>
        The Apollo 11 mission, culminating in the historic moon landing on July
        20, 1969, is one of humanity's most remarkable achievements. The mission
        aimed to land astronauts on the lunar surface and safely return them to
        Earth. Commanded by Neil Armstrong, with Buzz Aldrin as the lunar module
        pilot and Michael Collins as the command module pilot, Apollo 11
        accomplished this monumental feat. As millions watched with bated
        breath, Neil Armstrong took that iconic first step, proclaiming, 'That's
        one small step for a man, one giant leap for mankind.' The successful
        landing of Apollo 11 demonstrated the incredible capabilities of human
        space exploration and solidified the United States' dominance in the
        Space Race against the Soviet Union. It served as a testament to human
        ingenuity, determination, and technological prowess, inspiring future
        generations to push the boundaries of what is possible in space.
      </p>
      <p className={styles.sat_info}>Satellites launched till that day: 1628</p>
      <img src={image} alt="Landing on the Moon" className={styles.image} />
      <div className={styles.attribution}>
        <p className={styles.attribution_text}>Public domain</p>
      </div>
    </div>
  );
}

export default STApollo;
