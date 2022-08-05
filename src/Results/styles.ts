import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  answerString: {
    '&[class*="MuiTypography-root"]': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default useStyles;
