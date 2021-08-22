import React from 'react';

import List from '../../components/List';
import { Container } from '../../styles/GlobalStyles';

export default function Search() {
  return (
    <Container>
      {/* <Loading isLoading={isLoading} /> */}
      <h1>Search</h1>
      <hr />
      <List />
    </Container>
  );
}
