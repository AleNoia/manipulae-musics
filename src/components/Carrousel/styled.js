import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

// const text = (props) => props.theme.colors.text;
// const primary = (props) => props.theme.colors.primary;
const primaryDark = (props) => props.theme.colors.primaryDark;

export const StyledCarrousel = styled(Carousel)`
  height: 87vh;
  background-color: ${primaryDark};
  position: relative;
  img {
    background-image: linear-gradient(to right, tranparent, white);
    position: absolute;
    right: 0;
  }
  .carousel-caption {
    padding: 0 1%;
    display: flex;
    max-width: 50%;
    left: 0;
    align-items: center;
    font-size: 56px;
    height: 100%;
    /* background-color: red; */
  }
  .carousel-inner {
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;
    & > * {
      height: 100%;
    }
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    bottom: 30px;
    position: absolute;
  }
`;
