import { FC } from 'react';
import { Typography } from '@mui/material';
import { Button } from '../components';
import useStyles from './styles';

const LandingPage: FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <Typography
        className={classes.title}
        component='h1'
        variant='h3'
        align='center'
        color='primary.main'
      >
        Dog Quiz
      </Typography>
      <Typography align='center'>Welcome to the most PAW-some quiz!</Typography>
      <Typography align='center'>
        Are you ready to test your doggo knowledge?
      </Typography>
      <Button className={classes.startButton} href='/quiz'>
        Start Test
      </Button>
    </>
  );
};

export default LandingPage;
