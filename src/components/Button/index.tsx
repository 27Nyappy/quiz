import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import clsx from 'clsx';
import useStyles from './styles';

const Button = ({ className, ...rest }: MuiButtonProps) => {
  const { classes } = useStyles();

  return <MuiButton className={clsx(classes.button, className)} {...rest} />;
};

export default Button;
