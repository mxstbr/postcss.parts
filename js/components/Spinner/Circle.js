import React from 'react';
import styled from 'styled-components';
import { animations } from '../../constants';

export default (props) => {
  const CirclePrimitive = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    ${props.rotate && `
      -webkit-transform: rotate(${props.rotate}deg);
      -ms-transform: rotate(${props.rotate}deg);
      transform: rotate(${props.rotate}deg);
    `}
    &:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: #333;
      border-radius: 100%;
      animation: ${animations.spinnerCircle} 1.2s infinite ease-in-out both;
      ${props.delay && `
        -webkit-animation-delay: ${props.delay}s;
        animation-delay: ${props.delay}s;
      `}
    }
  `;
  return <CirclePrimitive />;
}
