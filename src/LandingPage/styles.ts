import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  title: {
    '&[class*="MuiTypography-root"]': {
      margin: theme.spacing(2, 1, 1),
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(4, 1, 3),
      },
    },
  },
  startButton: {
    '&[class*="MuiButtonBase-root"]': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(2),
    },
  },
}));

export default useStyles;
