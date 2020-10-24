import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import Axios from 'axios';

import { Card } from '../../components/Card';
import { Search } from '../../components/Search';

import api from '../../services/api';
import { Box, Text, Header } from '../../styles';

export const Home: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const { CancelToken } = Axios;
    const source = CancelToken.source();
    async function getDataPane() {
      try {
        const results = await api.get<Data[]>('/panettonee/index');
        setData(results.data);
      } catch (err) {
        if (Axios.isCancel(err)) {
          // eslint-disable-next-line no-console
          console.log('cancelled');
        }
      }
    }
    getDataPane();
    return () => source.cancel();
  }, []);

  return (
    <Box flex={1} backgroundColor="lightgray">
      <Header
        flex={1}
        justifyContent="space-between"
        alignItems="flex-start"
        p="xl"
      >
        <Box marginTop="m">
          <Text variant="title">Let's eat</Text>
          <Text variant="title">Panettone!</Text>
        </Box>
        <Box>
          <Search data={data} setData={setData} />
        </Box>
      </Header>

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <Box justifyContent="center">
            <Card {...item} />
          </Box>
        )}
      />
    </Box>
  );
};
