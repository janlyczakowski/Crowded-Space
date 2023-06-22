import styles from './StoryTelling.module.css';
import { useState, useCallback } from 'react';
import CustomTimeline from './Storytelling/CustomTimeline';
// import CustomSliderWithIcons from './Storytelling/CustomSliderWithIcons';
import React, { useEffect } from 'react';
import { Slider, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { ThumbUp } from '@mui/icons-material';
import { SliderThumb, Box } from '@mui/material';
import { ReactComponent as SputnikSvg } from '../../resources/Icons/milestones/sputnik.svg';
import { ReactComponent as GagarinSvg } from '../../resources/Icons/milestones/gagarin.svg';

const CustomSlider = React.memo(
  styled(Slider)(({ theme }) => ({
    // Custom styles for the Slider component
    '& .MuiSlider-thumb': {
      width: 40, // Adjust the size of the thumb circle
      height: 40,
      backgroundColor: 'rgb(19, 0, 88)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
    },
    '& .MuiSlider-rail': {
      backgroundColor: 'rgb(13, 0, 60)',
    },
  }))
);

function CustomThumbComponent(props) {
  const { children, ...other } = props;
  console.log('customthumbcomponent rerendered');
  // activeMilestoneValue = children.props.value;
  return (
    <SliderThumb {...other}>
      {children}
      {/* {milestoneIcon} */}
      {children.props.value === 100 && <SputnikSvg style={{ width: '30px' }} />}
      {children.props.value === 90 && <GagarinSvg style={{ width: '20px' }} />}
    </SliderThumb>
  );
}

function StoryTelling2() {
  const [activeMilestone, setActiveMilestone] = useState('1957');
  // const { activeMilestone, onSliderChangeHandler } = props;
  console.log('custom slider rendered');

  // let activeMilestoneValue = 100;
  // console.log(activeMilestoneValue);

  const milestones = [
    {
      value: 10,
    },
    {
      value: 20,
    },
    {
      value: 30,
    },
    {
      value: 40,
    },
    {
      value: 50,
    },
    {
      value: 60,
    },
    {
      value: 70,
    },
    {
      value: 80,
    },
    {
      value: 90,
    },
    {
      value: 100,
    },
  ];

  // // console.log(activeMilestone);
  const onSliderChangeHandler = (e) => {
    // console.log(e.target.value);
    if (e.target.value === 100) {
      console.log('changed');
      setActiveMilestone('1957');
    } else if (e.target.value === 90) {
      console.log('changed');
      setActiveMilestone('1961');
    }
  };
  // const onSliderChangeHandler = useCallback((event, value) => {
  //   if (value === 100) {
  //     setActiveMilestone('1957');
  //   } else if (value === 90) {
  //     setActiveMilestone('1961');
  //   }
  // }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.timeline}>
        <CustomSlider
          slots={{ thumb: (e) => CustomThumbComponent(e) }}
          step={10}
          marks={milestones}
          orientation="vertical"
          sx={{ height: 'calc(100vh - 150px)' }}
          track="inverted"
          onChange={onSliderChangeHandler}
          defaultValue={100}
        />
      </div>
      <div className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat
        dolores quaerat facere adipisci aut exercitationem, at quibusdam! Iure
        ad laudantium esse. Inventore, odio facere quam maxime animi non modi!
      </div>
    </div>
  );
}

export default StoryTelling2;
