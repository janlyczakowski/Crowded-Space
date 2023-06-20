import styles from './Statistics.module.css';
import { useState } from 'react';
import { ReactComponent as OwnerIcon } from '../../resources/Icons/ui_buttons/owner.svg';
import { ReactComponent as PurposeIcon } from '../../resources/Icons/ui_buttons/purpose.svg';
import { ReactComponent as DebrisIcon } from '../../resources/Icons/ui_buttons/debris.svg';
import Owner from '../Sidebar/Statistics/Owner';
import Purpose from '../Sidebar/Statistics/Purpose';
import Debris from '../Sidebar/Statistics/Debris';

function Statistics(props) {
  // const [activeButton, setActiveButton] = useState('owner');
  const { activeButton, setActiveButton } = props;

  console.log(activeButton);
  console.log('Statistics rendered');

  let owner_btn_style =
    activeButton === 'owner'
      ? `${styles.navigation_item} ${styles.navigation_item_active}`
      : `${styles.navigation_item}`;
  let purpose_btn_style =
    activeButton === 'purpose'
      ? `${styles.navigation_item} ${styles.navigation_item_active}`
      : `${styles.navigation_item}`;
  let debris_btn_style =
    activeButton === 'debris'
      ? `${styles.navigation_item} ${styles.navigation_item_active}`
      : `${styles.navigation_item}`;

  const onClickNavBtnHandler = (e) => {
    e.stopPropagation();
    console.log(e.target);
    let btn_id;
    if (e.target.nodeName === 'path') {
      btn_id = e.target.parentElement.parentElement.id;
      btn_id =
        btn_id !== ('owner' || 'purpose' || 'debris')
          ? e.target.parentElement.parentElement.parentElement.id
          : btn_id;
    } else {
      btn_id = e.target.id;
    }
    // change state only when inactive button is clicked
    if (btn_id !== activeButton) {
      setActiveButton(btn_id);
    }
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.navigation}>
        <li
          className={owner_btn_style}
          onClick={onClickNavBtnHandler}
          id="owner"
        >
          {/* <div className={styles.nav_icon_wrapper}> */}
          <OwnerIcon className={styles.nav_icon} id="owner" />
          {/* </div> */}
        </li>
        <li
          className={purpose_btn_style}
          onClick={onClickNavBtnHandler}
          id="purpose"
        >
          <PurposeIcon className={styles.nav_icon} id="purpose" />
        </li>
        <li
          className={debris_btn_style}
          onClick={onClickNavBtnHandler}
          id="debris"
        >
          <DebrisIcon className={styles.nav_icon} id="debris" />
        </li>
      </ul>
      <div className={styles.content}>
        {activeButton === 'owner' && <Owner />}
        {activeButton === 'purpose' && <Purpose />}
        {activeButton === 'debris' && <Debris />}
      </div>
      {/* <h1 style={{ color: 'white' }}>Statistics</h1> */}
    </div>
  );
}

export default Statistics;
