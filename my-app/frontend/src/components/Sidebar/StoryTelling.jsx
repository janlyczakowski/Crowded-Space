import styles from './StoryTelling.module.css';
import { useState, useCallback } from 'react';
import CustomSliderWithIcons from './Storytelling/CustomSliderWithIcons';
import React from 'react';
import STSputnik from './Storytelling/StoryTellingContent/STSputnik';
import STGagarin from './Storytelling/StoryTellingContent/STGagarin';
import STCommercialSatellite from './Storytelling/StoryTellingContent/STComercialSatellite';
import STApollo from './Storytelling/StoryTellingContent/STApollo';
import STSkylab from './Storytelling/StoryTellingContent/STSkylab';
import STGPS from './Storytelling/StoryTellingContent/STGPS';
import STMars from './Storytelling/StoryTellingContent/STMars';
import STFengyun from './Storytelling/StoryTellingContent/STFengyun';
import STCollision from './Storytelling/StoryTellingContent/STCollision';
import STNow from './Storytelling/StoryTellingContent/STNow';

function StoryTelling() {
  const [activeMilestone, setActiveMilestone] = useState('1957');

  const onSliderChangeHandler = useCallback((e) => {
    if (e.target.value === 99) {
      setActiveMilestone('1957');
    } else if (e.target.value === 88) {
      setActiveMilestone('1961');
    } else if (e.target.value === 77) {
      setActiveMilestone('1965');
    } else if (e.target.value === 66) {
      setActiveMilestone('1969');
    } else if (e.target.value === 55) {
      setActiveMilestone('1973');
    } else if (e.target.value === 44) {
      setActiveMilestone('1978');
    } else if (e.target.value === 33) {
      setActiveMilestone('2004');
    } else if (e.target.value === 22) {
      setActiveMilestone('2007');
    } else if (e.target.value === 11) {
      setActiveMilestone('2009');
    } else if (e.target.value === 0) {
      setActiveMilestone('2023');
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.timeline}>
        <CustomSliderWithIcons onSliderChangeHandler={onSliderChangeHandler} />
      </div>
      <div className={styles.content}>
        {activeMilestone === '1957' && <STSputnik />}
        {activeMilestone === '1961' && <STGagarin />}
        {activeMilestone === '1965' && <STCommercialSatellite />}
        {activeMilestone === '1969' && <STApollo />}
        {activeMilestone === '1973' && <STSkylab />}
        {activeMilestone === '1978' && <STGPS />}
        {activeMilestone === '2004' && <STMars />}
        {activeMilestone === '2007' && <STFengyun />}
        {activeMilestone === '2009' && <STCollision />}
        {activeMilestone === '2023' && <STNow />}
      </div>
    </div>
  );
}

export default StoryTelling;
