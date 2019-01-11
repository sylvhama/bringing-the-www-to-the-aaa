import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

const images = [
  require('file-loader!../images/games/ac.jpg'),
  require('file-loader!../images/games/child.png'),
  require('file-loader!../images/games/fc5.png'),
  require('file-loader!../images/games/forhonor.jpg'),
  require('file-loader!../images/games/pop.png'),
  require('file-loader!../images/games/r6.png'),
  require('file-loader!../images/games/sc.jpg'),
  require('file-loader!../images/games/transference.png'),
  require('file-loader!../images/games/wd.png')
];

const Logo = styled.img`
  max-width: 100%;
`;

const Grid = styled.div`
  margin-top: 3rem;
  display: grid;
  width: 100%;
  max-width: 1000px;
  grid-template-columns: repeat(3, 1fr);

  img {
    width: 100%;
  }
`;

export default () => (
  <Wrapper>
    <Logo src={require('file-loader!../images/ubi-mtl.png')} />
    <Grid>
      {images.map(image => (
        <img key={image} src={image} />
      ))}
    </Grid>
  </Wrapper>
);
