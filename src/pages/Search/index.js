import React from 'react';

import { Container } from 'react-bootstrap';
import List from '../../components/List';
import { Section, Title, ContainerMargin } from '../../styles/GlobalStyles';

export default function Search() {
  return (
    <ContainerMargin>
      <Container>
        <Section>
          <Title>Search</Title>
          <List isFavorite={false} />
        </Section>
      </Container>
    </ContainerMargin>
  );
}
