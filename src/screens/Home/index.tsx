import React from 'react';
import { FlatList } from 'react-native';

import { Card } from '../../components/Card';

import { Box, Text } from '../../styles';

export const Home: React.FC = () => (
  <Box flex={1} backgroundColor="gray">
    <Box flex={1} justifyContent="center" p="xl">
      <Text variant="title">Let's eat</Text>
      <Text variant="title">Panettone!</Text>
    </Box>
    <Box flex={2} alignItems="center" justifyContent="center">
      <FlatList
        data={[1, 2, 3, 4, 5]}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ index }) => (
          <Box justifyContent="center">
            <Card data={{ index }} />
          </Box>
        )}
      />
    </Box>
  </Box>
);
