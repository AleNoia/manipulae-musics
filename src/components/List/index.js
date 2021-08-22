import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import * as actions from '../../store/modules/favorites/actions';

import { Container, CardContainer } from './styled';

export default function List() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.request.listChartTracks);
  // const favorites = useSelector((state) => state.favorites.listFavorites);

  // function checkFavorite(id) {
  //   favorites.map((fav) => {
  //     if (fav.id === id) {
  //       return true;
  //     }
  //     return false;
  //   });
  // }

  function handleFavorite(e, listItem) {
    e.preventDefault();
    dispatch(actions.favoritesRequest([listItem][0]));
  }

  return (
    <Container>
      {/* <button
        type="button"
        onClick={() => {
          console.log(checkFavorite(1391349252));
        }}
      >
        Atualizar
      </button> */}
      {list.map((listItem) => (
        <CardContainer key={String(listItem.id)}>
          {listItem.name || listItem.title} <br />
          {listItem.type}
          {/* {checkFavorite(listItem.id) ? 'Favoritado' : ''} */}
          <button
            type="button"
            onClick={(e) => {
              handleFavorite(e, listItem);
            }}
          >
            <FaStar size={10} />
          </button>
        </CardContainer>
      ))}
    </Container>
  );
}
