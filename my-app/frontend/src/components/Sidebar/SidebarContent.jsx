import styles from './SidebarContent.module.css';
import { ReactComponent as StoryTellingIcon } from '../../resources/Icons/ui_buttons/storytelling.svg';
import { ReactComponent as StatisticsIcon } from '../../resources/Icons/ui_buttons/statistics.svg';
import { useEffect, useState } from 'react';
import StoryTelling from './StoryTelling';
import Statistics from './Statistics';

function SidebarContent() {
  const [activeNavigation, setActiveNavigation] = useState('storytelling');

  console.log('SidebarContent rendered');
  let storytelling_btn_style =
    activeNavigation === 'storytelling'
      ? `${styles.nav_icon_wrapper} ${styles.nav_icon_active}`
      : `${styles.nav_icon_wrapper}`;
  let statistics_btn_style =
    activeNavigation === 'statistics'
      ? `${styles.nav_icon_wrapper} ${styles.nav_icon_active}`
      : `${styles.nav_icon_wrapper}`;

  const onClickNavBtnHandler = (e) => {
    e.stopPropagation();
    let btn_id;
    if (e.target.nodeName === 'path') {
      btn_id = e.target.parentElement.parentElement.id;
      btn_id =
        btn_id !== ('statistics' || 'storytelling')
          ? e.target.parentElement.parentElement.parentElement.id
          : btn_id;
    } else {
      btn_id = e.target.id;
    }
    // change state only when inactive button is clicked
    if (btn_id !== activeNavigation) {
      setActiveNavigation(btn_id);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <div
          className={storytelling_btn_style}
          onClick={onClickNavBtnHandler}
          id="storytelling"
        >
          <StoryTellingIcon className={styles.nav_icon} id="storytelling" />
        </div>
        <div
          className={statistics_btn_style}
          onClick={onClickNavBtnHandler}
          id="statistics"
        >
          <StatisticsIcon className={styles.nav_icon} id="statistics" />
        </div>
      </div>
      <div className={styles.content_container}>
        {activeNavigation === 'storytelling' && <StoryTelling />}
        {activeNavigation === 'statistics' && <Statistics />}
      </div>
    </div>
  );
}

export default SidebarContent;
