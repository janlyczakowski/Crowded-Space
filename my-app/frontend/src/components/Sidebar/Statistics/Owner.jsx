import styles from './Owner.module.css';
import OwnerChart from './OwnerChart';

function Owner() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Who owns all the satellites?</h2>
      <div className={styles.description}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet libero
        magni eos animi in voluptas id quo expedita error consequuntur! Deleniti
        excepturi facere maxime, quis impedit laborum obcaecati esse ullam.
      </div>
      <div className={styles.chart}>
        <OwnerChart />
      </div>
    </div>
  );
}

export default Owner;
