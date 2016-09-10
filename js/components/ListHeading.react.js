import React from "react";
import { Link } from "react-router";
import styled from "styled-components";

import constants from "../constants";

const Wrapper = styled.div`
padding: 1em;
margin: 0;
border-bottom: 1px solid ${constants.lightGrey};
text-align: center;
width: 100%;
position: relative;
> h2 {
  padding: 0;
	margin: 0;
}
`;

const Icon = styled.svg`
height: 1.5em;
width: 1.5em;
`;

const HeadingBack = styled(Link)`
position: absolute;
top: 0;
left: 0;
padding: 1em;
border-right: 1px solid ${constants.lightGrey};

&:hover {
  background-color: ${constants.lightGrey};
	cursor: pointer;
}
`;

const ListHeading = ({text}) => {
  return(
    <Wrapper>
      <HeadingBack to="/">
          <Icon width="24" height="24" viewBox="0 0 24 24">
            <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" fill="none">
              <path d="M.5.5h10v10h-10zM13.5.5h10v10h-10zM.5 13.5h10v10h-10zM13.5 13.5h10v10h-10z"/>
            </g>
          </Icon>
      </HeadingBack>
      <h2>{text}</h2>
    </Wrapper>
  );
}

export default ListHeading;
