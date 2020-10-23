import React, { useEffect, useRef, useState } from 'react';
import { Pressable } from 'react-native';

import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import heartAnimation from '../../assets/animations/heart.json';
import starAnimation from '../../assets/animations/start-fav.json';
import pImg from '../../assets/images/panettone1.png';
import {
  Box,
  Container,
  Text,
  RectButton,
  Header,
  Content,
  Image,
  Main,
} from '../../styles';

export const Details: React.FC = () => {
  const [statusHeart, setStatusHeart] = useState(false);
  const [statusStar, setStatusStar] = useState(false);

  const navigation = useNavigation();
  const refStar = useRef<LottieView>(null);
  const refHeart = useRef<LottieView>(null);

  useEffect(() => {
    if (statusHeart) {
      refHeart.current?.play();
    } else {
      refHeart.current?.reset();
    }
  }, [statusHeart]);

  useEffect(() => {
    if (statusStar) {
      refStar.current?.play();
    } else {
      refStar.current?.reset();
    }
  }, [statusStar]);

  return (
    <Container flex={1} backgroundColor="gray">
      <Box
        flex={1.5}
        position="relative"
        justifyContent="center"
        alignItems="center"
      >
        <Header
          position="absolute"
          top={30}
          zIndex="l"
          width="100%"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          padding="m"
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Pressable onPress={() => setStatusHeart((state) => !state)}>
            <LottieView
              source={heartAnimation}
              ref={refHeart}
              duration={1000}
              loop={false}
              style={{ width: 52, height: 52 }}
            />
          </Pressable>
        </Header>
        <Image source={pImg} resizeMode="contain" width="75%" height="75%" />
      </Box>
      <Content
        flex={1}
        backgroundColor="background"
        borderTopLeftRadius="xl"
        borderTopRightRadius="xl"
        alignItems="center"
        position="relative"
        padding="xl"
      >
        <Box
          flexDirection="row"
          backgroundColor="primary"
          justifyContent="center"
          alignItems="center"
          padding="s"
          width="30%"
          position="absolute"
          top={-25}
          borderRadius="xl"
        >
          <Feather
            name="minus"
            size={20}
            color="black"
            // onPress={() => setCount((state) => state - 1)}
          />
          <Text
            style={{ fontFamily: 'Roboto-bold', fontSize: 20 }}
            marginHorizontal="m"
          >
            1
          </Text>
          <AntDesign
            name="plus"
            size={20}
            color="black"
            // onPress={() => setCount((state) => state + 1)}
          />
        </Box>
        <Main width="100%" position="absolute" top={50}>
          <Box flexDirection="row" justifyContent="space-between">
            <Text variant="detailsTitle">Panettone Bauducco</Text>
            <Box flexDirection="row" alignItems="center">
              <Text variant="baPrice">$ </Text>
              <Text variant="price">19,90</Text>
            </Box>
          </Box>
          <Box
            marginVertical="l"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box flexDirection="row">
              <Pressable onPress={() => setStatusStar((state) => !state)}>
                <LottieView
                  source={starAnimation}
                  ref={refStar}
                  loop={false}
                  style={{ width: 22, height: 22 }}
                />
              </Pressable>
              <Text>4.5</Text>
            </Box>
            <Box flexDirection="row" alignItems="center">
              <FontAwesome5 name="fire-alt" size={14} color="red" />
              <Text variant="calories" style={{ color: 'black' }}>
                70 Calorias
              </Text>
            </Box>
            <Text>10-15 min</Text>
          </Box>
          <Box>
            <Text variant="titleCard">Details</Text>
            <Text variant="subTitleCard" style={{ textAlign: 'left' }}>
              A massa com fermentação natural, que é exclusividade da Bauducco®,
              favorece a maciez das frutas, em uma mistura puramente italiana.
            </Text>
          </Box>
        </Main>
        <RectButton
          backgroundColor="primary"
          position="absolute"
          borderRadius="xl"
          padding="l"
          bottom={20}
        >
          <AntDesign name="plus" size={22} color="black" />
        </RectButton>
      </Content>
    </Container>
  );
};
