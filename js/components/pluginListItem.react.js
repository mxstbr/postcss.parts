import React from "react";
import styled, { css } from 'styled-components';

import constants from '../constants';

import PluginListItemWrapper from './PluginListItemWrapper.react';

const Name = styled.h2`
  display: inline-block;
  color: ${constants.textColor};
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 1em;
`;

const Description = styled.h3`
  display: inline-block;
  color: ${constants.midGrey};
  font-size: 1.1em;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 0;
  @media (max-width: ${constants.maxWidth}) {
    display: block;
  }
`;

const PluginListItem = ({ url, name, description }) => {
    return(
        <PluginListItemWrapper href={url}>
            <Name>{name}</Name>
            <Description>{description}</Description>
        </PluginListItemWrapper>
    );
}

export default PluginListItem;
