import React from 'react';
import { Slider } from '@mui/material';
import { styled } from '@mui/system';
import { SliderThumb } from '@mui/material';
import { ReactComponent as SputnikSvg } from '../../../resources/Icons/milestones/sputnik.svg';
import { ReactComponent as GagarinSvg } from '../../../resources/Icons/milestones/gagarin.svg';
import { ReactComponent as SatelliteSvg } from '../../../resources/Icons/milestones/satellite.svg';
import { ReactComponent as ApolloSvg } from '../../../resources/Icons/milestones/apollo.svg';
import { ReactComponent as SpaceStationSvg } from '../../../resources/Icons/milestones/space_station.svg';
import { ReactComponent as GpsSvg } from '../../../resources/Icons/milestones/gps.svg';
import { ReactComponent as MarsRoverSvg } from '../../../resources/Icons/milestones/marsrover.svg';
import { ReactComponent as SatelliteDestructionSvg } from '../../../resources/Icons/milestones/satellite_destruction.svg';
import { ReactComponent as AccidentalSvg } from '../../../resources/Icons/milestones/accidental_collision.svg';
import { ReactComponent as TimeToActSvg } from '../../../resources/Icons/milestones/timetoact.svg';

const CustomSlider = styled(Slider)(({ theme }) => ({
  // Custom styles for the Slider component
  '& .MuiSlider-thumb': {
    width: 40,
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
}));

const CustomSliderWithIcon = (props) => {
  const { onSliderChangeHandler } = props;
  console.log('custom slider rendered');

  function CustomThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        {children.props.value === 99 && (
          <SputnikSvg style={{ width: '30px' }} />
        )}
        {children.props.value === 88 && (
          <GagarinSvg style={{ width: '20px' }} />
        )}
        {children.props.value === 77 && (
          <SatelliteSvg style={{ width: '20px' }} />
        )}
        {children.props.value === 66 && <ApolloSvg style={{ width: '20px' }} />}
        {children.props.value === 55 && (
          <SpaceStationSvg style={{ width: '20px' }} />
        )}
        {children.props.value === 44 && <GpsSvg style={{ width: '20px' }} />}
        {children.props.value === 33 && (
          <MarsRoverSvg style={{ width: '20px' }} />
        )}
        {children.props.value === 22 && (
          <SatelliteDestructionSvg style={{ width: '20px' }} />
        )}
        {children.props.value === 11 && (
          <AccidentalSvg style={{ width: '20px' }} />
        )}
        {children.props.value === 0 && (
          <TimeToActSvg style={{ width: '20px' }} />
        )}
      </SliderThumb>
    );
  }
  const milestones = [
    {
      value: 0,
    },
    {
      value: 11,
    },
    {
      value: 22,
    },
    {
      value: 33,
    },
    {
      value: 44,
    },
    {
      value: 55,
    },
    {
      value: 66,
    },
    {
      value: 77,
    },
    {
      value: 88,
    },
    {
      value: 99,
    },
  ];

  return (
    <>
      <CustomSlider
        slots={{ thumb: CustomThumbComponent }}
        step={11}
        marks={milestones}
        orientation="vertical"
        sx={{ height: 'calc(100vh - 150px)' }}
        track="inverted"
        onChange={onSliderChangeHandler}
        defaultValue={99}
      />
    </>
  );
};
export default React.memo(CustomSliderWithIcon);
