import { createTheme, createBox, createText } from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',
  yellow: '#fdcc4d',

  orange: '#FE724C',
  black: '#0B0B0B',
  white: '#FFFFFF',
};

const theme = createTheme({
  colors: {
    primary: palette.yellow,
    background: palette.white,
    orange: palette.orange,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 5,
    m: 15,
    l: 30,
    xl: 50,
  },
  zIndices: {
    s: 5,
    m: 10,
    l: 15,
    xl: 20,
  },
  textVariants: {
    title: {
      fontSize: 32,
      fontFamily: 'Roboto-bold',
    },
    titleCard: {
      fontSize: 14,
      fontFamily: 'Roboto-bold',
    },
    subTitle: {
      fontSize: 12,
      fontFamily: 'Roboto-thin',
      textAlign: 'center',
      marginTop: 's',
      marginBottom: 's',
    },
    calories: {
      fontFamily: 'Roboto-bold',
      marginLeft: 's',
      color: 'orange',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
