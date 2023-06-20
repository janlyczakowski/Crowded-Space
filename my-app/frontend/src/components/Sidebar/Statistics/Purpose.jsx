import styles from './Purpose.module.css';
import PurposeChart from './PurposeChart';

function Purpose() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Who owns most of the satellites?</h2>
      <div className={styles.description}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet libero
        magni eos animi in voluptas id quo expedita error consequuntur! Deleniti
        excepturi facere maxime, quis impedit laborum obcaecati esse ullam.
      </div>
      <div className={styles.chart}>
        <PurposeChart />
      </div>
    </div>
  );
}

export default Purpose;
