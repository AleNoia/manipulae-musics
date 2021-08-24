import React from 'react';

import { Container, Card } from 'react-bootstrap';
import { ContainerMargin } from '../../styles/GlobalStyles';
// import { card } from './styled';

export default function Page404() {
  return (
    <ContainerMargin>
      <Container>
        <Card>
          <h1>Essa página não existe</h1>
        </Card>
      </Container>
    </ContainerMargin>
  );
}
