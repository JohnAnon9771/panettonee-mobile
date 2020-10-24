import React, { SetStateAction } from 'react';
import { Dimensions } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { Box, Input } from '../../styles';

const { width } = Dimensions.get('window');

interface Props {
  data: Data[];
  setData: React.Dispatch<SetStateAction<Data[]>>;
}

export const Search: React.FC<Props> = ({ data, setData }) => {
  function searchFilterFunction(text: string): void {
    const newData = data?.filter((item) => {
      const itemData = item.brand.toUpperCase();
      const textData = text.toUpperCase();

      if (itemData.indexOf(textData) > -1) {
        return itemData.indexOf(textData) > -1;
      }

      return data;
    });
    setData(newData);
  }

  return (
    <Box
      flexDirection="row"
      width={width * 0.8}
      p="m"
      borderWidth={4}
      borderColor="background"
      backgroundColor="gray"
      borderRadius="m"
    >
      <AntDesign name="search1" size={24} color="black" />
      <Input
        marginLeft="m"
        style={{ fontFamily: 'Roboto-regular', fontSize: 12 }}
        width="80%"
        onChangeText={(text) => searchFilterFunction(text)}
        placeholder="Procure por suas marcas preferidas :)"
      />
    </Box>
  );
};
