import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

const Button = ({ ...rest }: MuiButtonProps) => {
  return <MuiButton {...rest} />;
};

export default Button;