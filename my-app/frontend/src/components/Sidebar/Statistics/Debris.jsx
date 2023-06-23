import styles from './Debris.module.css';

function Debris() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>What is space debris?</h2>
      <div className={styles.description}>
        <p className={styles.description_intro}>
          Human-made objects without practical use orbiting Earth are called
          space debris. This includes satellites that no longer work, rocket
          stages, and fragments from collisions and explosions. Space debris is
          created in many ways, including collisions between satellites,
          anti-satellite tests, accidental satellite breakups, discarded rocket
          stages, and natural causes. This debris can have a significant impact
          on the infrastructure in orbit, as well as on human projects like
          space exploration.
        </p>
        <p className={styles.description_stats}>
          As of of June 2023, the{' '}
          <span>
            <a
              className={styles.attribution_link}
              href="https://www.esa.int/Space_Safety/Space_Debris/Space_debris_by_the_numbers"
            >
              European Space Agency
            </a>
          </span>{' '}
          &nbsp; has reported more than 36,500 pieces of space debris more
          significant than 10cm, 1 million between 1-10cm, and 130 million
          pieces smaller than 1cm in orbit. They travel in Low-Earth-Orbit up to
          30 000 - 40 000 km/h so even very small object can completely destroy
          or damage a spacecraft.
        </p>
        <p className={styles.description_intro_2}>
          Even though every major space agency has contributed to the problem of
          space debris in one of the ways mentioned above, the following three
          examples show the issues and impact of space debris.
        </p>
      </div>
      <div className={styles.collsions}>
        <div className={`${styles.event_container} ${styles.description}`}>
          <p className={`${styles.year} ${styles.debris_china}`}>2007</p>
          <p className={styles.content}>
            On January 11, 2007, China carried out an anti-satellite test where
            they purposely used a missile stationed on the ground to obliterate
            their weather satellite,{' '}
            <span className={styles.debris_china}>Fengyun 1C</span>. This
            resulted in 3,500 pieces of space debris generated from the
            satellite breaking into multiple fragments. The debris from this
            test posed a severe hazard to other satellites in orbit, as it
            heightened the chances of collisions and added to the already
            growing space debris issue. Concerns were voiced by the
            international community about the test, highlighting the importance
            of responsible space practices and reducing the risks associated
            with space debris.
          </p>
        </div>
        <div className={`${styles.event_container} ${styles.description}`}>
          <p className={`${styles.year} ${styles.debris_usa}`}>2009</p>
          <p className={styles.content}>
            The <span className={styles.debris_usa}>Iridium 33</span> satellite,
            part of the Iridium communications constellation, collided with the
            Russian spacecraft{' '}
            <span className={styles.debris_usa}> Cosmos 2251</span> at an
            altitude of roughly 790 kilometers on February 10, 2009. As a
            result, both satellites shattered and produced numerous fragments,
            resulting in over 2,300 pieces of large debris. This incident has
            significantly increased the risk to future space missions and other
            satellite launches. The event underscores the importance of space
            traffic management and the urgent need for international cooperation
            to tackle the challenge of space debris.
          </p>
        </div>
        <div className={`${styles.event_container} ${styles.description}`}>
          <p className={`${styles.year} ${styles.debris_russia}`}>2021</p>
          <p className={styles.content}>
            On November 15, 2021, the{' '}
            <span className={styles.debris_russia}>Cosmos 1408</span> satellite,
            initially launched in 1982 for military purposes by the Soviet
            Union, was destroyed during a Russian anti-satellite weapon test.
            The aftermath of this event resulted in the creation of space debris
            in orbits ranging between 300 km and 1,100 km. Due to the potential
            danger of debris collision, the International Space Station (ISS)
            crew took refuge in their escape capsules. This event has also
            increased the risk of future debris collisions with the ISS and
            other satellites.
          </p>
        </div>
        <p className={styles.collision}></p>
      </div>
    </div>
  );
}

export default Debris;
