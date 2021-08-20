import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from '../../services/axios';
import * as actions from '../../store/modules/request/actions';

// import Loading from '../../components/Loading';
import { Container } from '../../styles/GlobalStyles';
import { CardContainer } from './styled';

export default function Home() {
  const dispatch = useDispatch();

  async function getData() {
    const response = await axios.get('/chart/tracks');
    dispatch(actions.chartTracksRequest([response.data][0].tracks.data));
  }

  React.useEffect(() => {
    getData();
  });

  const musics = useSelector((state) => state.request.listChartTracks);
  // const isLoading = useSelector((state) => state.request.isLoading);

  return (
    <Container>
      {/* <Loading isLoading={isLoading} /> */}
      <h1>Home</h1>
      <hr />

      {musics.map((music) => (
        <CardContainer key={String(music.id)}>{music.title}</CardContainer>
      ))}
    </Container>
  );
}
