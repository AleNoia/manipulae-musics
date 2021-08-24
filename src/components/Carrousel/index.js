import React from 'react';

import { Carousel } from 'react-bootstrap';
import axios from '../../services/axios';
import { StyledCarrousel } from './styled';

export default function Carrousel() {
  const [track, setTrack] = React.useState([]);
  const [trackImage, setTrackImage] = React.useState([]);

  const [artist, setArtist] = React.useState([]);
  const [artistImage, setArtistImage] = React.useState([]);

  const [podcast, setPodcast] = React.useState([]);
  const [podcastImage, setPodcastImage] = React.useState([]);

  function getData() {
    axios.get('/chart/tracks').then((response) => {
      setTrack(response.data.tracks.data[0]);
      setTrackImage(response.data.tracks.data[0].album.cover_big);

      setArtist(response.data.artists.data[0]);
      setArtistImage(response.data.artists.data[0].picture_big);

      setPodcast(response.data.podcasts.data[0]);
      setPodcastImage(response.data.podcasts.data[0].picture_big);
    });
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <StyledCarrousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>{track.title}</h3>
        </Carousel.Caption>
        <img className="d-block w-50" src={trackImage} alt={track.title} />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>{artist.name}</h3>
        </Carousel.Caption>
        <img className="d-block w-50" src={artistImage} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>{podcast.title}</h3>
        </Carousel.Caption>
        <img className="d-block w-50" src={podcastImage} alt="Third slide" />
      </Carousel.Item>
    </StyledCarrousel>
  );
}
