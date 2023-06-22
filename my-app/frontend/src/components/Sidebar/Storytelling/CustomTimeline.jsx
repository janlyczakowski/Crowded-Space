import * as React from 'react';
// import './App.css';
import styles from './CustomTimeline.module.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import { ReactComponent as SputnikSvg } from '../../../resources/Icons/milestones/sputnik.svg';
import { ReactComponent as AccidentalSvg } from '../../../resources/Icons/milestones/accidental_collision.svg';
import { ReactComponent as ApolloSvg } from '../../../resources/Icons/milestones/apollo.svg';
import { ReactComponent as GagarinSvg } from '../../../resources/Icons/milestones/gagarin.svg';
import { ReactComponent as MarsRoverSvg } from '../../../resources/Icons/milestones/marsrover.svg';
import { ReactComponent as GpsSvg } from '../../../resources/Icons/milestones/gps.svg';
import { ReactComponent as SatelliteSvg } from '../../../resources/Icons/milestones/satellite.svg';
import { ReactComponent as SatelliteDestructionSvg } from '../../../resources/Icons/milestones/satellite_destruction.svg';
import { ReactComponent as SpaceStationSvg } from '../../../resources/Icons/milestones/space_station.svg';
import { ReactComponent as TimeToActSvg } from '../../../resources/Icons/milestones/timetoact.svg';

function CustomTimeline() {
  return (
    <Timeline
      sx={{
        // height: 'calc(100vh - 150px)',
        height: '100%',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
      position="right"
    >
      <TimelineItem
      // sx={{
      //   padding: 0,
      //   flex: '1',
      //   display: 'flex',
      //   alignItems: 'center',
      // }}
      >
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ backgroundColor: 'black' }} variant="outlined">
            <SputnikSvg className={styles.icon} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            sx={{ color: 'white', fontSize: '0.95em' }}
            variant="h6"
            component="span"
          >
            1957
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem
        sx={{
          padding: 0,
          flex: '1',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ backgroundColor: 'black' }} color="primary">
            <GagarinSvg className={styles.icon} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            sx={{ color: 'white', fontSize: '0.95em' }}
            variant="h6"
            component="span"
          >
            1961
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem
        sx={{
          padding: 0,
          flex: '1',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ backgroundColor: 'black' }} color="primary">
            <SatelliteSvg className={styles.icon} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            sx={{ color: 'white', fontSize: '0.95em' }}
            variant="h6"
            component="span"
          >
            1965
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem
        sx={{
          padding: 0,
          flex: '1',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ backgroundColor: 'black' }} color="primary">
            <ApolloSvg className={styles.icon} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography
            sx={{ color: 'white', fontSize: '0.95em' }}
            variant="h6"
            component="span"
          >
            1969
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: '10px' }} />
          <TimelineDot sx={{ backgroundColor: 'black' }} color="primary">
            <SpaceStationSvg className={styles.icon} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, paddingTop: '29px' }}>
          <Typography
            sx={{ color: 'white', fontSize: '0.95em' }}
            variant="h6"
            component="span"
          >
            1973
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: '10px' }} />
          <TimelineDot sx={{ backgroundColor: 'black' }} color="primary">
            <GpsSvg className={styles.icon} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, paddingTop: '29px' }}>
          <Typography
            sx={{ color: 'white', fontSize: '0.95em' }}
            variant="h6"
            component="span"
          >
            1978
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: '10px' }} />
          <TimelineDot sx={{ backgroundColor: 'black' }} color="primary">
            <MarsRoverSvg className={styles.icon} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, paddingTop: '29px' }}>
          <Typography
            sx={{ color: 'white', fontSize: '0.95em' }}
            variant="h6"
            component="span"
          >
            2004
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: '10px' }} />
          <TimelineDot sx={{ backgroundColor: 'black' }} color="primary">
            <SatelliteDestructionSvg className={styles.icon} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, paddingTop: '29px' }}>
          <Typography
            sx={{ color: 'white', fontSize: '0.95em' }}
            variant="h6"
            component="span"
          >
            2007
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: '10px' }} />
          <TimelineDot sx={{ backgroundColor: 'black' }} color="primary">
            <AccidentalSvg className={styles.icon} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, paddingTop: '29px' }}>
          <Typography
            sx={{ color: 'white', fontSize: '0.95em' }}
            variant="h6"
            component="span"
          >
            2009
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: '10px' }} />
          <TimelineDot sx={{ backgroundColor: 'black' }} color="primary">
            <TimeToActSvg className={styles.icon} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, paddingTop: '29px' }}>
          <Typography
            sx={{ color: 'white', fontSize: '0.95em' }}
            variant="h6"
            component="span"
          >
            2023
          </Typography>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
}
export default CustomTimeline;
