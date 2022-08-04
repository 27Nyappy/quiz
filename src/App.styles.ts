import { makeStyles } from 'tss-react/mui';
import dogsCover from './assets/dogs-cover.png';

const useStyles = makeStyles()((theme) => ({
  imageContainer: {
    width: '100%',
    height: '200px',
    backgroundImage: `url(${dogsCover})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('sm')]: {
      height: '250px',
    },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    margin: theme.spacing(0, 1),
  },
}));

export default useStyles;
