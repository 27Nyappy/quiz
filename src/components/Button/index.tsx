import { FC } from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import clsx from 'clsx';
import useStyles from './styles';

const Button: FC<MuiButtonProps> = ({
  className,
  children,
  ...rest
}: MuiButtonProps) => {
  const { classes } = useStyles();

  return (
    <MuiButton className={clsx(classes.button, className)} {...rest}>
      {children}
    </MuiButton>
  );
};

export default Button;
