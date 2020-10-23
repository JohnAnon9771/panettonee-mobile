import React from 'react';
import { Dimensions, Pressable, PressableProps } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createBox } from '@shopify/restyle';

import pImg from '../../assets/images/panettone1.png';
import { Box, Container, Text, Image, Theme } from '../../styles';

const BoxPressable = createBox<Theme, PressableProps>(Pressable);
const { width } = Dimensions.get('window');

interface Props {
  data?: {
    // pName: string;
    // description: string;
    // calories: number;
    // price: number;
    index: number;
  };
}

export const Card: React.FC<Props> = () => {
  const navigation = useNavigation();
  return (
    // const { pName, description, calories, price } = data;
    <Container
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      height="75%"
      width={width * 0.45}
      margin="m"
    >
      <Image
        source={pImg}
        resizeMode="contain"
        width="50%"
        height="50%"
        position="absolute"
        top={20}
        zIndex="s"
      />
      <BoxPressable
        onPress={() => navigation.navigate('Details')}
        height="65%"
        width="100%"
        justifyContent="center"
        alignItems="center"
        borderRadius="m"
        backgroundColor="background"
        position="relative"
      >
        <Text variant="titleCard">Panettone Bauducco</Text>
        <Text variant="subTitleCard">O Panettone Bauducco é incomparável!</Text>
        <Box flexDirection="row" alignItems="center">
          <FontAwesome5 name="fire-alt" size={14} color="red" />
          <Text variant="calories">70 Calorias</Text>
        </Box>
        <Box
          flexDirection="row"
          alignItems="center"
          margin="m"
          position="absolute"
          bottom={15}
        >
          <Text variant="baPrice">$ </Text>
          <Text variant="price">19,90</Text>
        </Box>
      </BoxPressable>
    </Container>
  );
};
