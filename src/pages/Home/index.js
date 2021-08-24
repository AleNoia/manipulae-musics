import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from 'react-bootstrap';
import axios from '../../services/axios';
import List from '../../components/List';
import Carrousel from '../../components/Carrousel';
import { Section, Title } from '../../styles/GlobalStyles';
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
    <>
      <Carrousel />
      <Container>
        <Section>
          <Title>Home</Title>
          <List />
        </Section>
      </Container>
    </>
  );
}
