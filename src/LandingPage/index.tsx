import { Typography } from '@mui/material';
import { Button } from '../components';
import useStyles from './styles';

const LandingPage = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.landingPageContainer}>
      <Typography
        className={classes.title}
        component='h1'
        variant='h3'
        align='center'
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
    </div>
  );
};

export default LandingPage;
