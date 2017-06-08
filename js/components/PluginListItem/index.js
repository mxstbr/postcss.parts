import React from 'react';

import Wrapper from './Wrapper';
import Name from './Name';
import Description from './Description';
import Stars from './Stars';

const PluginListItem = ({ url, name, description, stars }) => {
  return (
    <Wrapper href={url}>
      <Stars>{stars}</Stars>
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Wrapper>
  );
}

export default PluginListItem;
