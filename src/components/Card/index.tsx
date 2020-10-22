import React from 'react';
import { Image, ImageProps, Dimensions } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { createBox } from '@shopify/restyle';

import pImg from '../../assets/images/panettone1.jpg';
import { Box, Text, Theme } from '../../styles';

const BoxImage = createBox<Theme, ImageProps>(Image);
const { width } = Dimensions.get('window');

interface Props {
  data?: {
    pName: string;
    description: string;
    calories: number;
    price: number;
  };
}

export const Card: React.FC<Props> = ({ data }) => (
  // const { pName, description, calories, price } = data;
  <Box
    justifyContent="flex-end"
    alignItems="center"
    position="relative"
    height="75%"
    width={width * 0.45}
    margin="m"
  >
    <BoxImage
      source={pImg}
      resizeMode="contain"
      width="50%"
      height="50%"
      position="absolute"
      top={20}
      zIndex="s"
    />
    <Box
      height="65%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      borderRadius="m"
      backgroundColor="background"
    >
      <Text variant="titleCard">Panettone Bauducco</Text>
      <Text variant="subTitle">O Panettone Bauducco é incomparável!</Text>
      <Box flexDirection="row" alignItems="center">
        <FontAwesome5 name="fire-alt" size={14} color="red" />
        <Text variant="calories">70 calorias</Text>
      </Box>
      <Text>R$ 19,90</Text>
    </Box>
  </Box>
);
