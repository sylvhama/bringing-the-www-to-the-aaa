import React from 'react';
import styled from 'styled-components';
import { Image } from 'mdx-deck';

import Wrapper from './Wrapper';
import Logo from './Logo';

const Background = styled(Wrapper)`
  background-color: rgba(0, 0, 0, 0.5);

  svg {
    max-width: 100%;
  }
`;

export default props => (
  <Image src={require('file-loader!../images/background.jpg')}>
    <Background>
      <Logo width={922} />
      <h1>{props.title}</h1>
    </Background>
  </Image>
);
