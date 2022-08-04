import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  button: {
    '&[class*="MuiButtonBase-root"]': {
      width: 'fit-content',
      margin: `${theme.spacing(1)} auto`,
    },
  },
}));

export default useStyles;
