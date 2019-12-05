import { darken } from 'polished'

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const colors = {
  white: '#FFF',
  primaryColor: '#F90093',
  secondaryColor: '#011627',
  paleGreyColor: '#F1F2F5',
};

const general = {
  borderRadius: '5px',
  boxShadow: (color: string, percentage: number) => `inset 0 -5px 0 ${darken(percentage ? percentage : 0.1, color)}`,
};

const input = {
  background: colors.paleGreyColor,
  borderRadius: general.borderRadius,
};

export const theme = {
  breakpoints,
  input,
  ...colors,
  ...general,
};
