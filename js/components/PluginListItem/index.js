import React from 'react';
import styled, { css } from 'styled-components';

import constants from '../../constants';
import Wrapper from './Wrapper';
import Name from './Name';
import Description from './Description';

const PluginListItem = ({ url, name, description }) => {
  return (
    <Wrapper href={url}>
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Wrapper>
  );
}

export default PluginListItem;
