import { makeStyles } from 'tss-react/mui';

const useSharedStyles = makeStyles()((theme) => ({
  title: {
    '&[class*="MuiTypography-root"]': {
      margin: theme.spacing(2, 1, 1),
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(4, 1, 3),
      },
    },
  },
}));

export default useSharedStyles;
