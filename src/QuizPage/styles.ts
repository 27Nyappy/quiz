import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  button: {
    '&[class*="MuiButtonBase-root"]': {
      display: 'flex',
    },
  },
}));

export default useStyles;
