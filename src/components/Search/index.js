import React from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import axios from '../../services/axios';
import * as actions from '../../store/modules/request/actions';
// import history from '../../services/history';

import { Container, Form } from './styled';

export default function Serach() {
  const dispatch = useDispatch();

  const [searchValue, setSeachValue] = React.useState('');

  async function getData() {
    // dispatch(actions.searchRequest());
    const response = await axios.get(`/search?q=${searchValue}`);
    dispatch(actions.chartTracksRequest([response.data.data][0]));
    // console.log(response.data.data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      getData();
      // history.push('/search');
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor={searchValue}>
          <input
            value={searchValue}
            onChange={(e) => setSeachValue(e.target.value)}
            placeholder="Pesquise por um artista, álbum, música..."
          />
          <button type="submit">Pesquisar</button>
        </label>
      </Form>
    </Container>
  );
}
