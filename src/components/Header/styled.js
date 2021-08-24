import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const primary = (props) => props.theme.colors.primary;
const primaryDark = (props) => props.theme.colors.primaryDark;

export const StyeledNavbar = styled(Navbar)`
  height: 72px;
  background: ${primaryDark};
`;

export const StyledLink = styled(Link)`
  padding: 0 10px;
  color: ${primary};
  &:hover {
    color: #fff;
  }
`;
