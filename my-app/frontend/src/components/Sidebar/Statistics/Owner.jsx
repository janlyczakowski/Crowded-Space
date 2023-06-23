import styles from './Owner.module.css';
import OwnerChart from './OwnerChart';

function Owner() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Who owns most of the satellites?</h2>
      <div className={styles.description}>
        Many nations and private companies have deployed satellites in the past
        decades. However, several countries with influential markets have
        dominated space exploration and commercialization efforts. The five most
        significant owners of satellites up to 2023 are the United States,
        China, the United Kingdom, Russia, and Japan. These countries have the
        most extensive satellite fleets and are the ones who have invested the
        most resources in public and private spending.
      </div>

      <div className={styles.chart_owner}>
        <OwnerChart />
      </div>
    </div>
  );
}

export default Owner;
