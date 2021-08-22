import React from 'react';
import { useDispatch } from 'react-redux';

import axios from '../../services/axios';
import List from '../../components/List';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/request/actions';

export default function Home() {
  const dispatch = useDispatch();

  async function getData() {
    const response = await axios.get('/chart/tracks');
    dispatch(actions.chartTracksRequest([response.data][0].tracks.data));
  }

  React.useEffect(() => {
    getData();
  });

  return (
    <Container>
      {/* <Loading isLoading={isLoading} /> */}
      <h1>Home</h1>
      <hr />
      <List />
    </Container>
  );
}
