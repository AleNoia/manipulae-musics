import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import axios from '../../services/axios';
// import List from '../../components/List';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/request/actions';

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.listFavorites);

  async function getData() {
    dispatch(actions.chartTracksRequest([favorites]));
    console.log(favorites);
  }

  React.useEffect(() => {
    getData();
  });

  return (
    <Container>
      {/* <Loading isLoading={isLoading} /> */}
      <h1>Favorites</h1>
      <hr />
      {favorites.map((listItem) => (
        <div key={String(listItem.id)}>
          {listItem.name || listItem.title} <br />
          {listItem.type}
        </div>
      ))}
    </Container>
  );
}
