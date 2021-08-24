import styled from 'styled-components';
import { FormControl, Button } from 'react-bootstrap';

const text = (props) => props.theme.colors.text;
const primary = (props) => props.theme.colors.primary;

export const StyeledSearch = styled(FormControl)`
  width: 20vw;
  padding: 7px 20px;
  border: none;
  border-radius: 25px 0 0 25px;
`;

export const StyledButtonSearch = styled(Button)`
  padding: 0 16px;
  border: none;
  color: ${text} !important;
  background: #fff;
  border-radius: 0 25px 25px 0;
  &:hover {
    background: ${primary};
  }
`;

export const StyeledSelect = styled(FormControl)`
  padding: 0 10px;
  border: none;
  border-radius: 7px;
  margin-left: 10px;
`;
