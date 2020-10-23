import { ReactNode } from 'react';
import { Image as RNImage, ImageProps } from 'react-native';
import {
  RectButton as RHRectButton,
  RectButtonProperties,
} from 'react-native-gesture-handler';

import { createTheme, createBox, createText } from '@shopify/restyle';

interface RectButtonProps extends RectButtonProperties {
  children?: ReactNode;
}

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
  gray: '#EFEFEF',
};

const theme = createTheme({
  colors: {
    primary: palette.yellow,
    background: palette.white,
    orange: palette.orange,
    gray: palette.gray,
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
    subTitleCard: {
      fontSize: 12,
      fontFamily: 'Roboto-thin',
      textAlign: 'center',
      marginTop: 's',
      marginBottom: 's',
    },
    calories: {
      fontFamily: 'Roboto-regular',
      marginLeft: 's',
      color: 'orange',
    },
    price: {
      fontSize: 22,
      fontFamily: 'Roboto-bold',
    },
    baPrice: {
      color: 'primary',
      fontSize: 16,
    },
    detailsTitle: {
      fontSize: 22,
      fontFamily: 'Roboto-regular',
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
export const Image = createBox<Theme, ImageProps>(RNImage);
export const RectButton = createBox<Theme, RectButtonProps>(RHRectButton);
export const Container = createBox<Theme>();
export const Content = createBox<Theme>();
export const Header = createBox<Theme>();
export const Main = createBox<Theme>();
export const Footer = createBox<Theme>();
export default theme;
