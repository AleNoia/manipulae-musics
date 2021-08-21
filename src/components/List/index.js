import React from 'react';
import { useSelector } from 'react-redux';

// import axios from '../../services/axios';
// import * as actions from '../../store/modules/request/actions';

import { Container, CardContainer } from './styled';

export default function List() {
  // const dispatch = useDispatch();

  // const isSearch = useSelector((state) => state.request.isSeach);
  // console.log(isSearch);

  // async function getData() {
  //   if (isSearch === false) {
  //     const response = await axios.get('/chart/tracks');
  //     dispatch(actions.chartTracksRequest([response.data][0].tracks.data));
  //   }
  // }

  // React.useEffect(() => {
  //   getData();
  // });

  const list = useSelector((state) => state.request.listChartTracks);

  return (
    <Container>
      {list.map((listItem) => (
        <CardContainer key={String(listItem.id)}>
          {listItem.title}
        </CardContainer>
      ))}
    </Container>
  );
}
