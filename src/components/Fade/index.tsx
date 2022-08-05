import { FC } from 'react';
import { Fade as MuiFade, FadeProps as MuiFadeProps } from '@mui/material';

type FadeProps = Omit<MuiFadeProps, 'timeout'>

const Fade: FC<FadeProps> = ({ children, ...rest }: FadeProps) => {
  return (
    <MuiFade in timeout={1000} {...rest}>
      {children}
    </MuiFade>
  );
};

export default Fade;
