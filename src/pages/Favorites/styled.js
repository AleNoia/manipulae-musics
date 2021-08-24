import styled from 'styled-components';
import { Button } from 'react-bootstrap';

// const text = (props) => props.theme.colors.text;
const primary = (props) => props.theme.colors.primary;
const secundary = (props) => props.theme.colors.secundary;
const secundaryDark = (props) => props.theme.colors.secundaryDark;
// const primaryDark = (props) => props.theme.colors.primaryDark;

export const ListDiv = styled.div`
  margin-top: 50px;
`;

export const Type = styled.div`
  background-color: ${primary};
  width: max-content;
  border-radius: 10px;
  padding: 10px;
`;

export const Title = styled.h2`
  margin-right: 10px;
  font-size: 26px;
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const PlayerContainer = styled.div`
  margin-top: 10px;
  audio {
    width: 100%;
  }
`;

export const FirstContainer = styled.div`
  width: 70%;
`;
export const SecondContainer = styled.div``;

export const StyledButton = styled(Button)``;

export const CardContainer = styled.div`
  .btn-primary {
    background-color: ${secundary};
    border: none;
    &:hover {
      background-color: ${secundaryDark};
    }
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  border-radius: 10px;
  margin: 13px 0;
  background-color: white;
`;
