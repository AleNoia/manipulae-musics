import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import {
  ListDiv,
  CardContainer,
  Title,
  Type,
  TitleContainer,
  FirstContainer,
  PlayerContainer,
} from './styled';

import { Section, ContainerMargin } from '../../styles/GlobalStyles';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites.listFavorites);

  React.useEffect(() => {}, [favorites]);

  return (
    <ContainerMargin>
      <Container>
        <Section>
          <Title>Favorites</Title>
          <ListDiv>
            {favorites.map((listItem) => (
              <CardContainer key={String(listItem[0].id)}>
                <FirstContainer>
                  <TitleContainer>
                    <Title>{listItem[0].name || listItem[0].title}</Title>
                    <Type>{listItem[0].type}</Type>
                  </TitleContainer>

                  {listItem[0].preview ? (
                    <PlayerContainer>
                      <audio controls>
                        <source src={listItem[0].preview} type="audio/mpeg" />
                        <track src={listItem[0].preview} kind="captions" />
                      </audio>
                    </PlayerContainer>
                  ) : (
                    <></>
                  )}
                </FirstContainer>
              </CardContainer>
            ))}
          </ListDiv>
        </Section>
      </Container>
    </ContainerMargin>
  );
}
