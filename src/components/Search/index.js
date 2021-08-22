import React from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import axios from '../../services/axios';
import * as actions from '../../store/modules/request/actions';
import history from '../../services/history';

import { Container, Form } from './styled';

export default function Serach() {
  const dispatch = useDispatch();

  const [searchValue, setSeachValue] = React.useState('');
  const [typeSeachValue, setTypeSeachValue] = React.useState('');

  async function getData() {
    const response = await axios.get(
      `/search/${typeSeachValue}?q=${searchValue}`
    );
    dispatch(actions.chartTracksRequest([response.data.data][0]));
    // console.log(response.data.data);
    // console.log(`/search/${typeSeachValue}?q=${searchValue}`);
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      getData();
      history.push('/search');
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor={searchValue}>
          <input
            type="search"
            value={searchValue}
            onChange={(e) => setSeachValue(e.target.value)}
            placeholder="Pesquise por um artista, álbum, música..."
          />
          <select
            value={typeSeachValue}
            onChange={(e) => setTypeSeachValue(e.target.value)}
          >
            <option value="track">track</option>
            <option value="artist">artist</option>
            <option value="album">album</option>
            <option value="podcast">podcast</option>
            <option value="playlist">playlist</option>
            <option value="radio">radio</option>
          </select>
          <button type="submit">Pesquisar</button>
        </label>
      </Form>
    </Container>
  );
}
