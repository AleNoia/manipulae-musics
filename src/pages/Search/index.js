import React from 'react';
// import { useDispatch } from 'react-redux';

import List from '../../components/List';
import { Container } from '../../styles/GlobalStyles';
// import * as actions from '../../store/modules/request/actions';

export default function Search() {
  // const dispatch = useDispatch();

  // dispatch(actions.searchRequest());

  return (
    <Container>
      {/* <Loading isLoading={isLoading} /> */}
      <h1>Search</h1>
      <hr />
      <List />
    </Container>
  );
}
