import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import * as actions from '../../store/modules/favorites/actions';

import {
  ListDiv,
  CardContainer,
  Title,
  Type,
  TitleContainer,
  FirstContainer,
  SecondContainer,
  PlayerContainer,
} from './styled';

export default function List() {
  //= =============================================================== HOOKS

  const dispatch = useDispatch();

  const list = useSelector((state) => state.request.listRequest);

  //= =============================================================== FUNÇÕES
  //= =============================== ESCOLHER COMO FAVORITO
  function handleFavorite(e, listItem) {
    e.preventDefault();

    // Redux
    dispatch(actions.favoritesRequest([listItem]));
    // console.log(hasFavorited);

    // Local Storage
    const favoritesArray = JSON.parse(localStorage.getItem('favorites'));
    favoritesArray.push(listItem);
    localStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  //= =============================================================== USEEFFECT
  React.useEffect(() => {
    // Local Storage
    const favoritesArray = JSON.parse(localStorage.getItem('favorites'));
    if (favoritesArray === null) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
  }, []);

  //= =============================================================== COMPONENTE
  return (
    <ListDiv>
      {list.map((listItem) => (
        <CardContainer key={String(listItem.id || listItem[0].id)}>
          <FirstContainer>
            <TitleContainer>
              <Title>{listItem.name || listItem.title}</Title>
              <Type>{listItem.type || listItem[0].type}</Type>
            </TitleContainer>

            {listItem.preview ? (
              <PlayerContainer>
                <audio controls>
                  <source
                    src={listItem.preview || listItem[0].preview}
                    type="audio/mpeg"
                  />
                  <track
                    src={listItem.preview || listItem[0].preview}
                    kind="captions"
                  />
                </audio>
              </PlayerContainer>
            ) : (
              <></>
            )}
          </FirstContainer>
          <SecondContainer>
            <Button
              type="button"
              onClick={(e) => {
                handleFavorite(e, listItem);
              }}
            >
              <FaStar size={24} />
            </Button>
          </SecondContainer>
        </CardContainer>
      ))}
    </ListDiv>
  );
}
