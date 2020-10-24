import React from 'react';
import { Dimensions, Pressable, PressableProps } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createBox } from '@shopify/restyle';

import { Box, Container, Text, Image, Theme } from '../../styles';

const BoxPressable = createBox<Theme, PressableProps>(Pressable);
const { width, height } = Dimensions.get('window');

export const Card: React.FC<Data> = (props) => {
  const { name, calories, description, price, thumbnail_url } = props;
  const navigation = useNavigation();
  return (
    <Container
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      height={height * 0.45}
      width={width * 0.45}
      margin="m"
    >
      <Image
        source={{ uri: thumbnail_url }}
        resizeMode="contain"
        width="50%"
        height="50%"
        position="absolute"
        top={55}
        zIndex="s"
      />
      <BoxPressable
        onPress={() =>
          navigation.navigate('Details', {
            ...props,
          })
        }
        height="65%"
        width="100%"
        justifyContent="center"
        alignItems="center"
        borderRadius="m"
        backgroundColor="background"
        position="relative"
      >
        <Text variant="titleCard">{name}</Text>
        <Text variant="subTitleCard" numberOfLines={1}>
          {description}
        </Text>
        <Box flexDirection="row" alignItems="center">
          <FontAwesome5 name="fire-alt" size={14} color="red" />
          <Text variant="calories">{calories} Calorias</Text>
        </Box>
        <Box
          flexDirection="row"
          alignItems="center"
          margin="m"
          position="absolute"
          bottom={15}
        >
          <Text variant="baPrice">$ </Text>
          <Text variant="price">{price}</Text>
        </Box>
      </BoxPressable>
    </Container>
  );
};
