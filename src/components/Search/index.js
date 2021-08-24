import React from 'react';
import { useDispatch } from 'react-redux';

import { Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/request/actions';
import { StyeledSearch, StyeledSelect, StyledButtonSearch } from './styled';

export default function Serach() {
  const dispatch = useDispatch();

  const [searchValue, setSeachValue] = React.useState('');
  const [typeSeachValue, setTypeSeachValue] = React.useState('');

  async function getData() {
    const response = await axios.get(
      `/search/${typeSeachValue}?q=${searchValue}`
    );
    dispatch(actions.chartTracksRequest([response.data.data][0]));
  }

  function handleSubmit(e) {
    e.preventDefault();
    getData();
    history.push('/search');
  }

  return (
    <>
      <Form onSubmit={handleSubmit} className="d-flex">
        <StyeledSearch
          type="search"
          placeholder="Faça uma pesquisa"
          value={searchValue}
          onChange={(e) => setSeachValue(e.target.value)}
        />
        <StyledButtonSearch type="submit">
          <FaSearch size={18} />
        </StyledButtonSearch>
      </Form>

      <StyeledSelect
        as="select"
        type="select"
        value={typeSeachValue}
        onChange={(e) => setTypeSeachValue(e.target.value)}
      >
        <option value="track">Músicas</option>
        <option value="artist">Artista</option>
        <option value="album">Álbum</option>
        <option value="podcast">Podcast</option>
        <option value="playlist">Playlist</option>
        <option value="radio">Radio</option>
      </StyeledSelect>
    </>
  );
}
