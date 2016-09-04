import React from "react";
import styled from 'styled-components';

import PluginListItemWrapper from './PluginListItemWrapper.react';

const SpinnerWrapper = styled.div`
  margin: 2em auto;
  width: 40px;
  height: 40px;
  position: relative;
`;

const SpinnerCircle = (props) => {
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
      -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
      animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
      ${props.delay && `
        -webkit-animation-delay: ${props.delay}s;
        animation-delay: ${props.delay}s;
      `}
    }
  `;
  return <CirclePrimitive />;
}

const Spinner = () => {
        return(
            <PluginListItemWrapper>
                <SpinnerWrapper>
                    <SpinnerCircle />
                    <SpinnerCircle rotate={30} delay={-1.1} />
                    <SpinnerCircle rotate={60} delay={-1} />
                    <SpinnerCircle rotate={90} delay={-0.9} />
                    <SpinnerCircle rotate={120} delay={-0.8} />
                    <SpinnerCircle rotate={150} delay={-0.7} />
                    <SpinnerCircle rotate={180} delay={-0.6} />
                    <SpinnerCircle rotate={210} delay={-0.5} />
                    <SpinnerCircle rotate={240} delay={-0.4} />
                    <SpinnerCircle rotate={270} delay={-0.3} />
                    <SpinnerCircle rotate={300} delay={-0.2} />
                    <SpinnerCircle rotate={330} delay={-0.1} />
                </SpinnerWrapper>
            </PluginListItemWrapper>
        );
}

export default Spinner;
