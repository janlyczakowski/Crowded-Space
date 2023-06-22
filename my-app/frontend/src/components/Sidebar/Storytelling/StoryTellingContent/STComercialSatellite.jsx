import styles from './StoryTellingContent.module.css';
import image from '../../../../resources/pictures/Intelsat 1.jpg';

function STCommercialSatellite() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro_text}>
        <h3 className={styles.title}>First Commercial Satellite Launch</h3>
        <p className={styles.year}>1965</p>
      </div>

      <p className={styles.content}>
        The launch of Early Bird, also known as Intelsat I, on April 6, 1965,
        marked a major milestone in the commercialization of space. Developed by
        the Communications Satellite Corporation (COMSAT) in collaboration with
        NASA, Early Bird became the world's first commercial communications
        satellite. Positioned in geostationary orbit, it revolutionized global
        communications by facilitating the transmission of television signals,
        telephone calls, and other data across vast distances. This breakthrough
        in satellite technology enabled instant global connectivity, fostering
        international communication and paving the way for modern satellite
        communication systems. Early Bird's success laid the foundation for the
        commercial space industry and set the stage for the proliferation of
        satellite-based services that we rely on today.
      </p>
      <p className={styles.sat_info}>Satellites launched till that day: 1</p>
      <img src={image} alt="Yuri Gagarin" className={styles.image} />
      <div className={styles.attribution}>
        <p className={styles.attribution_text}>NASA public domain</p>
      </div>
    </div>
  );
}

export default STCommercialSatellite;
